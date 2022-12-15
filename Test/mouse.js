// ? if values are equal check date ? equal or not
const options = { weekday: 'long' };

const currentDate = new Date();

const checkDateValue = currentDate.toLocaleDateString('en-US', options);

// ? check its Thursday or not
if (checkDateValue === 'Thursday') {
  console.log('        Today is Expiry');

  if (checkDateValue !== 'Thursday') {
    console.log('        Date Loading Problem');
  }
} else {
  // ! expiry forward
  await hold(1000);
  await take_screenShot(arg, 'Expiry Forward');
  // ? or date loading problem
}

// http://localhost:3000/broker/login
