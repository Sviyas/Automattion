const { hold } = require('./utils');

const opt_Open = async function (op) {
  //  Options Open Tab
  const options = await op.$x("//span[contains(text(), 'Options') ]");

  if (options.length > 0) {
    await options[0].click();
    await hold(1000);
    // console.log('Open Options Tab ');
  }
};

const opt_Close = async function (cl) {
  //   Options Close Tab
  const close = await cl.$x("//span[contains(text(), 'Options') ]");

  if (close.length > 0) {
    await close[0].click();
    await hold(1000);
    // console.log('Close Options Tab ');
  }
};

module.exports = { opt_Open, opt_Close };
