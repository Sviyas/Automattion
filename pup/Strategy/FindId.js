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

// ? function for Color Fetch
// ? then click opposite site of button

const fetch_Color = async function (c1, c2, c3, c4, ag, id, label) {
  // ? set the default color values
  // ? blue
  const blueColor = 'rgb(15,194,192)';
  // ? red
  const redColor = 'rgb(253, 60, 82)';
  // ? white
  const whiteClor = 'rgb(255, 255, 255)';
};
