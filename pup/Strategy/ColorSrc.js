const { take_screenShot, hold } = require('../utils');
const { clicking_Button } = require('./Button');

// ? fetcch color LTP
const colorLTP = async function (arg) {
  await hold(2000);
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

  // ? assign to array
  // ? split array  call value
  const CALL = [callBuy, callSell];
  console.log('        ', CALL);
  // ? put value
  const PUT = [putBuy, putSell];
  console.log('        ', PUT);

  // ?  declare color name as constant
  // ? blue
  const blueColor = 'rgb(15, 194, 192)';
  // ? red
  const redColor = 'rgb(253, 60, 82)';
  // ? white
  const whiteColor = 'rgb(255, 255, 255)';

  // ? fetch Color and click opposite side buttons
  if (CALL.includes(blueColor)) {
    // ? click Call Sell
    const callSell = await clicking_Button(arg, "//div [@id ='atm-strike-index-ltp-CE-SELL']", '    LTP Call SELL');

    if (!callSell) {
      await take_screenShot(arg, 'LTP CALL SELL');
    }
  }

  // ? if color is red
  if (CALL.includes(redColor)) {
    // ? click Call Buy
    const buy = await clicking_Button(arg, "//div [@id ='atm-strike-index-ltp-CE-BUY']", '    LTP CALL BUY');

    if (!buy) {
      await take_screenShot(arg, 'LTP CALL BUY');
    }
  }

  // ? if Color is white  click call buy button
  if (CALL.includes(whiteColor)) {
    // ? call buy
    const callbutton = await clicking_Button(arg, "//div [@id ='atm-strike-index-ltp-CE-BUY']", '    LTP CALL BUY');

    if (!callbutton) {
      // ?
      await take_screenShot(arg, 'LTP CALL BUY');
    }
  }

  // ? same as PUT values

  if (PUT.includes(blueColor)) {
    // ?
    const putsellVal = await clicking_Button(arg, "//div [@id ='atm-strike-index-ltp-PE-SELL']", '    LTP PUT SELL');

    if (!putsellVal) {
      await take_screenShot(arg, 'LTP PUT SELL');
    }
  }

  if (PUT.includes(redColor)) {
    // ?
    const putval = await clicking_Button(arg, "//div [@id ='atm-strike-index-ltp-PE-BUY']", '    LTP PUT BUY');

    if (!putval) {
      await take_screenShot(arg, 'LTP PUT BUY');
    }
  }

  if (PUT.includes(whiteColor)) {
    // ?
    const putempty = await clicking_Button(arg, "//div [@id ='atm-strike-index-ltp-PE-SELL']", '    LTP PUT SELL');

    if (!putempty) {
      await take_screenShot(arg, 'LTP PUT SELL');
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
  const CALL = [callBuy1, callSell1];
  console.log('        ', CALL);
  const PUT = [putBuy1, putSell1];
  console.log('        ', PUT);

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
