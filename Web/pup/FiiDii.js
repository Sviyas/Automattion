const { clicking_Button } = require('./Strategy/ButtonFun');
const { hold, take_screenShot } = require('./utils');

/**
 *
 * @param {*} arg  - page
 * @param {*} brwsr - browser
 */
const fii_dii_Tab = async function (arg, brwsr) {
  await hold(1000);
  console.log(`                                                      `);

  const fii_dii = await clicking_Button(arg, "//a [@id ='header-link-FII-DII']", `    FII/DII`);

  if (fii_dii) {
    await hold(1000);

    const dash = await clicking_Button(arg, "//span [@id ='dii-cash-btn']", `    FII/DII Dashboard`);

    if (dash) {
      const filter = await clicking_Button(arg, "//div [@id ='fii-dii-cash-select-with-title-fii-dropdown']", `    FII Filter`);
      if (filter) {
        const table = await clicking_Button(arg, "//div [@id ='fii-dii-cash-table-id-1000']", `    FII/DII Table`);

        if (table) {
          console.log(`        Successfully Navigated to FII/DII Page`);
          console.log(`                                    `);
        } else {
          await take_screenShot(arg, `FII DII Table`);
        }
      } else {
        await take_screenShot(arg, `FII DII Filter`);
      }
    } else {
      await take_screenShot(arg, `FII DII Dashboard`);
    }
  } else {
    await take_screenShot(arg, `FII DII`);
  }
};

module.exports.fii_dii_Tab = fii_dii_Tab;
