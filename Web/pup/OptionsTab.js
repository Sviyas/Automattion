const { hold, take_screenShot } = require('./utils.js');
const { OpenAndClose, clicking_Button } = require('./Strategy/ButtonFun');

/**
 *
 * @param {*} arg - page
 * @param {*} brwsr - browser
 */
const options_Tab = async function (arg, brwsr) {
  // await hold(1000);
  // ? clicking option open and close tab
  await OpenAndClose(arg, "//div [@id = 'nav-Options']");

  await hold(3000);

  //  ? Dashboard
  const dashboard = await clicking_Button(arg, "//a [@id ='navlink-0']", `    Option Page`);

  if (dashboard) {
    // ? check dashboard

    // console.time('Check Dashboard time : ');
    const checkDash = await clicking_Button(arg, "//span [@id ='dashboard-btn']", `    Options Dashboard`);
    // console.timeEnd('Check Dashboard time : ');
    if (checkDash) {
      await hold(1000);

      // console.time('🚀 ~ file: OptionsTab.js:26 ~ optDatePick : ');
      const optDatePick = await clicking_Button(arg, "//div [@id ='options-dashboard-select-with-title-date']", `    Option Date Picker`);
      // console.timeEnd('🚀 ~ file: OptionsTab.js:26 ~ optDatePick : ');
    } else {
      await take_screenShot(arg, `Options Dashboard`);
    }
  } else {
    await take_screenShot(arg, `Option Page`);
  }

  await OpenAndClose(arg, "//div [@id = 'nav-Options']");
  // ? Option Screener

  // console.time('🚀 ~ file: OptionsTab.js:40 ~ option_Scrreener  : ');
  const option_Scrreener = await clicking_Button(arg, "//a [@id ='navlink-1']", `    Option Screener Page`);
  // console.timeEnd('🚀 ~ file: OptionsTab.js:40 ~ option_Scrreener  : ');

  if (option_Scrreener) {
    await OpenAndClose(arg, "//div [@id = 'nav-Options']");

    await hold(1500);

    // console.time('🚀 ~ file: OptionsTab.js:48 ~ optionDash : ');
    const optionDash = await clicking_Button(arg, "//span [@id ='screener-btn']", `    Option Screener Dashboard`);
    // console.timeEnd('🚀 ~ file: OptionsTab.js:48 ~ optionDash : ');

    if (optionDash) {
      // console.time('🚀 ~ file: OptionsTab.js:56 ~ optionDatePick : ');
      const optionDatePick = await clicking_Button(
        arg,
        "//div [@id ='options-screener-select-with-title-date']",
        `    Option Screener Date Picker`,
      );
      // console.timeEnd('🚀 ~ file: OptionsTab.js:56 ~ optionDatePick : ');

      if (optionDatePick) {
        // console.time('🚀 ~ file: OptionsTab.js:64 ~ optionFilter : ');
        const optionFilter = await clicking_Button(
          arg,
          "//div [@id ='options-screener-select-with-title-filters']",
          `    Option Screener Filter`,
        );
        // console.timeEnd('🚀 ~ file: OptionsTab.js:64 ~ optionFilter : ');

        if (optionFilter) {
          // console.time('🚀 ~ file: OptionsTab.js:68 ~ optionTable : ');
          const optionTable = await clicking_Button(arg, "//div [@id ='options-screener-table-id-undefined']", `    Option Screener Table`);
          // console.timeEnd('🚀 ~ file: OptionsTab.js:68 ~ optionTable : ');
        } else {
          await take_screenShot(arg, `Option Screener Filter`);
        }
      } else {
        await take_screenShot(arg, `Option Screener Date Picker`);
      }
    } else {
      await take_screenShot(arg, `Option Screeneer Dashboard`);
    }
  } else {
    await take_screenShot(arg, `Option Screenr Page`);
  }

  // ? Option HeatMap
  await OpenAndClose(arg, "//div [@id = 'nav-Options']");

  // console.time('🚀 ~ file: OptionsTab.js:86 ~ optionChain : ');
  const optionChain = await clicking_Button(arg, "//a [@id ='navlink-2']", `    Opiton Chain Page`);
  // console.timeEnd('🚀 ~ file: OptionsTab.js:86 ~ optionChain : ');

  if (optionChain) {
    await OpenAndClose(arg, "//div [@id = 'nav-Options']");

    // console.time('🚀 ~ file: OptionsTab.js:92 ~ optionchainDash : ');
    const optionchainDash = await clicking_Button(arg, "//span [@id ='chain-btn']", `    Option Chain Dashboard`);
    // console.timeEnd('🚀 ~ file: OptionsTab.js:92 ~ optionchainDash : ');

    if (optionchainDash) {
      // console.time('🚀 ~ file: OptionsTab.js:96 ~ optionchainSearch : ');
      const optionchainSearch = await clicking_Button(arg, "//div [@id ='options-chain-search']", `    Option Chain Search`);
      // console.timeEnd('🚀 ~ file: OptionsTab.js:96 ~ optionchainSearch : ');

      if (optionchainSearch) {
        // console.time('🚀 ~ file: OptionsTab.js:104 ~ optionchainDate : ');
        const optionchainDate = await clicking_Button(
          arg,
          "//div [@id ='options-chain-select-with-title-date']",
          `    Option Chain Date Picker`,
        );
        // console.timeEnd('🚀 ~ file: OptionsTab.js:104 ~ optionchainDate : ');

        if (optionchainDate) {
          // console.time('🚀 ~ file: OptionsTab.js:110 ~ optionchainTable');
          const optionchainTable = await clicking_Button(arg, "//div [@id ='options-chain-table-id-undefined']", `    Option Chain Table`);
          console.log(`          Successfully Navigate to Option Page`);
          await hold(1000);
          // console.timeEnd('🚀 ~ file: OptionsTab.js:110 ~ optionchainTable');
        } else {
          await take_screenShot(arg, `Option Chain Table`);
        }
      }
    } else {
      await take_screenShot(arg, `Option Chain Dashboard`);
    }
  } else {
    await take_screenShot(arg, `Option Chain`);
  }
};

module.exports.options_Tab = options_Tab;
