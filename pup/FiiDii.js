const { clicking_Button } = require('./Strategy/Button');
const { hold } = require('./utils');

const fii_dii_Tab = async function (arg, brwsr) {
  // const fii = await arg.$x();
  // if (fii.length > 0) {
  //   await fii[0].evaluate(el => el.click());
  //   await hold(2000);
  //   console.log('12.1 Navigate to FII/DII Page ');
  // }
  await clicking_Button(arg, "//a [@id ='header-link-FII-DII']", '    FII/DII');

  await clicking_Button(arg, "//span [@id ='dii-cash-btn']", '    FII/DII Dashboard');

  await clicking_Button(arg, "//div [@id ='fii-dii-cash-select-with-title-fii-dropdown']", '    FII Filter');

  await clicking_Button(arg, "//div [@id ='fii-dii-cash-table-id-1000']", '    FII/DII Table');
};

module.exports.fii_dii_Tab = fii_dii_Tab;
