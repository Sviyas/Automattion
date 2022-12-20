const path = require('path');

/**
 *
 * @param {*} sh - screenshot
 * @param {*} pic - pic name
 */
// ? identifying Erros screenshot function
const take_screenShot = async function (sh, pic) {
  await hold(1000);
  await sh.screenshot({ path: path.resolve(__dirname, '../Errors', `${pic}.png`) });
  console.log(`${pic} button `);
};

/**
 *
 * @param {*} timeout - timeout function
 */
// ? Set the time out
const hold = async timeout => {
  await new Promise(resolve => setTimeout(resolve, timeout));
};

module.exports = { hold, take_screenShot };
