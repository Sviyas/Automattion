const puppeteer = require('puppeteer');
const { createCursor } = require('ghost-cursor');

const run = async url => {
  const browser = await puppeteer.launch({ headless: false, slomo: 100, defaultViewport: null });
  const page = await browser.newPage();
  const selector = "//button [@id ='login']";

  await page.goto(url);
  const cursor = createCursor(page);
  console.log('cursorrrr', cursor);
  const ele = await page.$x(selector);
  console.log('element : ', ele);
  console.log('cursor : ');
  await cursor.moveTo({ x: 1279, y: 89 });
  console.log('click : ');
  // await cursor.click(ele);

  // shorthand for
  // await cursor.move(selector)
  // await cursor.click()
  // };
  // console.log('values : ', values);
};

run('https://danube-web.shop/');
