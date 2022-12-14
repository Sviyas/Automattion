const { hold, take_screenShot } = require('../Utils/utils');
const { clicking_Button } = require('../Utils/Functions');
const { OITab } = require('./OiTab');
const { greeksTab } = require('./GreeksTab');
const { strikewise_fun } = require('./StrategyFunction/StrikewiseIV');
const { niftyTarget_fun } = require('./StrategyFunction/NiftyTarget');
const { expiry_fun } = require('./StrategyFunction/Expiry');
const { tradesSlider } = require('./StrategyFunction/TradesSlider');
const { trades } = require('./StrategyFunction/Trades');

/**
 *
 * @param {*} arg  -> Page
 * @param {*} id  -> xpath Expression element id
 * @param {*} label -> Strategy label name
 */

const Strategies = async function (arg, id, label) {
  const strategy = await clicking_Button(arg, id, label);

  await hold(2000);
  // ? Strategy Name
  if (strategy) {
    console.log(`                 🚀  ${label} Strategy  🚀 `);
    console.log(`                                                      `);

    await hold(4000);

    // ? edit to select legs
    const editadd = await clicking_Button(arg, "//button [contains(text(), 'EDIT/ADD')]", `    ➕  Edit/Add ➕`);

    if (editadd) {
      await hold(2000);

      // ? click OPT button
      const opt = await clicking_Button(arg, "//li [@id = 'OPT-slider-header-btn']", `    OPT TAB `);

      if (opt) {
        await hold(1000);

        // ? click related buttons
        const strategyDate = await clicking_Button(
          arg,
          "//div [@id = 'strategy-view-select-with-title-st-slider-date']",
          `    Strategy Date Picker`,
        );

        if (strategyDate) {
          // ?  Colors Chooser for current-strike price

          const clearLTP = await clicking_Button(arg, "//button [@id ='strategy-clear-btn']", `    LTP Clear`);

          // ? Trades Slider
          await tradesSlider(arg, label, '-ltp');

          await hold(1000);

          const done = await clicking_Button(arg, "//button [@id ='stratrgy-done-btn']", `    ✅ Done ✅`);

          if (done) {
            await hold(2000);
            // ? Trades
            await trades(arg, 'LTP');

            await hold(2000);

            // ? Nifty Target Function
            await niftyTarget_fun(arg, 'LTP');

            // ? Expiry Function
            await expiry_fun(arg, 'LTP');

            // ? StrikeWise IV
            await strikewise_fun(arg, "//p [@id ='0-strikevise-Id-plusclick-btn']", "//p [@id ='0-strikevise-Id-minusclick-btn']", 'LTP');

            // ? OI
            const oiEdit = await clicking_Button(arg, "//button [contains(text(), 'EDIT/ADD')]", '    ➕ Edit/Add ➕');

            if (oiEdit) {
              await hold(2000);

              //  ?  OI Page
              await OITab(arg, "//li [@id ='OI-slider-header-btn']", '    OI');
              console.log(`                                                      `);

              // ? Greeks Page
              await greeksTab(arg, "//li [@id ='GREEKS-slider-header-btn']", '    Greeks', label);
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
