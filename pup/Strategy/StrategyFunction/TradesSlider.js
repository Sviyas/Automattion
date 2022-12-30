const { hold } = require('../../utils');
const { clicking_Button } = require('../Button');

/**
 *
 * @param {*} arg - Page
 * @description - Click Trades Slider Button
 */

const tradesSlider = async function (arg) {
  await hold(2000);

  // ? Fetch Div Container length
  const tradesDivContainer = await (
    await (await (await arg.$x("//div [@id ='slider_div_container']"))[0].getProperty('children')).getProperty('length')
  ).jsonValue();

  const divContainerlength = parseInt(tradesDivContainer);
  console.log('        ', divContainerlength);

  // ! Generate Random Number using divlength -  10 times

  function RandomNum(leng = divContainerlength) {
    // ? Generate Random
    const generate = Math.floor(Math.random() * leng);
    return generate;
  }

  // ? Loop RandomNum 10 times
  const storelength = new Array();
  for (let i = 0; i < 7; i++) {
    storelength[i] = RandomNum();
  }

  // ? Split into CALL & PUT

  const CALL = storelength.slice(0, 4);
  console.log('        ', CALL);
  const PUT = storelength.slice(4, 7);
  console.log('        ', PUT);

  //  ? CALL
  const c1 = "//div [@id ='" + CALL[0] + "-ltp-CE-BUY']";

  const c2 = "//div [@id ='" + CALL[1] + "-ltp-CE-SELL']";

  const c3 = "//div [@id ='" + CALL[2] + "-ltp-CE-BUY']";

  const c4 = "//div [@id ='" + CALL[3] + "-ltp-CE-SELL']";

  // ? PUT
  const p1 = "//div [@id ='" + PUT[0] + "-ltp-PE-BUY']";

  const p2 = "//div [@id ='" + PUT[1] + "-ltp-PE-SELL']";

  const p3 = "//div [@id ='" + PUT[2] + "-ltp-PE-BUY']";

  if (CALL && PUT) {
    await hold(1000);
    const call_1 = await clicking_Button(arg, c1, '    CE-BUY');

    await hold(1000);
    const call_2 = await clicking_Button(arg, c2, '    CE-SELL');

    await hold(1000);
    const call_3 = await clicking_Button(arg, c3, '    CE-BUY');

    await hold(1000);
    const call_4 = await clicking_Button(arg, c4, '    CE-SELL');

    await hold(1000);
    const put_1 = await clicking_Button(arg, p1, '    PE-BUY');

    await hold(1000);
    const put_2 = await clicking_Button(arg, p2, '    PE-SELL');

    await hold(1000);
    const put_3 = await clicking_Button(arg, p3, '    PE-BUY');

    if (put_3) {
      const sliderViewCheck = await clicking_Button(
        arg,
        "//div [contains(text(),'Add Morethan 10 Legs')]",
        '    Legs Check'
      );

      if (sliderViewCheck) {
        console.log('        You Try To Add More Then 10 Legs');
      }
    }

    // const sliderview =
    // if (sliderview) {
    //   console.log('        You try add more than 10 legs !!!');
    // } else {
    //   console.log('        Continue');
    // }
  }
};

module.exports.tradesSlider = tradesSlider;
