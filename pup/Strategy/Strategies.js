const { hold, take_screenShot } = require('../utils');
const { clicking_Button } = require('./Button');

const Strategies = async function (arg, id, label) {
  const strategy = await clicking_Button(arg, id, label);

  if (strategy) {
    console.log(`     👍  ${label} Button `);
    // ? hold
    await hold(1000);

    // ? fetch Profit loss Values
    const prolos = await (
      await (await arg.$x("//h3[@id ='Profit-Loss-value']"))[0].getProperty('textContent')
    ).jsonValue();

    // ? parse Value
    const profitLoss = parseInt(prolos);

    console.log('    ✅ Edit / Add');
    console.log('    profti loss Value : ', profitLoss);

    // ? click first nifty Target Values
  } else {
    await hold(1000);
    await take_screenShot(arg, label);
  }
};

module.exports.Strategies = Strategies;
