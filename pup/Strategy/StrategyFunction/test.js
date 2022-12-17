// ? fetch the colors for edit / add function

var color;

color = async function (c1, c2, c3, c4) {
  const color_Value = [c1, c2, c3, c4];
  return color_Value;
};

const value = color('rgb(15, 194, 192)', 'rgb(255, 255, 255)', 'rgb(255, 255, 255)', 'rgb(255, 255, 255)');

console.log(value);
console.log(JSON.stringify(value[0]));
console.log(JSON.stringify(value[1]));
console.log(JSON.stringify(value[2]));
console.log(JSON.stringify(value[3]));
