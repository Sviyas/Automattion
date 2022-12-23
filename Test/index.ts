// const puppeteer = require('puppeteer');
const puppeteer = require('puppeteer');
import path from 'path';
// import fs from 'fs/promises';

(async () => {
  // console.log('files', files);

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const webSite = 'https://www.dropbox.com/sh/wqxmblg9jvoa3q4/AADpR9oq68sekPjPLegkTFKNa?dl=0';
  await page.goto(webSite);
  const [response] = await Promise.all([
    // The promise resolves after navigation has finished
    page.click(
      '#component4257870292256668213 > div > div > div > div.sl-page-body.view-in-app-bar-present > div.sl-toggle-with-body > div.sl-body > table > tbody > tr:nth-child(2) > td.mc-table-cell.mc-media-cell.sl-list-column--filename > a'
    ), // Clicking the link will indirectly cause a navigation
    page.waitForNavigation({ waitUntil: 'networkidle0' })
  ]);
  console.log('response :', response);

  await page.goto(webSite);
  await page.emulateMediaType('screen');
  await page.pdf({ path: path.resolve(__dirname, '../Database', 'photo.pdf') });
  // / value);

  await browser.close();
})();
