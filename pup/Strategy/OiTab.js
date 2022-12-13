const { hold, take_screenShot } = require('../utils');
const { clicking_Button } = require('./Button');

const OITab = async function (ag, id, label) {
  // ? Oi page

  const OI = await clicking_Button(ag, id, label);

  if (OI) {
    // ? hold
    await hold(1000);
    // ? add one OI leg put buy
    const oiPutSell = await clicking_Button(ag, "//div [@id ='atm-strike-index-oi-PE-BUY']", '    OI Put Sell');

    if (oiPutSell) {
      // ? condition passed
      // ? remove one call sell
      const ltpRemove = await clicking_Button(ag, "//div [@id ='atm-strike-index-oi-CE-SELL']", '    Ltp buy remove');

      if (ltpRemove) {
        // ? condition passed
        await hold(1000);

        const done = await clicking_Button(ag, "//button [@id ='stratrgy-done-btn']", '    OI Done');

        if (done) {
          // ? condition passed
          await hold(1000);

          // ? Click to check OI Nifty Target Buttons

          const prolos = await (
            await (await ag.$x("//h3[@id ='Profit-Loss-value']"))[0].getProperty('textContent')
          ).jsonValue();

          // ? parse Value
          const profitLoss = parseInt(prolos);

          console.log('        ✅ Oi  NIFTY TARGET');
          console.log('        OI profti loss Value : ', profitLoss);

          // ? click first nifty Target Values

          const nifty_Decre = await clicking_Button(
            ag,
            "//button[@id = 'target-subraction-btn']",
            '    OI Nifty Decrement'
          );

          if (nifty_Decre) {
            // ? hold
            await hold(1000);
            // ? nifty decrement button clicking
            const decrement = await (
              await (await ag.$x("//h3[@id ='Profit-Loss-value']"))[0].getProperty('textContent')
            ).jsonValue();
            const decrementValue = parseInt(decrement);
            console.log('        OI Nifty Decrement Values : ', decrementValue);

            //  ? conditionaly check button is working or not
            if (profitLoss === decrementValue) {
              // ! decrement button not working
              await hold(1000);
              await take_screenShot(ag, 'OI Decrement Button');
            } else {
              // ? Clicking Nifty Increment button
              const nift_Incre = await clicking_Button(
                ag,
                "//button [@id = 'target-addition-btn']",
                '    OI Nifty Increment'
              );

              if (nift_Incre) {
                // ? hold
                await hold(1000);
                const increment = await (
                  await (await ag.$x("//h3[@id ='Profit-Loss-value']"))[0].getProperty('textContent')
                ).jsonValue();

                const incrementValue = parseInt(increment);

                if (decrementValue === incrementValue) {
                  // ! Increment button not working
                  await hold(1000);
                  await take_screenShot(ag, 'OI Nifty Increment Button');
                } else {
                  console.log('        OI Nifty Increment Values : ', incrementValue);
                }
              }

              // ? click Reset button
              const nifty_Reset = await clicking_Button(ag, "//p[@id = 'target-reset-btn']", '    OI Nifty Reset');

              if (nifty_Reset) {
                // ? hold
                await hold(1000);
                // ?
                const reset = await (
                  await (await ag.$x("//h3[@id ='Profit-Loss-value']"))[0].getProperty('textContent')
                ).jsonValue();

                const resetValue = parseInt(reset);

                // ? check reset button working or not
                if (profitLoss === resetValue) {
                  console.log('        OI Nifty Reset Values : ', resetValue);
                  await hold(1000);
                } else {
                  // ! reset button  not working
                  await hold(1000);
                  await take_screenShot(ag, 'OI Nifty Reset button');
                }
              }
            }
          }

          // ?   check expiry
          // ? Expiry Date Button click
          console.log('        OI ✅ EXPIRY TARGET');

          await hold(1000);
          // ?  fetch expiry date profit loss values
          const expProfit = await (
            await (await ag.$x("//h3[@id ='Profit-Loss-value']"))[0].getProperty('textContent')
          ).jsonValue();

          const expProftitValue = parseInt(expProfit);

          console.log('        OI Expiry Profit Values : ', expProftitValue);

          // ? fetch expiry Date
          const expDate = await (
            await (await ag.$x("//p [@id ='expiry-value']"))[0].getProperty('textContent')
          ).jsonValue();

          console.log('        OI Expiry Date : ', expDate);

          // ? expiry forward date
          const expInc = await clicking_Button(
            ag,
            "//button [@id ='expiry-move-backword-btn']",
            '    OI Expiry Forward'
          );

          if (expInc) {
            await hold(1000);
            // ? fetch forward date value
            const forwardDate = await (
              await (await ag.$x("//p [@id ='expiry-value']"))[0].getProperty('textContent')
            ).jsonValue();

            console.log('        OI Expiry Forward Date : ', forwardDate);
            // ? fetch forward date profit loss values
            const profitDateInc = await (
              await (await ag.$x("//h3[@id ='Profit-Loss-value']"))[0].getProperty('textContent')
            ).jsonValue();

            const profitDateIncVal = parseInt(profitDateInc);

            console.log('        OI Expiry Forward Date Profit Loss Value : ', profitDateIncVal);

            // ? check today is expiry or not
            // ? if values are equal check date ? equal or not
            const options = { weekday: 'long' };

            const currentDate = new Date();

            const checkDateValue = currentDate.toLocaleDateString('en-US', options);

            // ? if expiry stop the process..... or not continue to check the process
            if ('Thursday' === checkDateValue) {
              console.log('        OI Today is Expiry Date');
            } else if (expProftitValue !== profitDateIncVal) {
              // ? click Decrement button
              const expDec = await clicking_Button(
                ag,
                "//button [@id ='expiry-move-forword-btn']",
                '    OI Expiry Backward'
              );

              if (expDec) {
                // ? hold and fetch values
                await hold(1000);
                const backwardDate = await (
                  await (await ag.$x("//p [@id ='expiry-value']"))[0].getProperty('textContent')
                ).jsonValue();

                console.log('        OI Expiry backward Date : ', backwardDate);

                const profitDateDec = await (
                  await (await ag.$x("//h3[@id ='Profit-Loss-value']"))[0].getProperty('textContent')
                ).jsonValue();

                const profitDateDecVal = parseInt(profitDateDec);

                console.log('        OI Expiry backward Date Profit Loss Value : ', profitDateDecVal);

                if (profitDateIncVal === profitDateDecVal) {
                  // ! backward button
                  await hold(1000);
                  await take_screenShot(ag, 'OI Expiry Backward');
                } else {
                  // ? click Reset button

                  const expReset = await clicking_Button(
                    ag,
                    "//p [@id ='expiry-target-reset-btn']",
                    '    OI Expiry Reset'
                  );

                  if (expReset) {
                    // ? hold & fetch values
                    await hold(1000);
                    const profitDateReset = await (
                      await (await ag.$x("//h3[@id ='Profit-Loss-value']"))[0].getProperty('textContent')
                    ).jsonValue();

                    const profitDateResetVal = parseInt(profitDateReset);

                    if (profitDateResetVal !== expProftitValue) {
                      // ! expiry Reset
                      await hold(1000);
                      await take_screenShot(ag, 'OI Expiry Reset');
                    } else {
                      console.log('        OI Expiry Reset Profit Loss Value : ', profitDateResetVal);
                    }
                  }
                }
              }
            } else if (expProftitValue === profitDateIncVal) {
              // ! expiry forward button
              await hold(1000);
              await take_screenShot(ag, 'OI Expiry Forward');
            }
          } //
        } else {
          // @ts-expect-error
          await hold(1000);
          await take_screenShot(ag, 'OI Done');
        }

        // ?
        // ? clck strike wise IV butotn
        console.log('        ✅ OI STRIKEWISE IVs');

        await hold(1000);
        // ?
        // ? fetch strike wise values
        const strikewise = await (
          await (await ag.$x("//p [@id ='strikewise-iv-value']"))[0].getProperty('textContent')
        ).jsonValue();

        // ? parse value
        const strikewiseVal = parseFloat(strikewise);

        console.log('        OI StrikeWise Values : ', strikewiseVal);

        const strikeInc = await clicking_Button(ag, "//p [@id ='0-plusclick-btn']", '    OI Strikewise Increment');
        if (strikeInc) {
          await hold(1000);
          // ?
          const strikewiseInc = await (
            await (await ag.$x("//p [@id ='strikewise-iv-value']"))[0].getProperty('textContent')
          ).jsonValue();

          // ? parse value
          const strikewiseIncVal = parseFloat(strikewiseInc);

          console.log('        OI StrikeWise Increment Values : ', strikewiseIncVal);

          if (strikewiseIncVal !== strikewiseVal) {
            //  ? condition passed

            // ? click decrement button on strikewise
            const strikeDec = await clicking_Button(ag, "//p [@id ='0-minusclick-btn']", '    OI Strikewise Decrement');

            if (strikeDec) {
              await hold(1000);
              // ?
              const strikewiseDec = await (
                await (await ag.$x("//p [@id ='strikewise-iv-value']"))[0].getProperty('textContent')
              ).jsonValue();

              // ? parse value
              const strikewiseDecVal = parseFloat(strikewiseDec);

              console.log('        OI StrikeWise Decrement Values : ', strikewiseDecVal);

              if (strikewiseDecVal !== strikewiseIncVal) {
                // ? strike Reset
                const strikereset = await clicking_Button(ag, "//p [@id ='iv-reset-btn']", '    OI Strikewise Reset');

                if (strikereset) {
                  await hold(1000);
                  // ? fetch values
                  const strikewiseReset = await (
                    await (await ag.$x("//p [@id ='strikewise-iv-value']"))[0].getProperty('textContent')
                  ).jsonValue();

                  // ? parse value
                  const strikewiseResetVal = parseFloat(strikewiseReset);

                  if (strikewiseResetVal !== strikewiseVal) {
                    console.log('        OI StrikeWise Reset Values : ', strikewiseResetVal);

                    // ? again open click edit add  to choose next function
                    const EDIT = await clicking_Button(
                      ag,
                      "//button [contains(text(), 'EDIT/ADD')]",
                      '    OI EDIT ADD'
                    );

                    if (EDIT) {
                      console.log('        Navigate to Greeks Tab');
                      // ? hold to continue next function
                      await hold(1000);
                    } else {
                      // @ edit add
                      await hold(1000);
                      await take_screenShot(ag, 'OI Edit');
                    }
                  } else {
                    // @ strike wise Reset
                    await hold(1000);
                    await take_screenShot(ag, 'OI Strike Reset');
                  }
                }
              } else {
                // @ strike wise decrement
                await hold(1000);
                await take_screenShot(ag, 'OI Strike Decrement');
              }
            }
          } else {
            // ! Strikewise increment
            await hold(1000);
            await take_screenShot(ag, 'OI Strikewise Increment');
          }
        }
      } else {
        // @ts-expect-error
        await hold(1000);
        await take_screenShot(ag, 'LTP Call Buy');
      }
    } else {
      // @ts-expect-error
      await hold(1000);
      await take_screenShot(ag, 'OI Put buy');
    }
  } else {
    // @ts-expect-error
    await hold(1000);
    await take_screenShot(ag, label);
  }
};

module.exports.OITab = OITab;
