const puppeteer = require('puppeteer');
const { clicking_Button } = require('./Utils/Functions');
const { take_screenShot, hold } = require('./Utils/utils');
const { page_navigations } = require('./Pages/Script');

/**
 *
 * @param {*} page - page
 * @param {*} email - email id
 * @param {*} password - password
 */
const automate_script = async (page, email, password) => {
  // ? Browser Page
  // http://localhost:3000/broker/login
  await page.goto('http://localhost:3000/broker/login');

  // ? Login Page Land
  const login = await clicking_Button(page, "//p [@id ='sigin']", '1      start');

  await hold(1000);

  if (login) {
    // ? user mail login
    const user = await page.$x("//input[@id = 'email']");

    if (user.length > 0) {
      await user[0].click();
      await user[0].type(email);
      console.log('    2      email    :', email);
    } else {
      await take_screenShot(page, 'User');
    }

    // ? user password
    const pass = await page.$x("//input[@id = 'password']");

    if (pass.length > 0) {
      await pass[0].click();
      await pass[0].type(password);
      console.log('    3      password :', password);
    } else {
      await take_screenShot(page, 'Password');
    }

    // ? Loggin Processing
    const continueLogin = await clicking_Button(page, "//button[contains(text(),'Continue')]", '4      Continue');

    if (continueLogin.length !== 0) {
      await hold(2000);
      // ? if Logging failed
      const sc = await page.$x("//div[contains(text(),'Email or Password is Wrong!')]");

      if (sc.length != 0) {
        await take_screenShot(page, 'login Failed');
        console.log('    5     Failed login & Capture ScreenShot ');
      } else if (sc.length == 0) {
        // ?if user not found
        const userFailed = await page.$x("//div [contains(text(),'User not found')]");

        await hold(1000);
        if (userFailed.length != 0) {
          await take_screenShot(page, 'User Not Found');
        } else {
          // ? Navigate to all pages

          await page_navigations(page);
        }
      }
    } else {
      // ? if login not complete
      await take_screenShot(page, 'Continue');
    }

    await hold(2000);
  } else {
    await take_screenShot(page, 'Log in');
  }
};

puppeteer.launch({ headless: false, defaultViewport: null, args: ['--start-maximized'], slowMo: 100 }).then(async (browser) => {
  const page = (await browser.pages())[0];

  // await automate_script(page, 'jacksparrow.mdjack@gmail.com', '123456'); // ? test 1
  // await automate_script(page, 'ithirajma.2001@gmail.com', '123490'); // ? test 2
  await automate_script(page, 'ithiraj.tealvue@gmail.com', '123123'); // ? test 2
});
