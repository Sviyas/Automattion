const { hold, take_screenShot } = require('../utils');
const { clicking_Button } = require('./Button');
const { OITab } = require('./OiTab');
const { greeksTab } = require('./GreeksTab');
const { strikewise_fun } = require('./StrategyFunction/StrikewiseIV');
const { niftyTarget_fun } = require('./StrategyFunction/NiftyTarget');
const { expiry_fun } = require('./StrategyFunction/Expiry');

/**
 *
 * @param {*} arg  -> page
 * @param {*} id  -> element id
 * @param {*} label -> element tag name
 */
const Strategies = async function (arg, id, label) {
  const strategy = await clicking_Button(arg, id, label);

  // ? Trades
  if (strategy) {
    console.log(`        👍  ${label} Button `);
    // ? hold
    await hold(2000);

    // ? edit to select legs
    const editadd = await clicking_Button(arg, "//button [contains(text(), 'EDIT/ADD')]", '    Edit/Add');

    if (editadd) {
      // ? click OPT button

      const opt = await clicking_Button(arg, "//li [@id = 'OPT-slider-header-btn']", '    OPT');

      if (opt) {
        // ? check related buttons
        const strategyDate = await clicking_Button(
          arg,
          "//div [@id = 'strategy-view-select-with-title-st-slider-date']",
          '    Strategy Date Picker'
        );

        // ? click LTP Sell button
        if (strategyDate) {
          await hold(2000);
          // ?  fetch strategy leg color
          // ? click opposite side of button

          // ? Fetch all data color
          // const srcStyles = await arg.$eval('#slider_div_container', n =>
          //   JSON.parse(JSON.stringify(getComputedStyle(n).backgroundColor))
          // );

          // console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', srcStyles);

          // ? fethc current strike price row id and then fetch color
          // ? 1 atm-strike-index-ltp-CE-BUY | call
          // ? 2 atm-strike-index-ltp-CE-SELL|
          // ? 3 atm-strike-index-ltp-PE-BUY |
          // ? 4 atm-strike-index-ltp-PE-SELL| put
          // ? call buy
          const callBuy = await arg.$eval('#atm-strike-index-ltp-CE-BUY', n =>
            JSON.parse(JSON.stringify(getComputedStyle(n).backgroundColor))
          );
          const callbuyVal = JSON.stringify(callBuy);
          console.log('🚀 ~ file: Strategies.js:62 ~ Strategies ~ callBuy', callbuyVal);
          // ? call sell
          const callSell = await arg.$eval('#atm-strike-index-ltp-CE-SELL', n =>
            JSON.parse(JSON.stringify(getComputedStyle(n).backgroundColor))
          );
          const callsellVal = JSON.stringify(callSell);
          console.log('🚀 ~ file: Strategies.js:67 ~ Strategies ~ callSell', callsellVal);

          // ? put Buy
          const putBuy = await arg.$eval('#atm-strike-index-ltp-PE-BUY', n =>
            JSON.parse(JSON.stringify(getComputedStyle(n).backgroundColor))
          );
          const putbuyVal = JSON.stringify(putBuy);
          console.log('🚀 ~ file: Strategies.js:74 ~ Strategies ~ putBuy', putbuyVal);

          // ? put Sell
          const putSell = await arg.$eval('#atm-strike-index-ltp-PE-SELL', n =>
            JSON.parse(JSON.stringify(getComputedStyle(n).backgroundColor))
          );
          const putsellVal = JSON.stringify(putSell);
          console.log('🚀 ~ file: Strategies.js:80 ~ Strategies ~ putSell', putsellVal);

          // ? LTP Sell button   ? pending chages
          const ltpSell = await clicking_Button(arg, "//div [@id ='atm-strike-index-ltp-CE-SELL']", '    LTP SELL');

          await hold(2000);
          // ? red color

          if (ltpSell) {
            // ? Click Done

            const done = await clicking_Button(arg, "//button [@id ='stratrgy-done-btn']", '    Done');

            if (done) {
              await hold(2000);

              // ? Nifty Target Function
              await niftyTarget_fun(arg, 'LTP');

              // ? Expiry Function
              await expiry_fun(arg, 'LTP');

              // ? check striekwise ivs
              await strikewise_fun(arg, "//p [@id ='0-plusclick-btn']", "//p [@id ='0-minusclick-btn']", 'LTP');

              // ? goto edit add
              const oiEdit = await clicking_Button(arg, "//button [contains(text(), 'EDIT/ADD')]", '    LTP Edit/Add');
              if (oiEdit) {
                // ? if condition passed
                //  ?  OI Page
                await OITab(arg, "//li [@id ='OI-slider-header-btn']", '    OI');
                // ? Greeks Page
                await greeksTab(arg, "//li [@id ='GREEKS-slider-header-btn']", '    Greeks');
              } else {
                // @ts-check
                await take_screenShot(arg, 'OI Edit');
              }
            } else {
              // @ts-check
              await take_screenShot(arg, 'Done');
            }
          } else {
            // @ts-check
            await take_screenShot(arg, 'LTP SELL');
          }
        } else {
          // @ts-check
          await take_screenShot(arg, 'Strategy Date Picker');
        }
      } else {
        // @ts-check
        await take_screenShot(arg, 'OPT');
      }
    } else {
      // @ts-check
      await take_screenShot(arg, 'Edit Add');
    }
  } else {
    // @ts-check
    await take_screenShot(arg, label);
  }
};

module.exports.Strategies = Strategies;
