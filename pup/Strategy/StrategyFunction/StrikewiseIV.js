const { take_screenShot, hold } = require('../../utils');
const { clicking_Button } = require('../ButtonFun');

/**
 *
 * @param {arg} page - Page
 * @param {*} id1 Increment button
 * @param {*} id2  Decrement button
 * @param {*} label like < LTP, OI , Greeks >
 */
const strikewise_fun = async function (arg, id1, id2, label) {
  await hold(2000);
  console.log(`        ${label} ✅ Strikewise IV`);

  // ? Fetch  div container length
  const divContainer = await (
    await (await (await arg.$x("//div [@id ='strikewise-iv-id']"))[0].getProperty('children')).getProperty('length')
  ).jsonValue();

  const divlength = divContainer - 1;

  console.log(`        ${label} Div Container Length : `, divlength);

  // ! fetch strikewise zero-index function

  const strikewise = await (await (await arg.$x("//p [@id ='-valueid']"))[0].getProperty('textContent')).jsonValue();

  const strikewiseVal = parseFloat(strikewise);

  console.log(`        ${label} Strikewise Values 1️⃣  : `, strikewiseVal);

  // ? click strikwise increment

  const strikeIncrement = await clicking_Button(arg, id1, `    ${label} Strike Increment`);
  await hold(2000);

  // ? fetch increment values

  const strincre = await (await (await arg.$x("//p [@id ='-valueid']"))[0].getProperty('textContent')).jsonValue();

  const strikeIncreVal = parseFloat(strincre);
  console.log(`        ${label} Strikewise Increment Values : `, strikeIncreVal);

  // ? check  incremnt button
  if (strikeIncreVal !== strikewiseVal) {
    // ? click Decrement button

    const strikeDecrement = await clicking_Button(arg, id2, `    ${label} Strike Decrement`);
    await hold(2000);

    // ? fetch Decremnt Value
    const strdecre = await (await (await arg.$x("//p [@id ='-valueid']"))[0].getProperty('textContent')).jsonValue();

    const strikeDecreVal = parseFloat(strdecre);

    // ? check  decrement button
    if (strikeDecreVal !== strikeIncreVal) {
      console.log(`        ${label} Strikewise Decrement Values : `, strikeDecreVal);
    } else {
      // @ts-expect-error ! if decrement and increment value same
      await take_screenShot(arg, 'Strike Decrement');
    }
  } else {
    // @ts-expect-error ! if increment and strikewise value same
    await take_screenShot(arg, 'Strike Increment');
  }

  // ! Stirke wise nth-index function

  // ? fetch nth strikewise values
  const nthstrikewise = await (
    await (await arg.$x("//p [@id ='-valueid']"))[divlength].getProperty('textContent')
  ).jsonValue();

  const nthstrikeval = parseFloat(nthstrikewise);

  console.log(`        ${label} Strikewise value 2️⃣  : `, nthstrikeval);

  // ? click nth strike wise iv increment button
  const incre = "//p [@id = '" + divlength + "-plusclick-btn']";

  const nthstrikeinc = await clicking_Button(arg, incre, `    ${divlength} Strike Increment`);

  await hold(1000);

  const nthincre = await (
    await (await arg.$x("//p [@id ='-valueid']"))[divlength].getProperty('textContent')
  ).jsonValue();

  const nthincreVal = parseFloat(nthincre);

  console.log(`        ${label} ${divlength}  Strikewise Increment Values : `, nthincreVal);
  await hold(1000);

  // ? check nth strikewise value and increment value

  if (nthincreVal !== nthstrikeval) {
    // ? click Strike Wise nth Decrement
    const decre = "//p [@id = '" + divlength + "-minusclick-btn']";

    const nthstrikedecre = await clicking_Button(arg, decre, `    ${divlength} Strike Decrement`);
    await hold(1000);

    const nthdecre = await (
      await (await arg.$x("//p [@id ='-valueid']"))[divlength].getProperty('textContent')
    ).jsonValue();

    const nthdecreVal = parseFloat(nthdecre);

    // ? check nth strikewise increment and decrement values not same

    if (nthdecreVal !== nthincreVal) {
      console.log(`        ${label} ${divlength}  Strikewise Decrement Values : `, nthdecreVal);
    } else {
      // @ts-expect-error : if decrement and increment value same
      await take_screenShot(arg, `${divlength} strike decrement`);
    }
  } else {
    // @ts-expect-error : if incrment and strikewise value same
    await take_screenShot(arg, `${divlength} strike increment`);
  }

  // ! Strike wise Reset function

  const strikeReset = await clicking_Button(arg, "//p [@id ='iv-reset-btn']", `    ${label} Strike Reset`);
  await hold(2000);

  const strreset = await (await (await arg.$x("//p [@id ='-valueid']"))[0].getProperty('textContent')).jsonValue();

  const strikeResetVal = parseFloat(strreset);

  const strnthrest = await (
    await (await arg.$x("//p [@id ='-valueid']"))[divlength].getProperty('textContent')
  ).jsonValue();

  const strnthResetVal = parseFloat(strnthrest);

  // ? message log
  switch (true) {
    case divlength === 1:
      console.log(
        `        ${label} ${divlength} st Strikewise Reseted Values : ${strikeResetVal} and ${strnthResetVal}`
      );
      break;
    case divlength === 2:
      console.log(
        `        ${label} ${divlength} nd Strikewise Reseted Values : ${strikeResetVal} and ${strnthResetVal}`
      );
      break;
    case divlength === 3:
      console.log(`        ${label} ${divlength} rd Strikewise Reset Values : ${strikeResetVal} and ${strnthResetVal}`);
      break;
    default:
      divlength >= 4;
      console.log(`        ${label} ${divlength}th Strikewise Reset Values : ${strikeResetVal} and ${strnthResetVal}`);
  }

  // ? check Reset values not same
  // ! changes need wait api integration

  if ((strikeResetVal && strnthResetVal) === (strikewiseVal && nthstrikeval)) {
    // ? if value not same buttton & data is working perfect
    console.log('        Reset Successfully 🤝 ');
  } else {
    // @ts-expect-error if values are same not working or data loading problem
    // await take_screenShot(arg, `${label} Strike Reset`);
    console.log('        ☠️ ☠️   Strike wise IV Values Not Change ☠️ ☠️');
  }
};

module.exports.strikewise_fun = strikewise_fun;
