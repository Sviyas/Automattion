const { hold, take_screenShot } = require('../../utils');
const { clicking_Button } = require('../Button');

// ? Nifty Target Function
/**
 *
 * @param {*} arg -> page
 * @param {*} label -> like LTP, OI , Greeks
 */
const niftyTarget_fun = async function (arg, label) {
  await hold(1000);
  console.log(`        ${label} ✅ NIFTY TARGET`);
  // ?  fetch profit loss values in Nifty Target Price
  const prolos = await (
    await (await arg.$x("//h3[@id ='Profit-Loss-value']"))[0].getProperty('textContent')
  ).jsonValue();

  // ? parse Value
  const profitLoss = parseInt(prolos);

  console.log(`        ${label} profti loss Value : `, profitLoss);

  //  ? nifty target increment button
  await clicking_Button(arg, "//button [@id = 'target-addition-btn']", `    ${label} Nifty Increment`);
  await hold(1000);
  //   ? fetch incrment value
  const niftyInc = await (
    await (await arg.$x("//h3[@id ='Profit-Loss-value']"))[0].getProperty('textContent')
  ).jsonValue();
  //   ? parse the value
  const incrementValue = parseInt(niftyInc);
  console.log(`        ${label} Increment Value : `, incrementValue);

  // ? if condition passed
  if (incrementValue !== profitLoss) {
    // ? click Decrement button
    await clicking_Button(arg, "//button[@id = 'target-subraction-btn']", `    ${label} Nifty Decrement`);
    await hold(1000);
    //  ? fetch decrement values
    const niftyDec = await (
      await (await arg.$x("//h3[@id ='Profit-Loss-value']"))[0].getProperty('textContent')
    ).jsonValue();

    const decrementValue = parseInt(niftyDec);

    console.log(`        ${label} Decrement Value : `, decrementValue);

    // ? check Decrement button
    if (decrementValue !== incrementValue) {
      // ? click Nifty Reset Button
      await clicking_Button(arg, "//p[@id = 'target-reset-btn']", `    ${label} Nifty Reset`);
      await hold(1000);
      //   ? fetch reset value
      const niftyres = await (
        await (await arg.$x("//h3[@id ='Profit-Loss-value']"))[0].getProperty('textContent')
      ).jsonValue();
      //   ? parse value
      const niftyResetVal = parseFloat(niftyres);

      if (niftyResetVal === profitLoss) {
        console.log(`        ${label} Reset Value : `, niftyResetVal);
      } else {
        // @ts-check
        await take_screenShot(arg, `${label} Nifty Reset`);
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
