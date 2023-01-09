const { clicking_Button } = require('./Strategy/ButtonFun');
const { take_screenShot, hold } = require('./utils');

/**
 *
 * @param {*} arg  - page
 * @param {*} brwsr - browser
 */
const user_icon = async function (arg, brwsr) {
  // ? click user icon
  console.log(`                                                      `);

  // console.log(`        Navigate to Icon Button`);
  const icon = await clicking_Button(arg, "//img[@alt = 'User icon']", `        User Icon`);
  if (icon) {
    await hold(1000);
  }
  // ? click User Icon
  const user = await clicking_Button(arg, "//span [@id ='username-btn']", `        User Profile`);

  if (user) {
    await hold(1000);
    //   ? click user tab

    //  ? click account page
    const account = await clicking_Button(arg, "//button [@id ='Account-btn']", `        User Account`);

    if (account) {
      await hold(1000);

      // ?  click support

      const support = await clicking_Button(arg, "//button [@id = 'Support-btn']", `        User Support`);

      if (support) {
        await hold(1000);
        const logout = await clicking_Button(arg, "//button [@id ='Logout-btn']", `        User Logout`);

        if (logout) {
          console.log(`            Logout Successfull ✌️`);
        } else {
          await take_screenShot(arg, `User Logout `);
        }
      } else {
        await take_screenShot(arg, `User Support`);
      }
    } else {
      await take_screenShot(arg, `User Account`);
    }
  } else {
    // ?
    await take_screenShot(arg, `User Icon`);
  }
};

module.exports.user_icon = user_icon;
