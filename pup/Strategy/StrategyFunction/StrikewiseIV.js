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
  // ? fetch strikewise profit loss value
  await hold(2000);
  console.log(`        ${label} ✅ Strikewise IV`);

  // ? Find Strike wise iv length
  const [strikeLen] = await arg.$x("//div [@id ='strikewise-iv-id']");
  const children = await strikeLen.getProperty('children');
  const leng = await (await children.getProperty('length')).jsonValue();

  console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', leng);

  const strikewise = await (
    await (await arg.$x("//p [@id ='strikewise-iv-value']"))[0].getProperty('textContent')
  ).jsonValue();
  // ? parse the value string into float
  const strikewiseVal = parseFloat(strikewise);

  console.log(`        ${label} Strikewise Values `, strikewiseVal);

  // ? click strikwise increment
  const strikeIncrement = await clicking_Button(arg, id1, `    ${label} Strike Increment`);
  await hold(1000);
  //   ? fetch increment values
  const strincre = await (
    await (await arg.$x("//p [@id ='strikewise-iv-value']"))[0].getProperty('textContent')
  ).jsonValue();
  // ?  parse incremnt values
  const strikeIncreVal = parseFloat(strincre);
  console.log(`        ${label} Strikewise Increment Values : `, strikeIncreVal);

  // ? check strike wise incremnt button
  if (strikeIncreVal !== strikewiseVal) {
    // ? if condition passed !

    const strikeDecrement = await clicking_Button(arg, id2, `    ${label} Strike Decrement`);
    await hold(1000);

    // ? fetch Decremnt Value
    const strdecre = await (
      await (await arg.$x("//p [@id ='strikewise-iv-value']"))[0].getProperty('textContent')
    ).jsonValue();

    // ? parse value  value
    const strikeDecreVal = parseFloat(strdecre);

    console.log(`        ${label} Strikewise Decrement Values : `, strikeDecreVal);

    // ? check strikewise decrement button
    if (strikeDecreVal !== strikeIncreVal) {
      // ? if condition passed
      const strikeReset = await clicking_Button(arg, "//p [@id ='iv-reset-btn']", `    ${label} Strike Reset`);
      await hold(3000);
      // ? fetch strikewise reset value
      const strreset = await (
        await (await arg.$x("//p [@id ='strikewise-iv-value']"))[0].getProperty('textContent')
      ).jsonValue();

      // ? parse the value
      const strikeResetVal = parseFloat(strreset);

      // ? check strike wise value after reset values are same!
      if (strikeResetVal !== strikewiseVal) {
        console.log(`        ${label} Strikewise Reset Values : `, strikeResetVal);
      } else if (strikeResetVal === strikewiseVal) {
        console.log(`        ${label} Data Loading Problem  `, strikeResetVal);
        // @ts-expect-error ! if not working
        // await take_screenShot(arg, 'Strike Reset');
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
