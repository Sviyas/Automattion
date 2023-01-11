const { hold, take_screenShot } = require('../Utils/utils.js');
const { OpenAndClose, clicking_Button } = require('../Utils/Functions');

/**
 *
 * @param {*} arg - page
 * @param {*} brwsr - browser
 */
const options_Tab = async function (arg, brwsr) {
  // ? clicking option open and close tab
  console.log(`                                                      `);

  await OpenAndClose(arg, "//div [@id = 'nav-Options']");

  await hold(3000);

  //  ? Dashboard
  const dashboard = await clicking_Button(arg, "//a [@id ='navlink-0']", `    Option Page`);

  if (dashboard) {
    // ? check dashboard

    // ? if data not found

    const optionData = {};

    const checkDash = await clicking_Button(arg, "//span [@id ='dashboard-btn']", `    Options Dashboard`);

    if (checkDash) {
      await hold(1000);

      const optDatePick = await clicking_Button(arg, "//div [@id ='options-dashboard-select-with-title-date']", `    Option Date Picker`);
    } else {
      await take_screenShot(arg, `Options Dashboard`);
    }
  } else {
    await take_screenShot(arg, `Option Page`);
  }

  await OpenAndClose(arg, "//div [@id = 'nav-Options']");
  // ? Option Screener

  const option_Scrreener = await clicking_Button(arg, "//a [@id ='navlink-1']", `    Option Screener Page`);

  if (option_Scrreener) {
    await OpenAndClose(arg, "//div [@id = 'nav-Options']");

    await hold(1500);

    const optionDash = await clicking_Button(arg, "//span [@id ='screener-btn']", `    Option Screener Dashboard`);

    if (optionDash) {
      const optionDatePick = await clicking_Button(
        arg,
        "//div [@id ='options-screener-select-with-title-date']",
        `    Option Screener Date Picker`,
      );

      if (optionDatePick) {
        const optionFilter = await clicking_Button(
          arg,
          "//div [@id ='options-screener-select-with-title-filters']",
          `    Option Screener Filter`,
        );

        if (optionFilter) {
          const optionTable = await clicking_Button(arg, "//div [@id ='options-screener-table-id-undefined']", `    Option Screener Table`);
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

  const optionChain = await clicking_Button(arg, "//a [@id ='navlink-2']", `    Opiton Chain Page`);

  if (optionChain) {
    await OpenAndClose(arg, "//div [@id = 'nav-Options']");

    const optionchainDash = await clicking_Button(arg, "//span [@id ='chain-btn']", `    Option Chain Dashboard`);

    if (optionchainDash) {
      const optionchainSearch = await clicking_Button(arg, "//div [@id ='options-chain-search']", `    Option Chain Search`);

      if (optionchainSearch) {
        const optionchainDate = await clicking_Button(
          arg,
          "//div [@id ='options-chain-select-with-title-date']",
          `    Option Chain Date Picker`,
        );

        if (optionchainDate) {
          const optionchainTable = await clicking_Button(arg, "//div [@id ='options-chain-table-id-undefined']", `    Option Chain Table`);
          console.log(`                                                      `);
          console.log(`          Successfully Navigate to Option Page 🫡`);
          console.log(`                                                      `);

          await hold(2000);
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
