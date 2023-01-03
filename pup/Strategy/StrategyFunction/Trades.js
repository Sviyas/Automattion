const { hold, take_screenShot } = require('../../utils');
const { clickMultiple } = require('../ButtonFun');

/**
 *
 * @param {*} arg  page
 * @param {*} label  LTP, OI ,Greeks
 * @description  Trades
 */
const trades = async function (arg, label) {
  await hold(3000);
  // ? Fetch Div Container Length on Trades

  const tradesContainerLength = await (
    await (
      await (await arg.$x("//div [@id ='total-trades-list-container']"))[0].getProperty('children')
    ).getProperty('length')
  ).jsonValue();

  console.log(`        ${label} Trades Div Container Length : `, tradesContainerLength);

  // ! generating random number .based on containe length values

  function randomNum(div = tradesContainerLength) {
    const generate = Math.floor(Math.random() * div);
    return generate;
  }

  let storelength = new Array();

  do {
    storelength.push(randomNum());
    storelength = storelength.filter((item, index) => {
      return storelength.indexOf(item) === index;
    });
  } while (storelength.length < 10);

  // ! if more than 10 legs throw errror And Delete One Legs

  if (tradesContainerLength > 10) {
    await take_screenShot(arg, 'Trades Legs');

    console.log(`        You Added More Than 10 Legs ⚡`);

    const deleteLeg = await arg.$x("//span [contains(@id,'strategy-delele-btn')]");
    if (deleteLeg.length !== 0) {
      await deleteLeg[5].click();
    }
  }

  // ! Split Minus & Plus

  const minus = storelength.slice(0, 5);
  console.log(`        `, minus);

  const plus = storelength.slice(5, 10);
  console.log(`        `, plus);

  //  ! Minuse
  const m1 = "//p [@id ='strategy-" + minus[0] + "-minusclick-btn']";
  const m2 = "//p [@id ='strategy-" + minus[1] + "-minusclick-btn']";
  const m3 = "//p [@id ='strategy-" + minus[2] + "-minusclick-btn']";
  const m4 = "//p [@id ='strategy-" + minus[3] + "-minusclick-btn']";
  const m5 = "//p [@id ='strategy-" + minus[4] + "-minusclick-btn']";

  // ! Plus
  const p1 = "//p [@id ='strategy-" + plus[0] + "-plusclick-btn']";
  const p2 = "//p [@id ='strategy-" + plus[1] + "-plusclick-btn']";
  const p3 = "//p [@id ='strategy-" + plus[2] + "-plusclick-btn']";
  const p4 = "//p [@id ='strategy-" + plus[3] + "-plusclick-btn']";
  const p5 = "//p [@id ='strategy-" + plus[4] + "-plusclick-btn']";

  // ! Minus Values
  const m1Ind = minus[0];
  const m2Ind = minus[1];
  const m3Ind = minus[2];
  const m4Ind = minus[3];
  const m5Ind = minus[4];

  // ! Plus Value
  const p1Ind = plus[0];
  const p2Ind = plus[1];
  const p3Ind = plus[2];
  const p4Ind = plus[3];
  const p5Ind = plus[4];

  // ? click Plus button
  await clickMultiple(arg, p1);

  await hold(1000);
  const p_1 = await (
    await (await arg.$x("//p [@id ='strategy-valueid']"))[p1Ind].getProperty('textContent')
  ).jsonValue();

  const p1Values = parseInt(p_1);
  console.log(`        Trades Plus  1 Value : `, p1Values);

  await hold(1000);

  // ? Click minus  button
  await clickMultiple(arg, m1);

  await hold(1000);
  const m_1 = await (
    await (await arg.$x("//p [@id ='strategy-valueid']"))[m1Ind].getProperty('textContent')
  ).jsonValue();

  const m1Values = parseInt(m_1);
  console.log(`        Trades Minus  1 Value : `, m1Values);

  await hold(1000);

  // ? Click Plus 2 button
  await clickMultiple(arg, p2);
  await hold(1000);

  const p_2 = await (
    await (await arg.$x("//p [@id ='strategy-valueid']"))[p2Ind].getProperty('textContent')
  ).jsonValue();

  const p2Values = parseInt(p_2);
  console.log(`        Trades Plus  2 Value : `, p2Values);

  await hold(1000);

  // ? Click minus 2 Button
  await clickMultiple(arg, m2);

  await hold(1000);
  const m_2 = await (
    await (await arg.$x("//p [@id ='strategy-valueid']"))[m2Ind].getProperty('textContent')
  ).jsonValue();

  const m2Values = parseInt(m_2);
  console.log(`        Trades Minus  2 Value : `, m2Values);

  await hold(1000);

  // ? Click Plus 3 button
  await clickMultiple(arg, p3);

  await hold(1000);
  const p_3 = await (
    await (await arg.$x("//p [@id ='strategy-valueid']"))[p3Ind].getProperty('textContent')
  ).jsonValue();

  const p3Values = parseInt(p_3);
  console.log(`        Trades Plus  3 Value : `, p3Values);

  await hold(1000);

  // ? Click Minus 3 button
  await clickMultiple(arg, m3);

  await hold(1000);
  const m_3 = await (
    await (await arg.$x("//p [@id ='strategy-valueid']"))[m3Ind].getProperty('textContent')
  ).jsonValue();

  const m3Values = parseInt(m_3);
  console.log(`        Trades Minus 3 Value : `, m3Values);
  await hold(1000);

  // ? Click plus 4 button
  await clickMultiple(arg, p4);

  await hold(1000);
  const p_4 = await (
    await (await arg.$x("//p [@id ='strategy-valueid']"))[p4Ind].getProperty('textContent')
  ).jsonValue();

  const p4Values = parseInt(p_4);
  console.log(`        Trades Plus 4 Value : `, p4Values);
  await hold(1000);

  // ? Click minus 4 button
  await clickMultiple(arg, m4);

  await hold(1000);
  const m_4 = await (
    await (await arg.$x("//p [@id ='strategy-valueid']"))[m4Ind].getProperty('textContent')
  ).jsonValue();
  const m4Values = parseInt(m_4);
  console.log(`        Trades Minus 4 Value : `, m4Values);
  await hold(1000);

  // ? Click plus 5 button
  await clickMultiple(arg, p5);

  await hold(1000);
  const p_5 = await (
    await (await arg.$x("//p [@id ='strategy-valueid']"))[p5Ind].getProperty('textContent')
  ).jsonValue();
  const p5Values = parseInt(p_5);
  console.log(`        Trades Plus 5 Value : `, p5Values);
  await hold(1000);

  // ? Click minus 5 button
  await clickMultiple(arg, m5);

  await hold(1000);
  const m_5 = await (
    await (await arg.$x("//p [@id ='strategy-valueid']"))[m5Ind].getProperty('textContent')
  ).jsonValue();
  const m5Values = parseInt(m_5);
  console.log(`        Trades Minus 5 Value : `, m5Values);
  await hold(1000);
};

module.exports.trades = trades;
