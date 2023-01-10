const { hold, take_screenShot } = require('../Utils/utils');
const { clicking_Button } = require('../Utils/Functions');
const { strikewise_fun } = require('./StrategyFunction/StrikewiseIV');
const { niftyTarget_fun } = require('./StrategyFunction/NiftyTarget');
const { expiry_fun } = require('./StrategyFunction/Expiry');
const { color_OI } = require('./ColorSrc');
const { tradesSlider } = require('./StrategyFunction/TradesSlider');
const { trades } = require('./StrategyFunction/Trades');

/**
 *
 * @param {*} ag - Page
 * @param {*} id - Xpath Expression Element id
 * @param {*} label - < Ltp,Oi,Greek s>
 */

const OITab = async function (ag, id, label) {
  // ? Oi page
  console.log(`                                                      `);

  const OI = await clicking_Button(ag, id, label);

  if (OI) {
    await hold(2000);

    // ? clear Strategy
    await clicking_Button(ag, "//button [@id ='strategy-clear-btn']", '    🔄 Clear LTP 🔄');

    // ? Trades Slider
    await tradesSlider(ag, label, '-oi');

    // ? Color Chooser
    // await color_OI(ag);

    await hold(1000);

    const done = await clicking_Button(ag, "//button [@id ='stratrgy-done-btn']", '    ✅ Done ✅');

    if (done) {
      await hold(2000);

      // ? Trades
      await trades(ag, 'OI');

      await hold(2000);

      // ?  Nifty Target
      await niftyTarget_fun(ag, 'OI');

      // ? Expiry Date
      await expiry_fun(ag, 'OI');

      // ? Strikewise IV
      await strikewise_fun(ag, "//p [@id ='0-strikevise-Id-plusclick-btn']", "//p [@id ='0-strikevise-Id-minusclick-btn']", 'OI');

      // ? Select Greeks Tab
      const greeksEdit = await clicking_Button(ag, "//button [contains(text(), 'EDIT/ADD')]", '    ➕ Edit/Add ➕');

      if (!greeksEdit) {
        // @ts-check
        await take_screenShot(ag, 'Greeks Edit');
      }
    } else {
      // @ts-expect-error
      await take_screenShot(ag, 'OI Done');
    }
  } else {
    // @ts-expect-error
    await take_screenShot(ag, label);
  }
};

module.exports.OITab = OITab;
