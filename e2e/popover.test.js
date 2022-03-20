import puppetteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(30000); // default puppeteer timeout

describe('Popopers show/hide', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:8888/';

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppetteer.launch({
      // headless: false, // show gui
      // devtools: true, // show devTools
      // slowMo: 250
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    server.kill();
    await browser.close();
  });

  describe('validate form on error block', () => {
    test('Popovers show/hide', async () => {
      await page.goto(baseUrl);
      const button = await page.$('button');
      page.click('button');
      await page.waitForSelector('.hidden');
    });
  });
});
