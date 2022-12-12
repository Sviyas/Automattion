const { OpenAndClose, clicking_Button } = require('./Strategy/Button.js');
const { hold } = require('./utils.js');

const charts_Tab = async function (arg, brwsr) {
  //  ? Chart Tab Open

  // Charts IV Smile
  const iv_Smile = await arg.$x("//p[contains(text(), 'IV Smile')]");

  if (iv_Smile.length > 0) {
    await iv_Smile[0].click();
    await hold(2000);
    console.log('9.1   Navigate to IV Smile Page');
  }
  // check IV smile dashboard
  const iv_Dash = await arg.$x("//span[contains(text(), 'ivSmile')]");

  if (iv_Dash.length > 0) {
    await iv_Dash[0].click();
    await hold(2000);
    console.log(' IV Smile Dashboard ');
  }

  //  check IV search Field
  const iv_Search = await arg.$x("//div[@id = 'charts-ivSmile-search']");

  if (iv_Search.length > 1) {
    await iv_Search[1].click();
    await hold(2000);
    console.log(' IV Smile Search Field');
  }

  // check IV date Picker
  const iv_Datepicker = await arg.$x("//div[@id = 'charts-ivSmile-select-with-title-date']");

  if (iv_Datepicker.length > 0) {
    await iv_Datepicker[0].click();
    await hold(2000);
    console.log(' IV Smile Date Picker');
  }

  await ch_Op(arg);

  // Charts Open Interest
  const OI = await arg.$x("//p[contains(text(), 'Open Interest')]");

  if (OI.length > 0) {
    await OI[0].click();
    await hold(1000);
    console.log('9.2   Navigate to Open Interest Page');
  }

  await ch_Clo(arg);

  // check OI dashboard
  const oi_Dashboard = await arg.$x("//span[contains(text(), 'oi')]");

  if (oi_Dashboard.length > 0) {
    await oi_Dashboard[0].click();
    await hold(1000);
    console.log(' Open Interest Dashboard ');
  }

  // check OI search field
  const oi_Search = await arg.$x("//div [@id = 'charts-oi-search']");

  if (oi_Search.length > 1) {
    await oi_Search[1].click();
    await hold(2000);
    console.log(' Open Interest Search Field');
  }

  // check OI filter field
  const oi_Filter = await arg.$x("//div [@id = 'charts-oi-select-with-title-c1']");

  if (oi_Filter.length > 0) {
    await oi_Filter[0].click();
    await hold(2000);
    console.log(' Open Interest Filter Field');
  }

  // check OI Date Picker
  const oi_DatePicker = await arg.$x("//div [@id = 'charts-oi-select-with-title-date']");

  if (oi_DatePicker.length > 0) {
    await oi_DatePicker[0].click();
    await hold(2000);
    console.log(' Open Interest Date Picker ');
  }

  await ch_Op(arg);

  //  Charts Greeks
  const Greeks = await arg.$x("//p[contains(text(), 'Greeks')]");

  if (Greeks.length > 0) {
    await Greeks[0].click();
    await hold(2000);
    console.log('9.3   Navigate to Greeks Page ');
  }

  await ch_Clo(arg);

  // Charts Greeks dashboard
  const greeks_Dash = await arg.$x("//span[contains(text(), 'greeks')]");

  if (greeks_Dash.length > 0) {
    await greeks_Dash[0].click();
    await hold(1000);
    console.log('  Greeks Dashboard  ');
  }

  // Greeks Search Field
  const greeks_Search = await arg.$x("//div [@id = 'charts-greeks-search']");

  if (greeks_Search.length > 1) {
    await greeks_Search[1].click();
    await hold(2000);
    console.log('  Greeks Search Field  ');
  }

  // Greeks Date Picker
  const greeks_DatePicker = await arg.$x("//div [@id = 'charts-greeks-select-with-title-date']");

  if (greeks_DatePicker.length > 0) {
    await greeks_DatePicker[0].click();
    await hold(2000);
    console.log('  Greeks Date Picker  ');
  }
  await ch_Op(arg);

  // Charts MaxPain
  const maxPain = await arg.$x("//p[contains(text(), 'Maxpain')]");

  if (maxPain.length > 0) {
    await maxPain[0].click();
    await hold(2000);
    console.log('9.4   Navigate to Maxpain Page ');
  }

  await ch_Clo(arg);

  //  maxpain dashboard
  const maxpain_Dash = await arg.$x("//span[contains(text(), 'maxpain')]");

  if (maxpain_Dash.length > 0) {
    await maxpain_Dash[0].click();
    await hold(1000);
    console.log('  Maxpain Dashboard  ');
  }

  // maxpain  Search Field
  const maxpain_Search = await arg.$x("//div [@id = 'charts-maxpain-search']");

  if (maxpain_Search.length > 1) {
    await maxpain_Search[1].click();
    await hold(2000);
    console.log('  Maxpain Search Field  ');
  }

  // maxpain Date picker  Field
  const maxpain_Datepicker = await arg.$x("//div [@id = 'charts-maxpain-select-with-title-date']");

  if (maxpain_Datepicker.length > 0) {
    await maxpain_Datepicker[0].click();
    await hold(2000);
    console.log('  Maxpain Datepicker Field  ');
  }
};

module.exports.charts_Tab = charts_Tab;
