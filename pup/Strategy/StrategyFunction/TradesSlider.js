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
  console.log('🚀 ~ file: Trades.js:16 ~ tradesFun ~ divContainerlength', divContainerlength);

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
  console.log('🚀 ~ file: Trades.js:38 ~ tradesFun ~ CALL', CALL);
  const PUT = storelength.slice(5, 10);
  console.log('🚀 ~ file: Trades.js:40 ~ tradesFun ~ PUT', PUT);

  if (CALL) {
    await hold(1000);
    const bt1 = '"//div [@id = \'' + CALL[0] + '-ltp-CE-BUY\']"';
    console.log(bt1);

    // if (bt1) {
    await clicking_Button(arg, bt1, '    CE-BUY-Button');
    console.log('hey hello excuse mee mister ');
    // }
  }
};

module.exports.tradesSlider = tradesSlider;
