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
  // console.log('🚀 ~ file: Trades.js:16 ~ tradesFun ~ divContainerlength', divContainerlength);

  // ! Generate Random Number using divlength -  10 times

  function RandomNum(leng = divContainerlength) {
    // ? Generate Random
    const generate = Math.floor(Math.random() * leng);
    return generate;
  }

  // ? Loop RandomNum 10 times
  const storelength = new Array();
  for (let i = 0; i < 10; i++) {
    storelength[i] = RandomNum();
  }

  // ? Split into CALL & PUT

  const CALL = storelength.slice(0, 5);
  // console.log('🚀 ~ file: Trades.js:38 ~ tradesFun ~ CALL', CALL);
  const PUT = storelength.slice(5, 10);
  // console.log('🚀 ~ file: Trades.js:40 ~ tradesFun ~ PUT', PUT);

  if (CALL) {
    // await hold(1000);
    const c1 = "//div [@id ='" + CALL[0] + "-ltp-CE-BUY']";

    const c2 = "//div [@id ='" + CALL[1] + "-ltp-CE-SELL']";
    const c3 = "//div [@id ='" + CALL[2] + "-ltp-CE-BUY']";
    const c4 = "//div [@id ='" + CALL[3] + "-ltp-CE-SELL']";
    const c5 = "//div [@id ='" + CALL[4] + "-ltp-CE-BUY']";

    await hold(1000);

    const call_1 = await clicking_Button(arg, c1, '    CE-BUY');

    if (call_1) {
      await hold(1000);
      const call_2 = await clicking_Button(arg, c2, '    CE-SELL Button');
      if (call_2) {
        await hold(1000);
        const call_3 = await clicking_Button(arg, c3, '    CE-BUY Button');
        if (call_3) {
          await hold(1000);
          const call_4 = await clicking_Button(arg, c4, '    CE-SELL Button');
          if (call_4) {
            await hold(1000);
            const call_5 = await clicking_Button(arg, c5, '    CE-BUY Button');
            if (call_5) {
              console.log('button  clicked pa');
            } else {
              console.log('button not clicked pa');
            }
          } else {
            console.log('button not clicked pa');
          }
        } else {
          console.log('button not clicked pa');
        }
      } else {
        console.log('button not clicked pa');
      }
    } else {
      console.log('button not clicked pa');
    }
  }

  // ? PUT
  if (PUT) {
    const p1 = "//div [@id ='" + CALL[0] + "-ltp-CE-BUY']";
    const p2 = "//div [@id ='" + CALL[1] + "-ltp-CE-SELL']";
    const p3 = "//div [@id ='" + CALL[2] + "-ltp-CE-BUY']";
    const p4 = "//div [@id ='" + CALL[3] + "-ltp-CE-SELL']";
    const p5 = "//div [@id ='" + CALL[4] + "-ltp-CE-BUY']";

    // ?
    // await hold(1000);

    // const put_1 = await clicking_Button(arg, p1, '    ');
    // if (put_1) {
    // aw
    // }
  }
};

module.exports.tradesSlider = tradesSlider;
