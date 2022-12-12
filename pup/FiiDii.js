const { hold } = require('./utils');

const fii_dii_Tab = async function (arg, brwsr) {
  const fii = await arg.$x("//a[contains(text(), 'FII / DII') ]");
  if (fii.length > 0) {
    await fii[0].evaluate(el => el.click());
    await hold(2000);
    console.log('12.1 Navigate to FII/DII Page ');
  }
};

module.exports.fii_dii_Tab = fii_dii_Tab;
