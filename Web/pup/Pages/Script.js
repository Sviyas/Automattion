const { futures_Tab } = require('./FuturesTab');
const { options_Tab } = require('./OptionsTab');
const { charts_Tab } = require('./ChartsTab');
const { strategy_Tab } = require('../Strategy/StrategyTab');
const { analysis_Tab } = require('./AnalysisTab');
const { fii_dii_Tab } = require('./FiiDii');
const { user_icon } = require('./User');
const { hold } = require('../Utils/utils');

/**
 *
 * @param {*} page - Scirpt Page
 * @description - Navigate Each Page
 */
async function page_navigations(page) {
  await page.$x("//a[contains(text(), 'User')]");
  console.log('    6      login Successfull');

  await hold(2000);
  // ? futures Tab
  console.log(`                                                      `);
  console.log('    7      Navigating to Futures Tab');
  await futures_Tab(page);

  // ? option Tab
  console.log('    8      Navigating to Options Tab');
  await options_Tab(page);

  // ? chart Tab
  console.log('    9      Navigating to Charts Tab');
  await charts_Tab(page);

  //  ? strategy  Tab
  console.log('    10     Navigating to Strategy Tab');
  await strategy_Tab(page);

  // ? analysis Tab
  console.log('    11     Navigating to Analysis Tab');
  await analysis_Tab(page);

  // ? FII_DII Tab
  console.log('    12     Navigating to FII/DII Tab');
  await fii_dii_Tab(page);

  // ? user icon
  console.log('    13     Navigating to User Profile');
  await user_icon(page);
}

module.exports.page_navigations = page_navigations;
