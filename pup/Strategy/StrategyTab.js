const { button, clicking_Button, click_Button } = require('./Button');
const { Strategies } = require('./Strategies');
const { hold, take_screenShot } = require('../utils');

/**
 *
 * @param {*} arg  -> page
 * @param {*} brwsr -> browser
 */

const strategy_Tab = async function (arg, brwsr) {
  // ? Strategy Builder Page
  // const strategyBuilder = await button(arg, "//a [@id ='header-link-StrategyBuilder']", '    Strategy Builder');

  await hold(2000);

  const strategyBuilder = await arg.$x("//a [@id ='header-link-StrategyBuilder']");
  console.log('        🚀  StrategyTab.js:20  strategyBuilder ', strategyBuilder.length);

  if (strategyBuilder.length === 1) {
    await strategyBuilder[0].evaluate(el => {
      el.click();
    });
  }
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
            const removeStrategyFilter = await clicking_Button(
              arg,
              "//div [@id ='strategy-dashboard-select-with-title-st-dashboard']",
              '    Strategy Filter OFF'
            );

            if (removeStrategyFilter) {
              // ??  Strategy Builders
              // ? long call
              // await hold(1000);
              // await Strategies(arg, "//div [@id ='Long Call']", '    Long Call');
              // // ? Short Call
              // await hold(1000);
              // await Strategies(arg, "//div [@id ='Short Call']", '    Short Call');
              // // ? Long Put
              // await hold(1000);
              // await Strategies(arg, "//div [@id ='Long Put']", '    Long Put');
              // // ? Short put
              // await hold(1000);
              // await Strategies(arg, "//div [@id = 'Short Put']", '    Short Put');
              // // ? Bull Call Spread
              // await hold(1000);
              // await Strategies(arg, "//div [@id ='Bull Call Spread']", '    Bull Call Spread');
              // // ? Bear Call Spread
              // await hold(1000);
              // await Strategies(arg, "//div [@id ='Bear Call Spread']", '    Bear Call Spread');
              // // ? Bull Put Spread
              // await hold(1000);
              // await Strategies(arg, "//div [@id ='Bull Put Spread']", '    Bull Put Spread');
              // // ? Bear Put Spread
              // await hold(1000);
              // await Strategies(arg, "//div [@id ='Bear Put Spread']", '    Bear Put Spread');
              // // ? Long Straddle
              // await hold(1000);
              // await Strategies(arg, "//div [@id ='Long Straddle']", '    Long Straddle');
              // // ? Short Straddle
              // await hold(1000);
              // await Strategies(arg, "// div [@id ='Short Straddle']", '    Short Straddle');
              // // ? Long Strangle
              // await hold(1000);
              // await Strategies(arg, "//div [@id ='Long Strangle']", '    Long Strangle');
              // // ? Short Strangle
              // await hold(1000);
              // await Strategies(arg, "//div [@id ='Short Strangle']", '    Short Strangle');
              // ? Long Iron Condor
              // await hold(1000);
              // await Strategies(arg, "//div [@id ='Long Iron Condor']", '    Long Iron Condor');
              // ? Short Iron Condor
              // await hold(1000);
              // await Strategies(arg, "//div [@id ='Short Iron Condor']", '    Short Iron Condor');
              // ? Long Put Butterfly
              await hold(1000);
              await Strategies(arg, "//div [@id ='Long Put Butterfly']", '    Long Put Butterfly');
              // ? Short Put Butterfly
              // await hold(1000);
              // await Strategies(arg, "//div [@id ='Short Put Butterfly']", '    Short Put Butterfly');
              // // ? Long Call Butterfly
              // await hold(1000);
              // await Strategies(arg, "//div [@id ='Long Call Butterfly']", '    Long Call Butterfly');
              // // ? Short Call Butterfly
              // await hold(1000);
              // await Strategies(arg, "//div [@id ='Short Call Butterfly']", '    Short Call Butterfly');
            } else {
              // @ts-expect-error
              await take_screenShot(arg, 'Strateg Filter');
            }
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
