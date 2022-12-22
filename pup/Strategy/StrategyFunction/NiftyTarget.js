const { hold, take_screenShot } = require('../../utils');
const { clicking_Button } = require('../Button');

// ? Nifty Target Function
/**
 *
 * @param {*} arg -> page
 * @param {*} label -> like LTP, OI , Greeks
 */
const niftyTarget_fun = async function (arg, label) {
  await hold(3000);
  console.log(`        ${label} ✅ NIFTY TARGET`);
  // ?  fetch profit loss values in Nifty Target Price
  const prolos = await (
    await (await arg.$x("//h3[@id ='Profit-Loss-value']"))[0].getProperty('textContent')
  ).jsonValue();

  // ? parse Value
  const profitLoss = parseInt(prolos);

  console.log(`        ${label} Nifty profti loss Value : `, profitLoss);

  // ? nifty target price value

  const niftyPrice = await (await (await arg.$x("//p[@id ='target-value']"))[0].getProperty('textContent')).jsonValue();

  const niftyPriceVal = parseFloat(niftyPrice);

  console.log(`        ${label} Nifty Price Value : `, niftyPriceVal);

  //  ? nifty target increment button
  await clicking_Button(arg, "//button [@id = 'target-addition-btn']", `    ${label} Nifty Increment`);
  await hold(3000);
  //   ? fetch incrment value
  const niftyInc = await (await (await arg.$x("//p[@id ='target-value']"))[0].getProperty('textContent')).jsonValue();
  //   ? parse the value
  const incrementValue = parseFloat(niftyInc);
  console.log(`        ${label} Nifty Increment Price Value : `, incrementValue);

  // ? if condition passed
  if (incrementValue !== niftyPriceVal) {
    // ? click Decrement button
    await clicking_Button(arg, "//button[@id = 'target-subraction-btn']", `    ${label} Nifty Decrement`);
    await hold(3000);
    //  ? fetch decrement values
    const niftyDec = await (await (await arg.$x("//p[@id ='target-value']"))[0].getProperty('textContent')).jsonValue();

    const decrementValue = parseFloat(niftyDec);

    console.log(`        ${label} Nifty Decrement Price Value : `, decrementValue);

    // ? check Decrement button
    if (decrementValue !== incrementValue) {
      // ? click Nifty Reset Button
      await clicking_Button(arg, "//p[@id = 'target-reset-btn']", `    ${label} Nifty Reset`);
      await hold(3000);
      //   ? fetch reset value
      const niftyres = await (
        await (await arg.$x("//p[@id ='target-value']"))[0].getProperty('textContent')
      ).jsonValue();
      //   ? parse value
      const niftyResetInttVal = parseInt(niftyres);
      const niftyResetVal = parseFloat(niftyres);

      if (niftyResetVal !== niftyPriceVal && niftyResetInttVal !== decrementValue) {
        // @ts-check
        console.log(`        ${label} Nifty Reset Profit Loss Value : `, profitLoss);
        console.log(`        ${label} Nifty Reset Price Value : `, niftyResetVal);
      } else if (niftyResetVal === niftyPriceVal) {
        // @ts-check
        console.log(`        ${label} Nifty Data Loading Problem ☠️`);
      } else {
        // @ts-check
        await take_screenShot(arg, `${label} Nifty Reset : `, niftyResetVal);
      }
    } else {
      // @ts-check
      await take_screenShot(arg, `${label} Nifty Decrement`);
    }
  } else {
    // @ts-check
    await take_screenShot(arg, `${label} Nifty Increment`);
  }
};

module.exports.niftyTarget_fun = niftyTarget_fun;
