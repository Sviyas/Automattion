// ?? click button when length is 0
const clicking_Button = async function (arg, id, label) {
  const clicking = await arg.$x(`${id}`);

  if (clicking.length > 0) {
    await clicking[0].click();
    console.log(`    ${label} button`);
  }
  return clicking;
};

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
const button = async function (arg, id, label) {
  const clicking = await arg.$x(`${id}`);
  if (clicking.length > 0) {
    await clicking[0].evaluate(el => {
      el.click();
    });
  }
  return clicking;
};

// ? open and close function
const OpenAndClose = async function (arg, id) {
  const open = await arg.$x(`${id}`);

  if (open.length > 0) {
    await open[0].click();
  }
  return open;
};

module.exports = { clicking_Button, click_Button, OpenAndClose, button };
