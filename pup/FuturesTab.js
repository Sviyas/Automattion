const { hold, take_screenShot } = require('./utils.js');
// const { OpenAndClose } = require('./openAndClose');
const { clicking_Button, OpenAndClose } = require('./Strategy/Button');

// ? Futures Tab Clicking
const futures_Tab = async function (arg, brwsr) {
  //  ? Futures Tab open

  await OpenAndClose(arg, "//button [@id = 'headlessui-popover-button-17']");

  // ? Dashboard Tab
  const futureDash = await clicking_Button(arg, "//p[contains(text(), 'Dashboard') ]", '    Futures Page');

  console.log('    7.1   Navigate to dashboard page');
  if (!futureDash) {
    await hold(1000);
    await take_screenShot(arg, 'Future dashboard page');
  }
  await hold(1000);

  // ? Close Futures tab
  await OpenAndClose(arg, "//span[contains(text(), 'Futures') ]");

  // ? check Dashboard
  const checkDash = await clicking_Button(arg, "//span[contains(text(), 'dashboard')]", '    Futures Dashboard');

  if (!checkDash) {
    await hold(1000);
    await take_screenShot(arg, 'Future Dashboard');
  }

  await hold(1000);

  // ? select date-picker
  const futureDatepic = await clicking_Button(
    arg,
    "//div[@id ='futures-dashboard-select-with-title-date']",
    '    Dashboard Date Picker'
  );

  if (!futureDatepic) {
    await hold(1000);
    await take_screenShot(arg, 'Future Date Picker');
  }
  await hold(1000);

  //  ? open tab
  await OpenAndClose(arg, "//span[contains(text(), 'Futures') ]");

  // ? Future Screener Tab
  const futureScreener = await clicking_Button(arg, "//p[contains(text(), 'Future Screener') ]", '    Future Screener');

  if (!futureScreener) {
    await hold(1000);
    await take_screenShot(arg, 'Future Screener page');
  }

  await hold(1000);
  console.log('    7.2   Navigate to Future Screener page');

  // ? close the future tab
  await OpenAndClose(arg, "//span[contains(text(), 'Futures') ]");

  //  ?  check screener dashboard
  const screenerDash = await clicking_Button(arg, "//span[contains(text(), 'screener')]", '    Screener');

  if (!screenerDash) {
    await hold(1000);
    await take_screenShot(arg, 'Future Screener Dashboard');
  }
  await hold(1000);

  // ? check screener date picker
  const screenerDate = await clicking_Button(
    arg,
    "//div[@id='futures-screener-select-with-title-date']",
    '    Future Screener Date Picker'
  );

  if (!screenerDate) {
    await hold(1000);
    await take_screenShot(arg, 'Screener Date Picker');
  }

  await hold(1000);

  // ? screener Filter
  const screenerFilter = await clicking_Button(
    arg,
    "//div[@id='futures-screener-select-with-title-filters']",
    '    Future Screener Filter'
  );

  await hold(1000);

  if (!screenerFilter) {
    await hold(1000);
    await take_screenShot(arg, 'Screener Filter ');
  }
  // ? screener Table
  const screenerTable = await clicking_Button(
    arg,
    "//div[@id ='futures-screener-table-id-undefined']",
    '    Future Screener Table'
  );

  if (!screenerTable) {
    await hold(1000);
    await take_screenShot(arg, 'Screener Table');
  }
  await hold(1000);

  // ? open tab
  await OpenAndClose(arg, "//span[contains(text(), 'Futures') ]");

  // ? Futures Heatmap
  const futureHeatmap = await clicking_Button(arg, "//p[contains(text(), 'Heatmap')]", '    Heatmap');

  if (!futureHeatmap) {
    await hold(1000);
    await take_screenShot(arg, 'Future Heatmap Page');
  }
  await hold(1000);
  console.log('    7.3   Navigate to Heatmap page');

  await OpenAndClose(arg, "//span[contains(text(), 'Futures') ]");

  // ? check heatmap
  const futureHeat = await clicking_Button(arg, "//span[contains(text(), 'heatmap')]", '    Heatmap Dashboard');

  if (!futureHeat) {
    await hold(1000);
    await take_screenShot(arg, 'Future Heatmap ');
  }
  await hold(1000);

  //  ? Heatmap Date picker
  const heatmapDate = await clicking_Button(
    arg,
    "//div[@id='futures-heatmap-select-with-title-date']",
    '    Heatmap Date Picker'
  );

  if (!heatmapDate) {
    await hold(1000);
    await take_screenShot(arg, 'Heatmap Date Picker');
  }
  await hold(1000);

  // ? heattmap price
  const heatmapPrice = await clicking_Button(
    arg,
    "//div[@id = 'futures-heatmap-select-with-title-f-heatmap']",
    '    Heatmap Price Filter'
  );

  if (!heatmapPrice) {
    await hold(1000);
    await take_screenShot(arg, 'Heatmap Price');
  }
  await hold(1000);

  // ? heatmap filter
  const heatmapFilter = await clicking_Button(
    arg,
    "//div[@id = 'futures-heatmap-select-with-title-f-heatmap-inference']",
    '    Heatmap Filter'
  );

  if (!heatmapFilter) {
    await hold(1000);
    await take_screenShot(arg, 'Heatmap Filter');
  }
  await hold(1000);

  // ? heatmap table
  const heatmapTable = await clicking_Button(arg, "//section[@id ='future-heatmap-id']", '    Heatmap Table');

  if (!heatmapTable) {
    await hold(1000);
    await take_screenShot(arg, 'Heatmap Table');
  }

  // ? futures homepage
  const homepage = await clicking_Button(arg, "//span [@id ='futures-btn']", '    Futures Homepage');
  if (!homepage) {
    await hold(1000);
    await take_screenShot(arg, 'Homepage');
  }
};

module.exports.futures_Tab = futures_Tab;
