const { take_screenShot, hold } = require('../utils');
const { clicking_Button } = require('./Button');

/**
 *
 * @param {*} arg - page
 * @description -  Fetch Div container Color for Current Strike Price
 *
 */
const colorLTP = async function (arg, label) {
  await hold(2000);
  // ? LTP Colors
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

  // * Split An Array

  // * LTP -> CALL & PUT
  const CALL = [callBuy, callSell];
  console.log('        ', CALL);

  const PUT = [putBuy, putSell];
  console.log('        ', PUT);

  /**
   * ! SET Color as constant
   */

  const blueColor = 'rgb(15, 194, 192)';

  const redColor = 'rgb(253, 60, 82)';

  const whiteColor = 'rgb(255, 255, 255)';

  // ? LTP CALL

  if (CALL.includes(blueColor)) {
    const ltpred = await clicking_Button(
      arg,
      "//div [@id ='atm-strike-index-ltp-CE-SELL']",
      '    LTP Call SELL Current Strike Price'
    );

    if (!ltpred) {
      await take_screenShot(arg, 'LTP CALL SELL');
    }
  } else if (CALL.includes(redColor)) {
    await hold(1000);
    // ? if above blue Color is not Match
    const ltpcallblue = await clicking_Button(
      arg,
      "//div [@id ='atm-strike-index-ltp-CE-BUY']",
      '    LTP Call BUY Current Strike Price'
    );

    if (!ltpcallblue) {
      await take_screenShot(arg, 'LTP CALL BUY');
    }
  } else if (CALL.includes(whiteColor)) {
    // ? if above red colors is not match
    await hold(1000);
    const ltpwhite = await clicking_Button(
      arg,
      "//div [@id ='atm-strike-index-ltp-CE-BUY']",
      '    LTP Call BUY Current Strike Price'
    );

    if (!ltpwhite) {
      await take_screenShot(arg, 'LTP CALL BUY');
    }
  }
  await hold(1000);

  //  ? LTP PUT
  if (PUT.includes(blueColor)) {
    const ltpputred = await clicking_Button(
      arg,
      "//div [@id ='atm-strike-index-ltp-PE-SELL']",
      '    LTP PUT SELL Current Strike Price'
    );
    await hold(1000);
    if (!ltpputred) {
      await take_screenShot(arg, 'LTP PUT SELL');
    }
  } else if (PUT.includes(redColor)) {
    const ltpputblue = await clicking_Button(
      arg,
      "//div [@id ='atm-strike-index-ltp-PE-BUY']",
      '    LTP PUT BUY Current Strike Price'
    );
    await hold(1000);
    if (!ltpputblue) {
      await take_screenShot(arg, 'LTP PUT BUY');
    }
  } else if (PUT.includes(whiteColor)) {
    const ltpputwhite = await clicking_Button(
      arg,
      "//div [@id ='atm-strike-index-ltp-PE-SELL']",
      '    LTP PUT SELL Current Strike Price'
    );
    await hold(1000);
    if (!ltpputwhite) {
      await take_screenShot(arg, 'LTP PUT SELL');
    }
  }
};

/**
 *
 * @param {*} arg - page
 * @description - check opposite side of buutton
 */
