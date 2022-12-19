const { take_screenShot, hold } = require('../utils');
const { clicking_Button } = require('./Button');

/**
 *
 * @param {*} arg - page
 * fetching color in LTP
 */
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

  // * assign to array

  const CALL = [callBuy, callSell];
  console.log('        ', CALL);
  // ? put value
  const PUT = [putBuy, putSell];
  console.log('        ', PUT);

  // *  declare color name as constant

  // ? blue
  const blueColor = 'rgb(15, 194, 192)';
  // ? red
  const redColor = 'rgb(253, 60, 82)';
  // ? white
  const whiteColor = 'rgb(255, 255, 255)';

  // * fetch Color and click opposite side buttons
  if (CALL.includes(blueColor)) {
    // ? click Call Sell
    const ltpred = await clicking_Button(arg, "//div [@id ='atm-strike-index-ltp-CE-SELL']", '    LTP Call SELL');

    if (!ltpred) {
      await take_screenShot(arg, 'LTP CALL SELL');
    }
  }

  // * if color is red
  if (CALL.includes(redColor)) {
    // ? click Call Buy
    const ltpcallblue = await clicking_Button(arg, "//div [@id ='atm-strike-index-ltp-CE-BUY']", '    LTP CALL BUY');

    if (!ltpcallblue) {
      await take_screenShot(arg, 'LTP CALL BUY');
    }
  }

  // * if Color is white  click call buy button
  if (CALL.includes(whiteColor)) {
    // ? call buy
    const ltpwhite = await clicking_Button(arg, "//div [@id ='atm-strike-index-ltp-CE-BUY']", '    LTP CALL BUY');

    if (!ltpwhite) {
      await take_screenShot(arg, 'LTP CALL BUY');
    }
  }

  //  * same as PUT values

  if (PUT.includes(blueColor)) {
    const ltpputred = await clicking_Button(arg, "//div [@id ='atm-strike-index-ltp-PE-SELL']", '    LTP PUT SELL');

    if (!ltpputred) {
      await take_screenShot(arg, 'LTP PUT SELL');
    }
  }

  if (PUT.includes(redColor)) {
    // ?
    const ltpputblue = await clicking_Button(arg, "//div [@id ='atm-strike-index-ltp-PE-BUY']", '    LTP PUT BUY');

    if (!ltpputblue) {
      await take_screenShot(arg, 'LTP PUT BUY');
    }
  }

  if (PUT.includes(whiteColor)) {
    const ltpputwhite = await clicking_Button(arg, "//div [@id ='atm-strike-index-ltp-PE-SELL']", '    LTP PUT SELL');

    if (!ltpputwhite) {
      await take_screenShot(arg, 'LTP PUT SELL');
    }
  }
};

/**
 *
 * @param {*} arg - page
 * fetching color value in oi tab
 */
const color_OI = async function (arg) {
  const callBuy1 = await arg.$eval('#atm-strike-index-oi-CE-BUY', n =>
    JSON.parse(JSON.stringify(getComputedStyle(n).backgroundColor))
  );

  const callSell1 = await arg.$eval('#atm-strike-index-oi-CE-SELL', n =>
    JSON.parse(JSON.stringify(getComputedStyle(n).backgroundColor))
  );

  const putBuy1 = await arg.$eval('#atm-strike-index-oi-PE-BUY', n =>
    JSON.parse(JSON.stringify(getComputedStyle(n).backgroundColor))
  );

  const putSell1 = await arg.$eval('#atm-strike-index-oi-PE-SELL', n =>
    JSON.parse(JSON.stringify(getComputedStyle(n).backgroundColor))
  );

  // * OI Call
  const CALL = [callBuy1, callSell1];
  console.log('        ', CALL);

  // * Put
  const PUT = [putBuy1, putSell1];
  console.log('        ', PUT);

  /**
   * * SET Color as constant
   */

  const blueColor = 'rgb(15, 194, 192)';

  const redColor = 'rgb(253, 60, 82)';

  const whiteClor = 'rgb(255, 255, 255)';

  //  ? OI Call values is Blue
  if (CALL.includes(blueColor)) {
    const oicallred = await clicking_Button(arg, "//div [@id ='atm-strike-index-oi-CE-SELL']", '    OI CALL SELL');

    if (!oicallred) {
      await take_screenShot(arg, 'OI CALL SELL');
    }
  }

  // ? OI Call value is Red
  if (CALL.includes(redColor)) {
    const oicallblue = await clicking_Button(arg, "//div [@id ='atm-strike-index-oi-CE-BUY']", '    OI CALL BUY');

    if (!oicallblue) {
      await take_screenShot(arg, 'OI CALL BUY');
    }
  }

  // ? Same as PUT button

  if (PUT.includes(redColor)) {
    const oiputblue = await clicking_Button(arg, "//div [@id ='atm-strike-index-oi-PE-BUY']", '    OI PUT BUY');

    if (!oiputblue) {
      await take_screenShot(arg, 'OI PUT BUY');
    }
  }

  if (PUT.includes(blueColor)) {
    const oiputred = await clicking_Button(arg, "//div [@id ='atm-strike-index-oi-PE-SELL']", '    OI PUT SELL');

    if (!oiputred) {
      await take_screenShot(arg, 'OI PUT SELL');
    }
  }
};

/**
 *
 * @param {*} arg - page
 */

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

  if (CALL.includes(blueColor)) {
    const greekcallbuy = await clicking_Button(
      arg,
      "//div [@id = 'atm-strike-index-greeks-CE-BUY']",
      '    GREEKS CALL BUY'
    );

    if (!greekcallbuy) {
      await take_screenShot(arg, 'GREEKS CALL BUY');
    }
  }

  if (CALL.includes(redColor)) {
    const greekscallsell = await clicking_Button(
      arg,
      "//div [@id ='atm-strike-index-greeks-CE-SELL']",
      '    GREEKS CALL SELL'
    );

    if (!greekscallsell) {
      await take_screenShot(arg, 'GREEKS CALL SELL');
    }
  }

  if (PUT.includes(redColor)) {
    const greeksputbuy = await clicking_Button(
      arg,
      "//div [@id ='atm-strike-index-greeks-PE-BUY']",
      '    GREEKS PUT BUY'
    );

    if (greeksputbuy) {
      await take_screenShot(arg, 'GREEKS PUT BUY');
    }
  }

  if (PUT.includes(blueColor)) {
    const greeksputsell = await clicking_Button(
      arg,
      "//div [@id ='atm-strike-index-greeks-PE-SELL']",
      '    GREEKS PUT SELL'
    );

    if (greeksputsell) {
      await take_screenShot(arg, 'GREEKS PUT SELL');
    }
  }
};

module.exports = { colorLTP, color_OI, color_Greeks };
