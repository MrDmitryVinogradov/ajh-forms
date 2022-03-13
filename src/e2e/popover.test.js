import puppeteer from 'puppeteer';

jest.setTimeout(15000);
describe('popover', () => {
  const APP = 'http://localhost:9000/';
  let page = null;
  let browser = null;
  const width = 1920;
  const height = 1080;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      // headless: false,
      // slowMo: 250,
      // args: [`--window-size=${width},${height}`],
    });
    page = await browser.newPage();
    await page.setViewport({ width, height });
  });
  afterAll(async () => {
    await browser.close();
  });
  test('should show popover on click', async () => {
    await page.goto(APP);
    const btn = await page.$('.btn');
    await btn.click();
    await page.waitForSelector('.hidden');
  }, 10000);
});
