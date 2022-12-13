const { button, clicking_Button } = require('./Button');
const { Strategies } = require('./Strategies');
const { hold, take_screenShot } = require('../utils');

const strategy_Tab = async function (arg, brwsr) {
  // ? Strategy Builder Page
  const strategyBuilder = await button(arg, "//a [@id ='header-link-StrategyBuilder']", '    Strategy Builder');

  if (strategyBuilder) {
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
            // ?
            // ??  Strategy Builder
            await Strategies(arg, "//p [contains(text(), 'Long Call')]", '    Long Call');
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
