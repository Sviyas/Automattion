const { hold } = require('../../utils');
const { clicking_Button } = require('../ButtonFun');

/**
 *
 * @param {*} arg - Page
 * @param {*} strategy - strategy Name
 * @param {*} label - <Ltp,Oi,Greeks>
 * @description - Click Trades Slider
 */

const tradesSlider = async function (arg, strategy, label) {
  await hold(3000);

  //                    ? Fetch Div Container length
  const divContainerlength = await (
    await (await (await arg.$x("//div [@id ='slider_div_container']"))[0].getProperty('children')).getProperty('length')
  ).jsonValue();

  // const divContainerlength = parseInt(tradesDivContainer);
  console.log(`        ${label} Slider Div Container Length : `, divContainerlength);

  //                    ! Generate Random Number using divlength ->  10 times

  function RandomNum(leng = divContainerlength) {
    const generate = Math.floor(Math.random() * leng);
    return generate;
  }

  let storelength = new Array();

  do {
    storelength.push(RandomNum());
    storelength = storelength.filter((item, index) => {
      return storelength.indexOf(item) === index;
    });
  } while (storelength.length < 10);

  // ? Split into CALL & PUT
  const CALL = storelength.slice(0, 5);
  console.log(`        `, CALL);
  const PUT = storelength.slice(5, 10);
  console.log(`        `, PUT);

  //  ? CALL
  const c1 = "//div [@id ='" + CALL[0] + label + "-CE-BUY']";

  const c2 = "//div [@id ='" + CALL[1] + label + "-CE-SELL']";

  const c3 = "//div [@id ='" + CALL[2] + label + "-CE-BUY']";

  const c4 = "//div [@id ='" + CALL[3] + label + "-CE-SELL']";

  const c5 = "//div [@id ='" + CALL[4] + label + "-CE-BUY']";

  // ? PUT
  const p1 = "//div [@id ='" + PUT[0] + label + "-PE-BUY']";

  const p2 = "//div [@id ='" + PUT[1] + label + "-PE-SELL']";

  const p3 = "//div [@id ='" + PUT[2] + label + "-PE-BUY']";

  const p4 = "//div [@id ='" + PUT[3] + label + "-PE-SELL']";

  const p5 = "//div [@id ='" + PUT[4] + label + "-PE-BUY']";

  // ? Check Strategy Wise Choose legs

  if (
    strategy === '    Long Call' ||
    '    Short Call' ||
    '    Long Put' ||
    '    Short Put' ||
    '    Bull Call Spread' ||
    '    Bear Call Spread' ||
    '    Bull Put Spread' ||
    '    Bear Put Spread' ||
    '    Long Straddle' ||
    '    Short Straddle' ||
    '    Long Strangle' ||
    '    Short Strangle' ||
    '    Long Iron Condor' ||
    '    Short Iron Condor' ||
    '    Long Put Butterfly' ||
    '    Short Put Butterfly' ||
    '    Long Call Butterfly' ||
    '    Short Call Butterfly'
  ) {
    await hold(2000);
    const call_1 = await clicking_Button(arg, c1, `    ${label} CE-BUY Button 1`);

    await hold(2000);
    const put_1 = await clicking_Button(arg, p1, `    ${label} PE-BUY Button 2`);

    await hold(2000);
    const call_2 = await clicking_Button(arg, c2, `    ${label} CE-SELL Button 3`);

    await hold(2000);
    const put_2 = await clicking_Button(arg, p2, `    ${label} PE-SELL Button 4`);

    await hold(2000);
    const call_3 = await clicking_Button(arg, c3, `    ${label} CE-BUY Button 5`);

    await hold(2000);
    const put_3 = await clicking_Button(arg, p3, `    ${label} PE-BUY Button 6`);

    await hold(2000);
    const call_4 = await clicking_Button(arg, c4, `    ${label} CE-SELL Button 7`);

    await hold(2000);
    const put_4 = await clicking_Button(arg, p4, `    ${label} PE-SELL Button 8`);

    switch (label) {
      case `-oi`:
      case `-greeks`:
        await hold(2000);
        const call_5 = await clicking_Button(arg, c5, `    ${label} CE-BUY Button 9`);

        await hold(2000);
        const put_5 = await clicking_Button(arg, p5, `    ${label} PE-BUY Button 10`);
        console.log(`        Slider Function Finished 🫡`);
        break;

      default:
        const sliderViewCheck = await clicking_Button(
          arg,
          "//div [contains(text(),'Add Morethan 10 Legs')]",
          `    Check Legs`
        );

        if (sliderViewCheck.length !== 0) {
          console.log(`        You Try To Add More Then 10 Legs 🏁`);
        } else {
          console.log(`        Slider Function Finished 🫡`);
        }
    }
  }
};

module.exports.tradesSlider = tradesSlider;