const color_OI = async function (arg) {
  // ? OI Colors
  const callBuy = await arg.$eval('#atm-strike-index-oi-CE-BUY', n =>
    JSON.parse(JSON.stringify(getComputedStyle(n).backgroundColor))
  );

  const callSell = await arg.$eval('#atm-strike-index-oi-CE-SELL', n =>
    JSON.parse(JSON.stringify(getComputedStyle(n).backgroundColor))
  );

  const putBuy = await arg.$eval('#atm-strike-index-oi-PE-BUY', n =>
    JSON.parse(JSON.stringify(getComputedStyle(n).backgroundColor))
  );

  const putSell = await arg.$eval('#atm-strike-index-oi-PE-SELL', n =>
    JSON.parse(JSON.stringify(getComputedStyle(n).backgroundColor))
  );

  // * OI  -> CALL & PUT
  const CALL = [callBuy, callSell];
  console.log('        ', CALL);

  const PUT = [putBuy, putSell];
  console.log('        ', PUT);

  /**
   * ! SET Color as constant
   */

  const blueColor = 'rgb(15, 194, 192)';

  const redColor = 'rgb(253, 60, 82)';

  const whiteClor = 'rgb(255, 255, 255)';

  // ? OI CALL

  if (CALL.includes(blueColor)) {
    const oicallred = await clicking_Button(
      arg,
      "//div [@id ='atm-strike-index-oi-CE-SELL']",
      '    OI CALL SELL Current Strike Price'
    );
    await hold(1000);
    if (!oicallred) {
      await take_screenShot(arg, 'OI CALL SELL');
    }
  } else if (CALL.includes(redColor)) {
    const oicallblue = await clicking_Button(
      arg,
      "//div [@id ='atm-strike-index-oi-CE-BUY']",
      '    OI CALL BUY Current Strike Price'
    );
    await hold(1000);
    if (!oicallblue) {
      await take_screenShot(arg, 'OI CALL BUY');
    }
  }

  // ? OI PUT

  if (PUT.includes(redColor)) {
    const oiputblue = await clicking_Button(
      arg,
      "//div [@id ='atm-strike-index-oi-PE-BUY']",
      '    OI PUT BUY Current Strike Price'
    );
    await hold(1000);
    if (!oiputblue) {
      await take_screenShot(arg, 'OI PUT BUY');
    }
  } else if (PUT.includes(blueColor)) {
    const oiputred = await clicking_Button(
      arg,
      "//div [@id ='atm-strike-index-oi-PE-SELL']",
      '    OI PUT SELL Current Strike Price'
    );
    await hold(1000);
    if (!oiputred) {
      await take_screenShot(arg, 'OI PUT SELL');
    }
  }
};

/**
 * @param {*} arg - page
 * @description - Fetch Color For Greeks
 */

const color_Greeks = async function (arg) {
  // ? Greeks Colors
  const callBuy = await arg.$eval('#atm-strike-index-greeks-CE-BUY', n =>
    JSON.parse(JSON.stringify(getComputedStyle(n).backgroundColor))
  );

  const callSell = await arg.$eval('#atm-strike-index-greeks-CE-SELL', n =>
    JSON.parse(JSON.stringify(getComputedStyle(n).backgroundColor))
  );

  const putBuy = await arg.$eval('#atm-strike-index-greeks-PE-BUY', n =>
    JSON.parse(JSON.stringify(getComputedStyle(n).backgroundColor))
  );

  const putSell = await arg.$eval('#atm-strike-index-greeks-PE-SELL', n =>
    JSON.parse(JSON.stringify(getComputedStyle(n).backgroundColor))
  );

  // * Greeks CALL & PUT
  const CALL = [callBuy, callSell];
  console.log('        ', CALL);

  const PUT = [putBuy, putSell];
  console.log('        ', PUT);

  /**
   * ! SET Color as constant
   */

  const blueColor = 'rgb(15, 194, 192)';

  const redColor = 'rgb(253, 60, 82)';

  const whiteClor = 'rgb(255, 255, 255)';

  // ? Greeks CALL

  if (CALL.includes(blueColor)) {
    const greekscallsell = await clicking_Button(
      arg,
      "//div [@id ='atm-strike-index-greeks-CE-SELL']",
      '    GREEKS CALL SELL Current Strike Price'
    );
    await hold(1000);
    if (!greekscallsell) {
      await take_screenShot(arg, 'GREEKS CALL SELL');
    }
  } else if (CALL.includes(redColor)) {
    const greekcallbuy = await clicking_Button(
      arg,
      "//div [@id = 'atm-strike-index-greeks-CE-BUY']",
      '    GREEKS CALL BUY Current Strike Price'
    );
    await hold(1000);
    if (!greekcallbuy) {
      await take_screenShot(arg, 'GREEKS CALL BUY');
    }
  }

  // ? Greeks PUT

  if (PUT.includes(blueColor)) {
    const greeksputsell = await clicking_Button(
      arg,
      "//div [@id ='atm-strike-index-greeks-PE-SELL']",
      '    GREEKS PUT SELL Current Strike Price'
    );
    await hold(1000);
    if (!greeksputsell) {
      await take_screenShot(arg, 'GREEKS PUT SELL');
    }
  } else if (PUT.includes(redColor)) {
    const greeksputbuy = await clicking_Button(
      arg,
      "//div [@id ='atm-strike-index-greeks-PE-BUY']",
      '    GREEKS PUT BUY Current Strike Price'
    );
    await hold(1000);
    if (!greeksputbuy) {
      await take_screenShot(arg, 'GREEKS PUT BUY');
    }
  }
};

module.exports = { colorLTP, color_OI, color_Greeks };
