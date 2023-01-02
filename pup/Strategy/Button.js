// ?? click button when length is 0

const { hold } = require('../utils');

/**
 *
 * @param {*} arg - page
 * @param {*} id  - element id
 * @param {*} label - Button Name
 * @returns
 */
const clicking_Button = async function (arg, id, label) {
  const clicking = await arg.$x(`${id}`);

  if (clicking.length > 0) {
    await clicking[0].click();
    console.log(`    ${label} `);
  }
  return clicking;
};

/**
 *
 * @param {*} arg - page
 * @param {*} id  - element id
 * @param {*} label - Button Name
 * @returns
 */
// ?? click button when length is 1
const click_Button = async function (arg, id, label) {
  const clicking = await arg.$x(`${id}`);
  if (clicking.length > 1) {
    await clicking[1].click();
    console.log(`    ${label} `);
  }
  return clicking;
};

// ?? evaluate function
/**
 *
 * @param {*} arg -> page
 * @param {*} id  -> element id
 * @param {*} label  -> Button Name
 * @returns
 */
const button = async function (arg, id, label) {
  const click = await arg.$x(`${id}`);
  // console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', click.length);
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

/**
 *
 * @param {*} arg - page
 * @param {*} id - Xpath Expression ID
 * @description - CLick Multiple Times
 */
const clickMultiple = async (arg, id) => {
  const multi = await arg.$x(`${id}`);

  if (multi.length > 0) {
    for (let i = 1; i <= 3; i++) {
      await multi[0].click();
    }
  }
};
module.exports = { clicking_Button, click_Button, OpenAndClose, button, clickMultiple };
