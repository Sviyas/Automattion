const { take_screenShot, hold } = require('../../utils');
const { clicking_Button } = require('../ButtonFun');

/**
 *
 * @param {*} arg - page
 * @param {*} label - element tag name like LTP, OI , Greeks
 * @description - Expiry Target
 */
const expiry_fun = async function (arg, label) {
  console.log(`                                                      `);

  console.log(`        ${label} ✅ EXPIRY TARGET`);

  await hold(2000);
  // ? Fetch Expiry Profit/loss & Current Date Values

  const expiryProfit = await (await (await arg.$x("//h3[@id ='Profit-Loss-value']"))[0].getProperty('textContent')).jsonValue();

  const expProftitValue = parseInt(expiryProfit);

  console.log(`        ${label} Expiry Profit Values : `, expProftitValue);

  const expiryDate = await (await (await arg.$x("//p [@id ='expiry-value']"))[0].getProperty('textContent')).jsonValue();

  console.log(`        ${label} Expiry Date : `, expiryDate);

  //   ? click EXP Forward button
  const expiryIncre = await clicking_Button(arg, "//button [@id ='expiry-move-backword-btn']", `    ${label} Expiry Forward`);
  await hold(2000);

  // ? fetch Increment profit/loss value and increment date value

  const forwardDate = await (await (await arg.$x("//p [@id ='expiry-value']"))[0].getProperty('textContent')).jsonValue();

  console.log(`        ${label} Expiry Forward Date : `, forwardDate);

  const forwardDateInc = await (await (await arg.$x("//h3 [@id ='Profit-Loss-value']"))[0].getProperty('textContent')).jsonValue();

  const forwardDateIncreVal = parseInt(forwardDateInc);

  console.log(`        ${label} Expiry Forward Date Profit Loss Value : `, forwardDateIncreVal);

  //  ! check if expiry increment button

  if (forwardDate !== expiryDate) {
    // ? click EXP  backward button

    const expiryDec = await clicking_Button(arg, "//button [@id ='expiry-move-forword-btn']", `    ${label} Expiry Backward`);
    await hold(2000);

    // ? fetch Increment profit/loss value and increment date value

    const backwardDate = await (await (await arg.$x("//p [@id ='expiry-value']"))[0].getProperty('textContent')).jsonValue();

    console.log(`        ${label} Expiry backward Date : `, backwardDate);

    const backwardDateDec = await (await (await arg.$x("//h3[@id ='Profit-Loss-value']"))[0].getProperty('textContent')).jsonValue();

    const backwardDateDecVal = parseInt(backwardDateDec);

    console.log(`        ${label} Expiry backward Date Profit Loss Value : `, backwardDateDecVal);

    // ! check Backward button
    if (backwardDate !== forwardDate) {
      // ? click expiry Reset button
      const expReset = await clicking_Button(arg, "//p [@id ='expiry-target-reset-btn']", `    ${label} Expiry Reset`);
      await hold(3000);

      //   ? fetch Reset Profit/Loss Value & Date Values
      const expiryReset = await (await (await arg.$x("//h3[@id ='Profit-Loss-value']"))[0].getProperty('textContent')).jsonValue();

      const expiryResetVal = parseInt(expiryReset);

      const resetDate = await (await (await arg.$x("//p [@id ='expiry-value']"))[0].getProperty('textContent')).jsonValue();

      // ! check Reset values and expiry profit value are same
      if (resetDate === expiryDate) {
        console.log(`        ${label} Expiry Reset Date : `, resetDate);
        console.log(`        ${label} Expiry Reset Profit Loss Value : `, expiryResetVal);
        console.log(`                                                      `);
      } else {
        // @ts-check
        await take_screenShot(arg, `${label} Expiry Backward`);
      }
    } else {
      // @ts-check => data loading problem or button not clicking
      await take_screenShot(arg, `${label} Expiry Backward`);
    }
  } else if (forwardDateIncreVal === expProftitValue) {
    // ? check current date is ->  expiry or not
    await hold(1000);
    const options = { weekday: 'long' };

    const currentDate = new Date();

    const checkDateValue = currentDate.toLocaleDateString('en-US', options);

    if ('Thursday' === checkDateValue) {
      // ? if current day is expiry ->  the process will be end
      console.log(`        Today is Expiry 🤝`);
      console.log(`                                                      `);
    } else {
      // ?
      await take_screenShot(arg, `${label} Expiry Forward`);
    }
  }
};

module.exports.expiry_fun = expiry_fun;
