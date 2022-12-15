// ? fetch the id colors
const rgb2hex = rgb =>
  `#${rgb
    .match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
    .slice(1)
    .map(n => parseInt(n, 10).toString(16).padStart(2, '0'))
    .join('')}`;

const value = rgb2hex('rgb(15,194,192)').toString().toLowerCase();

console.log(value);
