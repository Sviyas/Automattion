const { hold, take_screenShot } = require('../utils');
const { clicking_Button } = require('./Button');
const { niftyTarget_fun } = require('./StrategyFunction/NiftyTarget');
const { expiry_fun } = require('./StrategyFunction/Expiry');
const { strikewise_fun } = require('./StrategyFunction/StrikewiseIV');

const greeksTab = async function (ag, id, label) {
  // ? Greeks page

  const Greeks = await clicking_Button(ag, id, label);

  if (Greeks) {
    // ? hold
    await hold(1000);
    // ? add one Greeks leg put buy
    const GreeksPutSell = await clicking_Button(
      ag,
      "//div [@id ='atm-strike-index-greeks-PE-SELL']",
      '    Greeks Put Sell'
    );

    if (GreeksPutSell) {
      // ? condition passed
      // ? check functions
      await hold(1000);

      const done = await clicking_Button(ag, "//button [@id ='stratrgy-done-btn']", '    Greeks Done');

      if (done) {
        // ? condition passed
        await hold(2000);

        // ? Nifty Target Function
        await niftyTarget_fun(ag, 'Greeks');
        // ? Expiry Function
        await expiry_fun(ag, 'Greeks');
        // ? Strikewise IV function
        await strikewise_fun(ag, "//p [@id ='0-plusclick-btn']", "//p [@id ='0-minusclick-btn']", 'Greeks');
        // ? go to edit add
        // ?
        const greeksEdit = await clicking_Button(ag, "//button [contains(text(), 'EDIT/ADD')]", '    Greeks Edit/Add');
        if (!greeksEdit) {
          // @ts-check
          await take_screenShot(ag, 'Greeks Edit');
        }
      } else {
        // @ts-expect-error
        await take_screenShot(ag, 'Greeks Done');
      }
    } else {
      // @ts-expect-error
      await take_screenShot(ag, 'Greeks Put buy');
    }
  } else {
    // @ts-expect-error
    await take_screenShot(ag, label);
  }
};

module.exports.greeksTab = greeksTab;
