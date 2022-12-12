const { hold } = require('./utils.js');
const { opt_Open, opt_Close } = require('./OptionOpenClose');

const options_Tab = async function (arg, brwsr) {
  await opt_Open(arg);

  // Option Dashboard
  const option_Dash = await arg.$x("//p[contains(text(), 'Dashboard') ]");

  if (option_Dash.length > 0) {
    await option_Dash[0].click();
    await hold(2000);
    console.log('8.1   Navigate to Options Dashboard Page');
  }

  // Check dashboard
  const opt_Dashboard = await arg.$x("//span[contains(text(), 'dashboard')]");

  if (opt_Dashboard.length > 0) {
    await opt_Dashboard[0].click();
    await hold(2000);
    console.log('  Option Dashboard   ');
  }

  //  check date picker
  const opt_Datepicker = await arg.$x("//div [@id = 'options-dashboard-select-with-title-date']");

  if (opt_Datepicker.length > 0) {
    await opt_Datepicker[0].click();
    await hold(2000);
    console.log('  Option Date Picker  ');
  }

  await opt_Open(arg);

  // Option Screener Tab
  const opt_Screener = await arg.$x("//p[contains(text(), 'Option Screener')]");

  if (opt_Screener.length > 0) {
    await opt_Screener[0].click();
    await hold(2000);
    console.log('8.2   Navigate to Option Screener Page');
  }

  await opt_Close(arg);

  // option screener check dashboard
  const scre_Dash = await arg.$x("//span[contains(text(), 'screener')]");

  if (scre_Dash.length > 0) {
    await scre_Dash[0].click();
    await hold(2000);
    console.log('  Option Screener Dashboard ');
  }

  // Screener Date picker
  const scre_DatePicker = await arg.$x("//div [@id = 'options-screener-select-with-title-date']");
  if (scre_DatePicker.length > 0) {
    await scre_DatePicker[0].click();
    await hold(2000);
    console.log('  Option Screener Date Picker ');
  }

  // check Filter
  const opt_Filter = await arg.$x("//div [@id = 'options-screener-select-with-title-filters']");

  if (opt_Filter.length > 0) {
    await opt_Filter[0].click();
    await hold(2000);
    console.log('  Option Screener Filter  ');
  }

  // check Screener Table
  const opt_ScreenTable = await arg.$x("//div [@id = 'options-screener-table-id-undefined']");

  if (opt_ScreenTable.length > 0) {
    await opt_ScreenTable[0].click();
    await hold(2000);
    console.log('  Option Screener Table ');
  }

  await opt_Open(arg);

  //  option chain tab
  const opt_Chain = await arg.$x("//p[contains(text(), 'Option Chain')]");
  if (opt_Chain.length > 0) {
    await opt_Chain[0].click();
    await hold(2000);
    console.log('8.2   Navigate to Option Chaing Page');
  }

  await opt_Close(arg);

  //  option chain check
  const chain_Dash = await arg.$x("//span[contains(text(), 'chain')]");

  if (chain_Dash.length > 0) {
    await chain_Dash[0].click();
    await hold(2000);
    console.log('  Option Chain Dashboard  ');
  }

  // option chain search field
  const chain_Search = await arg.$x("//div [@id = 'options-chain-search']");

  if (chain_Search.length > 1) {
    await chain_Search[1].click();
    await hold(2000);
    console.log('  Option Chain Search ');
  }

  // option chain date picker

  const chain_DatePicker = await arg.$x("//div[@id = 'options-chain-select-with-title-date']");

  if (chain_DatePicker.length > 0) {
    await chain_DatePicker[0].click();
    await hold(2000);
    console.log('  Option Chain Date Picker ');
  }
};

module.exports.options_Tab = options_Tab;
