const path = require('path');

// ? identifying Erros screenshot function
const take_screenShot = async function (sh, pic) {
  await sh.screenshot({ path: path.resolve(__dirname, './Errors', `${pic}.png`) });
  console.log(`${pic} button Not Working`);
};

// ? Set the time out
const hold = async timeout => {
  await new Promise(resolve => setTimeout(resolve, timeout));
};

module.exports = { hold, take_screenShot };
