const { take_screenShot } = require('../utils');
const { clicking_Button } = require('./Button');

// ? fetcch color LTP
const colorLTP = async function (arg) {
  // ? Color For LTP
  const callBuy = await arg.$eval('#atm-strike-index-ltp-CE-BUY', n =>
    JSON.parse(JSON.stringify(getComputedStyle(n).backgroundColor))
  );
  const callSell = await arg.$eval('#atm-strike-index-ltp-CE-SELL', n =>
    JSON.parse(JSON.stringify(getComputedStyle(n).backgroundColor))
  );
  const putBuy = await arg.$eval('#atm-strike-index-ltp-PE-BUY', n =>
    JSON.parse(JSON.stringify(getComputedStyle(n).backgroundColor))
  );
  const putSell = await arg.$eval('#atm-strike-index-ltp-PE-SELL', n =>
    JSON.parse(JSON.stringify(getComputedStyle(n).backgroundColor))
  );

  // ? assign to Array
  const LTP = [callBuy, callSell, putBuy, putSell];

  console.log('        ', LTP);

  // ? assing constant color name
  const blueColor = 'rgb(15, 194, 192)';
  // ? red
  const redColor = 'rgb(253, 60, 82)';
  // ? white
  const whiteClor = 'rgb(255, 255, 255)';

  // ? find color
  if (LTP.includes(blueColor)) {
    // ? if color is blue
    const LTPSELL = await clicking_Button(arg, "//div [@id ='atm-strike-index-ltp-PE-SELL']", '    LTP SELL');

    if (!LTPSELL) {
      await take_screenShot(arg, 'LTP SELL');
    }
  }

  if (LTP.includes(redColor)) {
    const LTPbuy = await clicking_Button(arg, "//div [@id ='atm-strike-index-ltp-PE-BUY']", '    LTP Buy');
    console.log('function');

    if (!LTPbuy) {
      await take_screenShot(arg, 'LTP Buy');
    }
  }
};

// ? oi Color Fetch
const color_OI = async function (arg) {
  // ? OI
  const callBuy1 = await arg.$eval('#atm-strike-index-oi-CE-BUY', n =>
    JSON.parse(JSON.stringify(getComputedStyle(n).backgroundColor))
  );
  // ? Call Sell
  const callSell1 = await arg.$eval('#atm-strike-index-oi-CE-SELL', n =>
    JSON.parse(JSON.stringify(getComputedStyle(n).backgroundColor))
  );
  // ? Put Buy
  const putBuy1 = await arg.$eval('#atm-strike-index-oi-PE-BUY', n =>
    JSON.parse(JSON.stringify(getComputedStyle(n).backgroundColor))
  );
  // ? Put Sell
  const putSell1 = await arg.$eval('#atm-strike-index-oi-PE-SELL', n =>
    JSON.parse(JSON.stringify(getComputedStyle(n).backgroundColor))
  );

  // ? OI
  const OI = [callBuy1, callSell1, putBuy1, putSell1];

  console.log('        ', OI);

  // ? assing constant color name
  const blueColor = 'rgb(15, 194, 192)';
  // ? red
  const redColor = 'rgb(253, 60, 82)';
  // ? white
  const whiteClor = 'rgb(255, 255, 255)';

  // ? check colors
  if (OI.includes(redColor)) {
    // ? if color is red
    const oiPutbuy = await clicking_Button(arg, "//div [@id ='atm-strike-index-oi-CE-BUY']", '    OI Call Buy');

    if (!oiPutbuy) {
      await take_screenShot(arg, 'OI Put Buy');
    }
  }

  // ? check if Blue
  if (OI.includes(blueColor)) {
    const oiLTPSell = await clicking_Button(arg, "//div [@id ='atm-strike-index-oi-PE-SELL']", '    OI LTP Sell');

    if (!oiLTPSell) {
      await take_screenShot(arg, 'OI LTP Sell');
    }
  }
};

// ? Color Fetch for Greeks

const color_Greeks = async function (arg) {
  // ? Greeks
  const callBuy1 = await arg.$eval('#atm-strike-index-greeks-CE-BUY', n =>
    JSON.parse(JSON.stringify(getComputedStyle(n).backgroundColor))
  );
  // ? Call Sell
  const callSell1 = await arg.$eval('#atm-strike-index-greeks-CE-SELL', n =>
    JSON.parse(JSON.stringify(getComputedStyle(n).backgroundColor))
  );
  // ? Put Buy
  const putBuy1 = await arg.$eval('#atm-strike-index-greeks-PE-BUY', n =>
    JSON.parse(JSON.stringify(getComputedStyle(n).backgroundColor))
  );
  // ? Put Sell
  const putSell1 = await arg.$eval('#atm-strike-index-greeks-PE-SELL', n =>
    JSON.parse(JSON.stringify(getComputedStyle(n).backgroundColor))
  );

  const GREEKS = [callBuy1, callSell1, putBuy1, putSell1];

  console.log('        ', GREEKS);

  // ? assing constant color name
  const blueColor = 'rgb(15, 194, 192)';
  // ? red
  const redColor = 'rgb(253, 60, 82)';
  // ? white
  const whiteClor = 'rgb(255, 255, 255)';

  // ? if
  // ? find color
  if (GREEKS.includes(blueColor)) {
    // ? if color is blue
    const greeksCallSell = await clicking_Button(
      arg,
      "//div [@id ='atm-strike-index-greeks-CE-SELL']",
      '    Greeks Put Sell'
    );

    if (!greeksCallSell) {
      await take_screenShot(arg, 'Greeks Put Sell');
    }
  }

  // ? if
  if (GREEKS.includes(redColor)) {
    // ? if Red Color
    const greeksLTPBuy = await clicking_Button(
      arg,
      "//div [@id ='atm-strike-index-greeks-CE-BUY']",
      '    Greeks LTP Buy'
    );

    if (!greeksLTPBuy) {
      // ?
      await take_screenShot(arg, 'Greeks LTP Buy');
    }
  }
};

module.exports = { colorLTP, color_OI, color_Greeks };