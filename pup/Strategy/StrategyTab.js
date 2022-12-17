const { button, clicking_Button } = require('./Button');
const { Strategies } = require('./Strategies');
const { hold, take_screenShot } = require('../utils');

/**
 *
 * @param {*} arg  -> page
 * @param {*} brwsr -> browser
 */

const strategy_Tab = async function (arg, brwsr) {
  // ? when intenal server error finds
  const internalServerError = await clicking_Button(
    arg,
    "//div [contains(text(),'Something went wrong ! Please try again later')]",
    'Internal Server Error '
  );

  if (internalServerError) {
    // ? capture screenshot
    console.log('🚀 internalServerError  👀');

    await hold(1000);
    await take_screenShot(arg, 'Internal Server Error');
  }
  // ? Strategy Builder Page
  const strategyBuilder = await button(arg, "//a [@id ='header-link-StrategyBuilder']", '    Strategy Builder');

  if (strategyBuilder) {
    await hold(1000);
    console.log('    10.1   Successfully Navigate to Strategy Page');

    // ? Check Strategy Dashboard
    const strategyDash = await clicking_Button(arg, "//span[@id ='dashboard-btn']", '    Strategy Dashboard');

    if (strategyDash) {
      // ? click Search Field
      const strategySearch = await clicking_Button(
        arg,
        "//div [@id ='strategy-dashboard-search']",
        '    Strategy Search'
      );

      if (strategySearch) {
        // ? click Date picker
        const strategyDatePicker = await clicking_Button(
          arg,
          "//div [@id ='strategy-dashboard-select-with-title-date']",
          '    Strategy Date Picker'
        );

        if (strategyDatePicker) {
          // ? click Filter Field

          const strategyFilter = await clicking_Button(
            arg,
            "//div [@id ='strategy-dashboard-select-with-title-st-dashboard']",
            '    Strategy Filter'
          );

          if (strategyFilter) {
            // ??  Strategy Builder
            // ? long call
            // await Strategies(arg, "//div [@id ='Long Call']", '    Long Call');
            // ? Short Call
            // await Strategies(arg, "//div [@id ='Short Call']", '    Short Call');
            // ? Long Put
            // await Strategies(arg, "//div [@id ='Long Put']", '    Long Put');
            // ? Short put
            // await Strategies(arg, "//div [@id = 'Short Put']", '    Short Put');
            // ? Bull Call Spread
            await Strategies(arg, "//div [@id ='Bull Call Spread']", '    Bull Call Spread');
          } else {
            // @ts-expect-error
            await take_screenShot(arg, 'Strategy Filter');
          }
        } else {
          // @ts-expect-error
          await take_screenShot(arg, 'Strategy Date Picker');
        }
      } else {
        // @ts-expect-error
        await take_screenShot(arg, 'Strategy Search');
      }
    } else {
      // @ts-expect-error
      await take_screenShot(arg, 'Strategy Dashboard');
    }
  } else {
    // @ts-expect-error
    await take_screenShot(arg, 'Strategy Builder');
  }
};

module.exports.strategy_Tab = strategy_Tab;
