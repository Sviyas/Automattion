const { clicking_Button } = require('./Strategy/Button');
const { take_screenShot } = require('./utils');

/**
 *
 * @param {*} arg  - page
 * @param {*} brwsr - browser
 */
const user_icon = async function (arg, brwsr) {
  // ? click user icon
  const icon = await clicking_Button(arg, "//img[@alt = 'User icon']", ' Icon');
  if (icon) {
    console.log('     Navigate to Icon Button');
  }
  // ? click User Icon
  const user = await clicking_Button(arg, "//button [@id ='headlessui-menu-item-32']", '    Icon');

  if (user) {
    //   ? click user tab
    // const userHompage = await clicking_Button(arg, "//button [@id ='headlessui-menu-item-138']", '    User Homepage');

    //  ? click account page
    const account = await clicking_Button(arg, "//button [@id ='Account-btn']", '    User Account');

    if (account) {
      // ? click  order page
      // const orderBook = await clicking_Button(arg, "//button [@id ='OrderBook-btn']", '    User Order Book');
      // if(orderBook) {
      // ?
      // }
      // ? click positions
      const positions = await clicking_Button(arg, "//button [@id = 'Positions-btn']", '    User Positions');

      if (positions) {
        // ?  click support

        const support = await clicking_Button(arg, "//buton [@id ='Support-btn']", '    User Support');

        if (support) {
          const logout = await clicking_Button(arg, "//button [@id ='Logout-btn']", '    User Logout');

          if (logout) {
            console.log('     Logout Successfull');
          } else {
            await take_screenShot(arg, 'User Logout ');
          }
        } else {
          await take_screenShot(arg, 'User Support');
        }
      } else {
        await take_screenShot(arg, 'User Positions');
      }
    } else {
      await take_screenShot(arg, 'User Account');
    }
  } else {
    // ?
    await take_screenShot(arg, 'User Icon');
  }
};

module.exports.user_icon = user_icon;
