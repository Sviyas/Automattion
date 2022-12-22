const { take_screenShot, hold } = require('../../utils');
const { clicking_Button } = require('../Button');

// ? strike wise function
/**
 *
 * @param {arg} page - page
 * @param {*} id1 increment button
 * @param {*} id2  decrement button
 * @param {*} label like LTP, OI , Greeks
 */
const strikewise_fun = async function (arg, id1, id2, label) {
  await hold(2000);
  console.log(`        ${label} ✅ Strikewise IV`);

  // ? Fetch length div container
  const divContainer = await (
    await (await (await arg.$x("//div [@id ='strikewise-iv-id']"))[0].getProperty('children')).getProperty('length')
  ).jsonValue();

  const divlength = divContainer - 1;

  console.log(`        ${label} Div Container Length : `, divlength);

  // ? fetch strikewise value
  const strikewise = await (
    await (await arg.$x("//p [@id ='strikewise-iv-value']"))[0].getProperty('textContent')
  ).jsonValue();

  const strikewiseVal = parseFloat(strikewise);

  console.log(`        ${label} Strikewise Values 1️⃣  : `, strikewiseVal);

  // ? click strikwise increment
  const strikeIncrement = await clicking_Button(arg, id1, `    ${label} Strike Increment`);
  await hold(1000);

  // ? fetch increment values
  const strincre = await (
    await (await arg.$x("//p [@id ='strikewise-iv-value']"))[0].getProperty('textContent')
  ).jsonValue();

  const strikeIncreVal = parseFloat(strincre);
  console.log(`        ${label} Strikewise Increment Values : `, strikeIncreVal);

  // ? check  incremnt button
  if (strikeIncreVal !== strikewiseVal) {
    // ? if condition passed !

    // ? click Decrement button
    const strikeDecrement = await clicking_Button(arg, id2, `    ${label} Strike Decrement`);
    await hold(1000);

    // ? fetch Decremnt Value
    const strdecre = await (
      await (await arg.$x("//p [@id ='strikewise-iv-value']"))[0].getProperty('textContent')
    ).jsonValue();

    const strikeDecreVal = parseFloat(strdecre);

    console.log(`        ${label} Strikewise Decrement Values : `, strikeDecreVal);

    // ? check last strikewise iv button

    // ? fetch values on last button
    const nthstrikewise = await (
      await (await arg.$x("//p [@id ='strikewise-iv-value']"))[divlength].getProperty('textContent')
    ).jsonValue();

    const nthstrikeval = parseFloat(nthstrikewise);

    console.log(`        ${label} Strikewise value 2️⃣  : `, nthstrikeval);

    // ? click last strike wise iv increment button

    const nthstrikeinc = await clicking_Button(
      arg,
      `\"//p [@id = '${divlength}-plusclick-btn']\"`,
      `    ${divlength} Strike Increment`
    );
    console.log('🚀 ~ file: StrikewiseIV.js:81 ~ nthstrikeinc', nthstrikeinc);

    await hold(1000);

    const nthincre = await (
      await (await arg.$x("//p [@id ='strikewise-iv-value']"))[divlength].getProperty('textContent')
    ).jsonValue();

    const nthincreVal = parseFloat(nthincre);

    console.log(`        ${label} ${divlength} Strikewise Increment Values : `, nthincreVal);

    //

    // ? check  decrement button
    if (strikeDecreVal !== strikeIncreVal) {
      // ? if condition passed
      const strikeReset = await clicking_Button(arg, "//p [@id ='iv-reset-btn']", `    ${label} Strike Reset`);
      await hold(3000);

      // ? fetch reset value
      const strreset = await (
        await (await arg.$x("//p [@id ='strikewise-iv-value']"))[0].getProperty('textContent')
      ).jsonValue();

      const strikeResetVal = parseFloat(strreset);

      // ? check strike wise value after reset values are same!
      if (strikeResetVal !== strikewiseVal) {
        console.log(`        ${label} Strikewise Reset Values : `, strikeResetVal);
      } else if (strikeResetVal === strikewiseVal) {
        console.log(`        ${label} Data Loading Problem  `, strikeResetVal);
        // @ts-expect-error ! if not working
      }
    } else {
      // @ts-expect-error ! if not  working
      await take_screenShot(arg, 'Strike Decrement');
    }
  } else {
    // @ts-expect-error ! if not working
    await take_screenShot(arg, 'Strike Increment');
  }
  // ?
};

module.exports.strikewise_fun = strikewise_fun;
