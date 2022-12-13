const puppeteer = require('puppeteer');
const { take_screenShot, hold } = require('./utils');
const { clicking_Button, click_Button } = require('./Strategy/Button');
// const { futures_Tab } = require('./FuturesTab');
// const { options_Tab } = require('./OptionsTab');
// const { charts_Tab } = require('./ChartsTab');
// const { strategy_Tab } = require('./Strategy/StrategyTab');
const { analysis_Tab } = require('./AnalysisTab');
// const { fii_dii_Tab } = require('./FiiDii');

const idenftify = [];

const testLogin = async (page, email, password) => {
  // ? Browser Page
  await page.goto('http://localhost:3000/broker/login');

  // ?Login Page
  const login = await clicking_Button(page, "//span[contains(text(),'Login with Email')]", '1   start');

  if (login) {
    // ? user mail login
    const user = await page.$x("//input[@id = 'email']");

    if (user.length > 0) {
      await user[0].click();
      await user[0].type(email);
      console.log('    2   email :', email);
    } else {
      await take_screenShot(arg, 'User');
    }

    // ? user password
    const pass = await page.$x("//input[@id = 'password']");

    if (pass.length > 0) {
      await pass[0].click();
      await pass[0].type(password);
      console.log('    3   password :', password);
    }

    // ? Loggin Processing Page
    await clicking_Button(page, "//button[contains(text(),'Continue')]", '4   Continue');

    await hold(2000);

    // ? if Logging failed capture the screenshot
    const sc = await page.$x("//div[contains(text(),'Email or Password is Wrong')]");

    if (sc.length != 0) {
      await take_screenShot(page, 'login Failed');
      console.log('    5   Failed login & Capture ScreenShot ');
    } else {
      await page.$x("//a[contains(text(), 'User')]");

      console.log('    6   login Successfull');

      // ? futures Tab
      console.log('    7     Navigating to Futures Tab');
      await futures_Tab(page);

      // ? option Tab
      console.log('    8     Navigating to Options Tab');
      await options_Tab(page);

      // ? chart Tab
      console.log('    9     Navigating to Charts Tab');
      await charts_Tab(page);

      //  ? strategy  Tab
      console.log('    10     Navigating to Strategy Tab');
      await strategy_Tab(page);

      // ? analysis Tab
      console.log('    11   Navigating to Analysis Tab');
      await analysis_Tab(page);

      // ? FII_DII Tab
      console.log('12    Navigating to FII/DII Tab');
      await fii_dii_Tab(page);

      // ? Icon Tab
      await clicking_Button(page, "//img[@alt = 'User icon']", ' Icon');

      //  ? user Logout
      await click_Button(page, "//button[contains(text(), 'Logout') ]", ' Logout');

      console.log('     Logout Successfull');
    }
  }
};

puppeteer
  .launch({ headless: false, defaultViewport: null, args: ['--start-maximized'], slowMo: 100 })
  .then(async browser => {
    const page = (await browser.pages())[0];

    // await testLogin(page, 'jacksparrow.mdjack@gmail.com', '123456'); // ? test 1
    await testLogin(page, 'ithirajma.2001@gmail.com', '123456'); // ? test 2
  });

//  ?
module.exports.idenftify = idenftify;
