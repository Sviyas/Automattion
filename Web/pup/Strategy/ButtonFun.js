/**
 *
 * @param {*} arg - page
 * @param {*} id  - Xpath expressions element id
 * @param {*} label - Button or Function Name
 * @description - Elemet Click Function
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
 * @param {*} id  - Xpath Expression Element id
 * @param {*} label - Button or Function Name
 * @description - Element Click Function and base length Value
 */
const click_Button = async function (arg, id, label) {
  const clicking = await arg.$x(`${id}`);
  if (clicking.length > 1) {
    await clicking[1].click();
    console.log(`    ${label} `);
  }
  return clicking;
};

/**
 *
 * @param {*} arg -> page
 * @param {*} id  -> Xpath Expression Element id
 * @param {*} label  -> Button or Function Name
 * @description -evaluate function
 */
const button = async function (arg, id, label) {
  const click = await arg.$x(`${id}`);

  if (click.length === 0) {
    await click[0].evaluate(el => {
      el.click();
    });

    console.log(`    ${label} `);
  }
};

/**
 *
 * @param {*} arg -> page
 * @param {*} id -> Xpath Expression Element id
 * @description - Page Open And Close
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
 * @param {*} id - Xpath Expression Element ID
 * @description - CLick Multiple Times
 */
const clickMultiple = async (arg, id) => {
  const multi = await arg.$x(`${id}`);

  // if (multi.length > 0) {
  //   for (let i = 1; i <= 3; i++) {
  //     await multi[0].click();
  //   }
  // }

  const interval = setInterval(async function () {
    if (multi.length > 0) {
      for (let i = 1; i <= 3; i++) {
        await multi[0].click();
        clearInterval(interval);
      }
    }
  }, 4000);
};
module.exports = { clicking_Button, click_Button, OpenAndClose, button, clickMultiple };
