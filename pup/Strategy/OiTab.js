const { hold, take_screenShot } = require('../utils');
const { clicking_Button } = require('./Button');
const { strikewise_fun } = require('./StrategyFunction/StrikewiseIV');
const { niftyTarget_fun } = require('./StrategyFunction/NiftyTarget');
const { expiry_fun } = require('./StrategyFunction/Expiry');

/**
 *
 * @param {*} ag - page
 * @param {*} id - element id
 * @param {*} label - element tag name
 */

const OITab = async function (ag, id, label) {
  // ? Oi page

  const OI = await clicking_Button(ag, id, label);

  if (OI) {
    // ? hold
    await hold(1000);
    // ? add one OI leg put buy
    const oiPutSell = await clicking_Button(ag, "//div [@id ='atm-strike-index-oi-PE-BUY']", '    OI Put Buy');

    if (oiPutSell) {
      // ? condition passed
      // ? remove one call sell
      const ltpRemove = await clicking_Button(ag, "//div [@id ='atm-strike-index-oi-CE-SELL']", '    Ltp buy remove');

      if (ltpRemove) {
        // ? condition passed
        await hold(1000);

        const done = await clicking_Button(ag, "//button [@id ='stratrgy-done-btn']", '    OI Done');

        if (done) {
          // ? condition passed
          await hold(2000);

          // ?  Nifty Target function
          await niftyTarget_fun(ag, 'OI');
          // ? Expiry Function
          await expiry_fun(ag, 'OI');
          // ? Strikewise IV function
          await strikewise_fun(ag, "//p [@id ='0-plusclick-btn']", "//p [@id ='0-minusclick-btn']", 'OI');
          // ? go to edit add

          const greeksEdit = await clicking_Button(
            ag,
            "//button [contains(text(), 'EDIT/ADD')]",
            '    Greeks Edit/Add'
          );
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
        await take_screenShot(ag, 'LTP Call Buy');
      }
    } else {
      // @ts-expect-error
      await take_screenShot(ag, 'OI Put buy');
    }
  } else {
    // @ts-expect-error
    await take_screenShot(ag, label);
  }
};

module.exports.OITab = OITab;
