const puppeteer = require('puppeteer');
const { clicking_Button } = require('./utils/function');
const { take_screenShot } = require('./utils/index');

/**
 *
 * @param {*} page
 * @param {*} email
 * @param {*} password
 * @description - Mobile view Testing script
 */
const automation_script = async (page, email, password) => {
  // ? URL Page
  await page.goto('https://stilt.co.in/broker/login');

  // ? Login Page land

  const login = await clicking_Button(page, "//span [contains(text(),'Create Login with your email')]", '1      start');

  if (login) {
    // ? test case passed
  } else {
    await take_screenShot(page, 'Login');
  }
};

puppeteer
  .launch({
    product: 'chrome',
    headless: false,
    defaultViewport: { width: 425, height: 866, isMobile: true },
    slowMo: 100,
  })
  .then(async (browser) => {
    /**
     * @description - Check test Cases
     */
    const page = (await browser.pages())[0];
    // page.setViewport({ width: 390, height: 844, isMobile: true });
    // page.emulate(devic)

    await automation_script(page, 'viyas2001@gmail.com', 'Viyas123');
  });
