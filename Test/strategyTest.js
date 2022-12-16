// ?  fetch strategy leg colors   await arg.$x("//div [@id ='atm-strike-index-ltp-CE-BUY']");

console.log('aaabbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddd', obj);

await page.evaluate(() => {
  return {
    // documentquerySelector('#atm-strike-index-ltp-CE-BUY')
  };
});
// ele = document.querySelector('#atm-strike-index-ltp-CE-BUY');
// console.log('colorrrrrrrrrrrrrrrrrr ', window.getComputedStyle(ele).backgroundColor);
// const element = await arg.$eval('#atm-strike-index-ltp-CE-BUY', el => {
//   getComputedStyle(el).getPropertyValue('background-color');
// });

// ? fetch rgb values
const srcStyles = await arg.$eval('#atm-strike-index-ltp-CE-BUY', n =>
  JSON.parse(JSON.stringify(getComputedStyle(n).backgroundColor))
);
// ? document
await page.evaluate(() => {
  return {
    // document.querySelector('#atm-strike-index-ltp-CE-BUY') ? get style value
  };
});
// ? fetch window object
// const data = await arg.$eval('#atm-strike-index-ltp-CE-BUY', () => {

// });
console.log('ssssssssssssssssssssssssssssssssssssssssssssssssssssssss', cnvNam);
ele = document.querySelector('#atm-strike-index-ltp-CE-BUY');
console.log('colorrrrrrrrrrrrrrrrrr ', window.getComputedStyle(ele).backgroundColor);
// const element = await arg.$eval('#atm-strike-index-ltp-CE-BUY', el => {
//   getComputedStyle(el).getPropertyValue('background-color');
// });
// console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', element);

// console.log('aaabbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddd', obj);

// ? fetch element id
const elemetnID = await arg.$$eval('[id^="slider_div_container"]', elms => elms.map(elm => elm.elemetnID));
console.log('🚀 ~ file: Strategies.js:47 ~ Strategies ~ elemetnID', elemetnID);

// ? fetch all data stylles
const srcSles = await arg.$eval('#slider_div_container', n =>
  JSON.parse(JSON.stringify(getComputedStyle(n).backgroundColor))
);

console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', srcSles);
//
// ? fetch the  colors Code
const fetchColorCode = rgb =>
  `#${rgb
    .match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
    .slice(1)
    .map(n => parseInt(n, 10).toString(16).padStart(2, '0'))
    .join('')}`;
