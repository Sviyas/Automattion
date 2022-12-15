const puppeteer = require('puppeteer');
// const { installMouseHelper } = require('./install-mouse-helper');
const { installMouseHelper } = require('./mouse');

(async () => {
  const browser = await puppeteer.launch({ headless: false, defaultViewport: null, slowMo: 100 });
  const page = await browser.newPage();
  // Installs the helper to the page. Mouse will be visible in the subsequent navigation.
  await installMouseHelper(page);
  // Here's the navigation. From now on we'll have a mouse cursor on the page.
  await page.goto('https://danube-web.shop/');
  // await page.mouse.move(1295, 63);
  await page.mouse.click(1295, 67);
})();
// run('https://danube-web.shop/');
const { options_Tab } = require('./OptionsTab');
const { options_Tab } = require('./OptionsTab');
const { options_Tab } = require('./OptionsTab');
const { options_Tab } = require('./OptionsTab');
const { options_Tab } = require('./OptionsTab');
const { options_Tab } = require('./OptionsTab');

const strategBuilderSearch = await clicking_Button(
  arg,
  "//div [@id ='strategy-view-search']",
  '    Strategy Builder Search'
);
if (strategBuilderSearch) {
  // ? strategy builder date picker
  const strategBuilderDatePicker = await clicking_Button(
    arg,
    "//div [@id ='strategy-view-select-with-title-date']",
    '    Strategy Date Picker'
  );

  // ?
  if (strategBuilderDatePicker) {
    // ? conditin passed
    // ? pending to add Greeks tab icon
  } else {
    // @ts-expect-error
    await take_screenShot(arg, 'Strategy Builder Date picker');
  }
} else {
  // @ts-expect-error
  await take_screenShot(arg, 'Strategy Builder Search');
}
