const { hold } = require('../../utils');
const { clickMultiple } = require('../Button');

/**
 *
 * @param {*} arg - page
 * @param {*} label - LTP, OI ,Greeks
 * @description - Trades
 */
const trades = async function (arg, label) {
  await hold(2000);
  // ? Fetch Div Container Length on Trades

  const tradesContainerLength = await (
    await (
      await (await arg.$x("//div [@id ='total-trades-list-container']"))[0].getProperty('children')
    ).getProperty('length')
  ).jsonValue();

  console.log(`        ${label} Trades Div Container Length : `, tradesContainerLength);

  function randomNum(div = tradesContainerLength) {
    const generate = Math.floor(Math.random() * div);
    return generate;
  }

  let storelength = new Array();
  // console.log('aaaaaaaaaaaaaaaa', storelength);

  do {
    storelength.push(randomNum());
    storelength = storelength.filter((item, index) => {
      return storelength.indexOf(item) === index;
    });
  } while (storelength.length < 10);

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

  // ! Minus Values
  const m1Ind = minus[0];
  const m2Ind = minus[1];
  const m3Ind = minus[2];
  const m4Ind = minus[3];
  const m5Ind = minus[4];

  // ! Plus
  const p1 = "//p [@id ='strategy-" + plus[0] + "-plusclick-btn']";
  const p2 = "//p [@id ='strategy-" + plus[1] + "-plusclick-btn']";
  const p3 = "//p [@id ='strategy-" + plus[2] + "-plusclick-btn']";
  const p4 = "//p [@id ='strategy-" + plus[3] + "-plusclick-btn']";
  const p5 = "//p [@id ='strategy-" + plus[4] + "-plusclick-btn']";

  // ! Plus Value
  const p1Ind = plus[0];
  const p2Ind = plus[1];
  const p3Ind = plus[2];
  const p4Ind = plus[3];
  const p5Ind = plus[4];

  // ? click Plus 1 button
  await clickMultiple(arg, p1);

  await hold(1000);
  const p_1 = await (
    await (await arg.$x("//p [@id ='strategy-valueid']"))[p1Ind].getProperty('textContent')
  ).jsonValue();

  const p1Values = parseInt(p_1);
  console.log(`        Trades Plus  1 Value : `, p1Values);

  // ? Click minus 1 button
  await clickMultiple(arg, m1);

  await hold(1000);
  const m_1 = await (
    await (await arg.$x("//p [@id ='strategy-valueid']"))[m1Ind].getProperty('textContent')
  ).jsonValue();

  const m1Values = parseInt(m_1);
  console.log(`        Trades Plus  1 Value : `, m1Values);

  // ? Click Plus 2 button
  await clickMultiple(arg, p2);
  await hold(1000);

  const p_2 = await (
    await (await arg.$x("//p [@id ='strategy-valueid']"))[p2Ind].getProperty('textContent')
  ).jsonValue();

  const p2Values = parseInt(p_2);
  console.log(`        Trades Plus  1 Value : `, p2Values);

  // ? Click minus 3 Button
  await clickMultiple(arg, m2);

  await hold(1000);
  const m_2 = await (
    await (await arg.$x("//p [@id ='strategy-valueid']"))[m2Ind].getProperty('textContent')
  ).jsonValue();

  const m2Values = parseInt(m_2);
  console.log(`        Trades Plus  1 Value : `, p2Values);
};

module.exports.trades = trades;
