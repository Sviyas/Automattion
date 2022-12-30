const { take_screenShot } = require('../utils');

// ?? click button when length is 0
/**
 *
 * @param {*} arg - page
 * @param {*} id  - element id
 * @param {*} label - element Tag name
 * @returns
 */
const clicking_Button = async function (arg, id, label) {
  const clicking = await arg.$x(`${id}`);

  if (clicking.length > 0) {
    await clicking[0].click();
    console.log(`    ${label} button`);
  }
  return clicking;
};

// //  ? if function does not exists capture the error
// const errorIdentfier = async function (funct) {
//   try {
//     funct === undefined;
//   } catch (err) {
//     err.take_screenShot(arg);
//   }
// };

/**
 *
 * @param {*} arg - page
 * @param {*} id  - element id
 * @param {*} label - element tag name
 * @returns
 */
// ?? click button when length is 1
const click_Button = async function (arg, id, label) {
  const clicking = await arg.$x(`${id}`);
  if (clicking.length > 1) {
    await clicking[1].click();
    console.log(`    ${label} button`);
  }
  return clicking;
};

// ?? evaluate function
/**
 *
 * @param {*} arg -> page
 * @param {*} id  -> element id
 * @param {*} label  -> element tag name
 * @returns
 */
const button = async function (arg, id, label) {
  const click = await arg.$x(`${id}`);
  console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', click.length);
  if (click.length === 0) {
    await click[0].evaluate(el => {
      el.click();
    });

    console.log(`    ${label} button`);
  }
};

// ? open and close function
/**
 *
 * @param {*} arg -> page
 * @param {*} id -> element id
 * @returns
 */
const OpenAndClose = async function (arg, id) {
  const open = await arg.$x(`${id}`);

  if (open.length > 0) {
    await open[0].click();
  }
  return open;
};

module.exports = { clicking_Button, click_Button, OpenAndClose, button };
