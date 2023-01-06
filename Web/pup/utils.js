const path = require('path');

/**
 *
 * @param {*} sh - page
 * @param {*} pic - pic name
 * @description - ScreenShot Function
 */
const take_screenShot = async function (sh, pic) {
  await hold(1000);
  await sh.screenshot({ path: path.resolve(__dirname, `../Errors`, `${pic}.png`) });
  console.log(`${pic} `);
};

/**
 *
 * @param {*} timeout - delay
 * @description - TimeOut Function
 */

const hold = async timeout => {
  await new Promise(resolve => setTimeout(resolve, timeout));
};

module.exports = { hold, take_screenShot };
