// ? blue
const blueColor = 'rgb(15,194,192)';
// ? red
const redColor = 'rgb(253, 60, 82)';
// ? white
const whiteClor = 'rgb(255, 255, 255)';

// console.log([blueColor, redColor, whiteClor]);
// ? blue color
const bluColor = await arg.$eval('#atm-strike-index-ltp-CE-BUY', n =>
  JSON.parse(JSON.stringify(getComputedStyle(n).backgroundColor))
);

console.log('        👍 blue Color  : ', JSON.stringify(blueColor));

const redolor = await arg.$eval('#atm-strike-index-ltp-CE-SELL', n =>
  JSON.parse(JSON.stringify(getComputedStyle(n).backgroundColor))
);

console.log('        👍 red Color  : ', JSON.stringify(redColor));

await hold(1000);
// ? white color
const whiteColor = await arg.$eval('#atm-strike-index-ltp-PE-BUY', n =>
  JSON.parse(JSON.stringify(getComputedStyle(n).backgroundColor))
);

console.log('        👍 white Color :', JSON.stringify(whiteColor));
