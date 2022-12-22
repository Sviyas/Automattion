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

//  nth strike wise values

// ! check last strikewise iv

// ? fetch nth strikewise values
const nthstrikewise = await (
  await (await arg.$x("//p [@id ='strikewise-iv-value']"))[divlength].getProperty('textContent')
).jsonValue();

const nthstrikeval = parseFloat(nthstrikewise);

console.log(`        ${label} Strikewise value 2️⃣  : `, nthstrikeval);

// ? click nth strike wise iv increment button
const incre = "//p [@id = '" + divlength + "-plusclick-btn']";

const nthstrikeinc = await clicking_Button(arg, incre, `    ${divlength} Strike Increment`);

await hold(1000);

const nthincre = await (
  await (await arg.$x("//p [@id ='strikewise-iv-value']"))[divlength].getProperty('textContent')
).jsonValue();

const nthincreVal = parseFloat(nthincre);

console.log(`        ${label} ${divlength} Strikewise Increment Values : `, nthincreVal);
await hold(1000);

// ? click Strike Wise nth Decrement
const decre = "//p [@id = '" + divlength + "-minusclick-btn']";

const nthstrikedecre = await clicking_Button(arg, decre, `    ${divlength} Strike Decrement`);
await hold(1000);

const nthdecre = await (
  await (await arg.$x("//p [@id ='strikewise-iv-value']"))[divlength].getProperty('textContent')
).jsonValue();

const nthdecreVal = parseFloat(nthdecre);

console.log(`        ${label} ${divlength} Strikewise Decrement Values : `, nthdecreVal);

await hold(1000);

// ? strike wise reset
// ? if condition passed
const strikeReset = await clicking_Button(arg, "//p [@id ='iv-reset-btn']", `    ${label} Strike Reset`);
await hold(3000);

// ? fetch reset value
const strreset = await (
  await (await arg.$x("//p [@id ='strikewise-iv-value']"))[0].getProperty('textContent')
).jsonValue();

const strikeResetVal = parseFloat(strreset);

// ? check strike wise value after reset values are same!
if (strikeResetVal !== strikewiseVal) {
  console.log(`        ${label} Strikewise Reset Values : `, strikeResetVal);
} else if (strikeResetVal === strikewiseVal) {
  console.log(`        ${label} Data Loading Problem  `, strikeResetVal);
  // @ts-expect-error ! if not working
}
