const { button, clicking_Button, click_Button } = require('./ButtonFun');
const { Strategies } = require('./Strategies');
const { hold, take_screenShot } = require('../utils');

/**
 *
 * @param {*} arg  -> page
 * @param {*} brwsr -> browser
 */

const strategy_Tab = async function (arg, brwsr) {
  await hold(3000);
  console.log(`                                         `);
  // ? Strategy Builder Page
  const strategyBuilder = await arg.$x("//a [@id ='header-link-StrategyBuilder']");
  // console.log('        🚀  StrategyTab.js:20  strategyBuilder ', strategyBuilder.length);

  if (strategyBuilder.length === 1) {
    await strategyBuilder[0].evaluate((el) => {
      el.click();
    });
  }
  if (strategyBuilder) {
    await hold(1000);
    // console.log('    10.1   Successfully Navigate to Strategy Page');

    // ? Check Strategy Page Dashboard
    const strategyDash = await clicking_Button(arg, "//span[@id ='dashboard-btn']", `    Strategy Dashboard`);

    if (strategyDash) {
      // ? click Strategy Search Field
      const strategySearch = await clicking_Button(arg, "//div [@id ='strategy-dashboard-search']", `    Strategy Search`);

      if (strategySearch) {
        // ? click Strategy Date Picker Field
        const strategyDatePicker = await clicking_Button(
          arg,
          "//div [@id ='strategy-dashboard-select-with-title-date']",
          `    Strategy Date Picker`,
        );

        if (strategyDatePicker) {
          // ? click Strategy Filter Field

          const strategyFilter = await clicking_Button(
            arg,
            "//div [@id ='strategy-dashboard-select-with-title-st-dashboard']",
            `    Strategy Filter`,
          );

          if (strategyFilter) {
            const removeStrategyFilter = await clicking_Button(
              arg,
              "//div [@id ='strategy-dashboard-select-with-title-st-dashboard']",
              `    Strategy Filter OFF`,
            );

            if (removeStrategyFilter) {
              // !  Strategy Builders
              // ? long call
              // console.log(`                                         `);
              // await hold(1000);
              // await Strategies(arg, "//div [@id ='Long Call']", `    Long Call`);

              // ? Short Call
              // console.log(`                                         `);
              // await hold(1000);
              // await Strategies(arg, "//div [@id ='Short Call']", `   Short Call`);

              // ? Long Put
              // console.log(`                                         `);
              // await hold(1000);
              // await Strategies(arg, "//div [@id ='Long Put']", `    Long Put`);

              // ? Short put
              // console.log(`                                         `);
              // await hold(1000);
              // await Strategies(arg, "//div [@id = 'Short Put']", `    Short Put`);

              // ? Bull Call Spread
              // console.log(`                                         `);
              // await hold(1000);
              // await Strategies(arg, "//div [@id ='Bull Call Spread']", `    Bull Call Spread`);

              // ? Bear Call Spread
              // console.log(`                                         `);
              // await hold(1000);
              // await Strategies(arg, "//div [@id ='Bear Call Spread']", `    Bear Call Spread`);

              // ? Bull Put Spread
              // console.log(`                                         `);
              // await hold(1000);
              // await Strategies(arg, "//div [@id ='Bull Put Spread']", `    Bull Put Spread`);

              // ? Bear Put Spread
              // console.log(`                                         `);
              // await hold(1000);
              // await Strategies(arg, "//div [@id ='Bear Put Spread']", `    Bear Put Spread`);

              // ? Long Straddle
              // console.log(`                                         `);
              // await hold(1000);
              // await Strategies(arg, "//div [@id ='Long Straddle']", `    Long Straddle`);

              // ? Short Straddle
              // console.log(`                                         `);
              // await hold(1000);
              // await Strategies(arg, "// div [@id ='Short Straddle']", `    Short Straddle`);

              // ? Long Strangle
              // console.log(`                                         `);
              // await hold(1000);
              // await Strategies(arg, "//div [@id ='Long Strangle']", `    Long Strangle`);

              // ? Short Strangle
              // console.log(`                                         `);
              // await hold(1000);
              // await Strategies(arg, "//div [@id ='Short Strangle']", `    Short Strangle`);

              // ? Long Iron Condor
              // console.log(`                                         `);
              // await hold(1000);
              // await Strategies(arg, "//div [@id ='Long Iron Condor']", `    Long Iron Condor`);

              // ? Short Iron Condor
              // console.log(`                                         `);
              // await hold(1000);
              // await Strategies(arg, "//div [@id ='Short Iron Condor']", `    Short Iron Condor`);

              // ? Long Put Butterfly
              console.log(`                                         `);
              await hold(1000);
              await Strategies(arg, "//div [@id ='Long Put Butterfly']", `    Long Put Butterfly`);

              // ? Short Put Butterfly
              // console.log(`                                         `);
              // await hold(1000);
              // await Strategies(arg, "//div [@id ='Short Put Butterfly']", `    Short Put Butterfly`);

              // ? Long Call Butterfly
              // console.log(`                                         `);
              // await hold(1000);
              // await Strategies(arg, "//div [@id ='Long Call Butterfly']", `    Long Call Butterfly`);
              // ? Short Call Butterfly
              // console.log(`                                         `);
              // await hold(1000);
              // await Strategies(arg, "//div [@id ='Short Call Butterfly']", `    Short Call Butterfly`);
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
