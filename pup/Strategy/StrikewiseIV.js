const { take_screenShot, hold } = require('../utils');
const { clicking_Button } = require('./Button');

// ? strike wise function
const strikewise_fun = async function (arg, id1, id2) {
  // ? fetch strikewise profit loss value
  await hold(1000);
  const strikewise = await (
    await (await arg.$x("//p [@id ='strikewise-iv-value']"))[0].getProperty('textContent')
  ).jsonValue();
  // ? parse the value string into float
  const strikewiseVal = parseFloat(strikewise);

  // ? log the value
  console.log('        Strikewise Values : ', strikewiseVal);

  // ? click strikwise increment button pass the argument into id1
  const strikeIncrement = await clicking_Button(arg, id1, '    Strike Increment');
  await hold(1000);
  //   ? fetch increment values
  const strincre = await (
    await (await arg.$x("//p [@id ='strikewise-iv-value']"))[0].getProperty('textContent')
  ).jsonValue();
  // ?  parse incremnt values
  const strikeIncreVal = parseFloat(strincre);

  console.log('        Strikewise Increment Values : ', strikeIncreVal);

  // ? check strike wise incremnt button
  if (strikeIncreVal !== strikewiseVal) {
    // ? if condition passed !

    const strikeDecrement = await clicking_Button(arg, id2, '    Strike Decrement');
    await hold(1000);

    // ? fetch Decremnt Value
    const strdecre = await (
      await (await arg.$x("//p [@id ='strikewise-iv-value']"))[0].getProperty('textContent')
    ).jsonValue();

    // ? parse value  value
    const strikeDecreVal = parseFloat(strdecre);

    console.log('        Strikewise Decrement Values : ', strikeDecreVal);

    // ? check strikewise decrement button
    if (strikeDecreVal !== strikeIncreVal) {
      // ? if condition passed
      const strikeReset = await clicking_Button(arg, "//p [@id ='iv-reset-btn']", '    Strikewise Reset');
      await hold(1000);
      // ? fetch strikewise reset value
      const strreset = await (
        await (await arg.$x("//p [@id ='strikewise-iv-value']"))[0].getProperty('textContent')
      ).jsonValue();

      // ? parse the value
      const strikeResetVal = parseFloat(strreset);

      // ? check strike wise value after reset values are same!
      if (strikeResetVal !== strikewiseVal) {
        console.log('        Strikewise Decrement Values : ', strikeResetVal);
      } else {
        // @ts-expect-error ! if not working
        await take_screenShot(arg, 'Strike Reset');
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
