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
    // document.querySelector('#atm-strike-index-ltp-CE-BUY')
  };
});
// ? fetch window object
// // const data = await arg.$eval('#atm-strike-index-ltp-CE-BUY', () => {
// //   const elements = document.body.getElementsByTagName("//div [@id ='atm-strike-index-ltp-CE-SELL']");

// //   return [...elements].map(element => {
// //     element.focus();
// //     return window.getComputedStyle(element).getPropertyValue('background-color ');
// //   });
// });
console.log('ssssssssssssssssssssssssssssssssssssssssssssssssssssssss', cnvNam);
ele = document.querySelector('#atm-strike-index-ltp-CE-BUY');
console.log('colorrrrrrrrrrrrrrrrrr ', window.getComputedStyle(ele).backgroundColor);
const element = await arg.$eval('#atm-strike-index-ltp-CE-BUY', el => {
  getComputedStyle(el).getPropertyValue('background-color');
});
console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', element);

console.log('aaabbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddd', obj);
