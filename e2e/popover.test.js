import puppetteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(10000);

describe('valid error', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:8080';

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
      headless: false, // show gui
      slowMo: 250,
      devtools: true, // show devTools
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  describe('validate form on error block', () => {
    test('should add valid', async () => {
      await page.goto(baseUrl);
      await page.$eval('#btn', (elem) => elem.click());
      await page.waitForSelector('.hidden');
    });
  });
});
