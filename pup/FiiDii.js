const { clicking_Button } = require('./Strategy/Button');
const { hold } = require('./utils');

const fii_dii_Tab = async function (arg, brwsr) {
  await clicking_Button(arg, "//a [@id ='header-link-FII-DII']", '    FII/DII');

  await clicking_Button(arg, "//span [@id ='dii-cash-btn']", '    FII/DII Dashboard');

  await clicking_Button(arg, "//div [@id ='fii-dii-cash-select-with-title-fii-dropdown']", '    FII Filter');

  await clicking_Button(arg, "//div [@id ='fii-dii-cash-table-id-1000']", '    FII/DII Table');
};

module.exports.fii_dii_Tab = fii_dii_Tab;
