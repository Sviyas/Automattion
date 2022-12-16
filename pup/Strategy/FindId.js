// ? fetch the  colors Code
const fetchColorCode = rgb =>
  `#${rgb
    .match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
    .slice(1)
    .map(n => parseInt(n, 10).toString(16).padStart(2, '0'))
    .join('')}`;
// ? blue
// const blueColor = fetchColorCode('rgb(15,194,192)').toString();
// ? red
// const redColor = fetchColorCode('rgb(253, 60, 82)').toString();
// ? white
// const whiteClor = fetchColorCode('rgb(255, 255, 255)').toString();

// console.log([blueColor, redColor, whiteClor]);

const RED_COLOR = '';
