const { hold, take_screenShot } = require('../utils');
const { clicking_Button } = require('./ButtonFun');
const { niftyTarget_fun } = require('./StrategyFunction/NiftyTarget');
const { expiry_fun } = require('./StrategyFunction/Expiry');
const { strikewise_fun } = require('./StrategyFunction/StrikewiseIV');
// const { color_Greeks } = require('./ColorSrc');
const { tradesSlider } = require('./StrategyFunction/TradesSlider');
const { trades } = require('./StrategyFunction/Trades');

const greeksTab = async function (ag, id, label) {
  // ? Greeks page

  const Greeks = await clicking_Button(ag, id, label);

  if (Greeks) {
    // ? hold
    await hold(1000);

    // ? clear Strategy
    await clicking_Button(ag, "//button [@id ='strategy-clear-btn']", '    🔄 Clear OI 🔄');

    // ? Color Chooser
    // await color_Greeks(ag);
    await hold(1000);
    // ? Trades Slider
    await tradesSlider(ag, label, '-greeks');

    await hold(1000);

    const done = await clicking_Button(ag, "//button [@id ='stratrgy-done-btn']", '     ✅ Done ✅');

    if (done) {
      await hold(2000);

      // ? Trades
      await trades(ag, 'Greeks');

      await hold(2000);

      // ? Nifty Target Function
      await niftyTarget_fun(ag, 'Greeks');
      // ? Expiry Function
      await expiry_fun(ag, 'Greeks');
      // ? Strikewise IV function
      await strikewise_fun(ag, "//p [@id ='0-plusclick-btn']", "//p [@id ='0-minusclick-btn']", 'Greeks');
      // ? go to edit add

      const greeksEdit = await clicking_Button(ag, "//button [contains(text(), 'EDIT/ADD')]", '      ➕ Edit/Add ➕');

      if (greeksEdit) {
        // ? Restore
        const LTPClick = await clicking_Button(ag, "//li [@id ='LTP-slider-header-btn']", '    🔄 Restore 🔄');

        if (LTPClick) {
          // ? clear the page & go to homepage

          const clearPage = await clicking_Button(ag, "//button [@id ='strategy-clear-btn']", '    🔄 Clear 🔄');

          if (clearPage) {
            await hold(1000);
            // ? click homepage
            const done = await clicking_Button(ag, "//button [@id ='stratrgy-done-btn']", '    ✅ Done ✅');
            const homepage = await clicking_Button(ag, "//span [@id = 'strategy-btn']", '    Home Page 🏡');

            if (done && homepage) {
              console.log(`       🤝 Successfully Returned HomePage 🏡 🤝`);
            } else if (typeof done === 'undefined') {
              await take_screenShot(ag, 'Done');
              // @ts-check
            } else {
              // @ts-check
              await take_screenShot(ag, 'Hompage');
            }
          }
        } else {
          // @ts-check
          await take_screenShot(ag, 'LTP Click');
        }
      } else {
        // @ts-check
        await take_screenShot(ag, 'Greeks Edit');
      }
    } else {
      // @ts-expect-error
      await take_screenShot(ag, 'Greeks Done');
    }
  } else {
    // @ts-expect-error
    await take_screenShot(ag, label);
  }
};

module.exports.greeksTab = greeksTab;
