const { hold, take_screenShot } = require('../utils');
const { clicking_Button } = require('./Button');

const greeksTab = async function (ag, id, label) {
  // ? Greeks page

  const Greeks = await clicking_Button(ag, id, label);

  if (Greeks) {
    // ? hold
    await hold(1000);
    // ? add one Greeks leg put buy
    const GreeksPutSell = await clicking_Button(
      ag,
      "//div [@id ='atm-strike-index-greeks-PE-SELL']",
      '    Greeks Put Sell'
    );

    if (GreeksPutSell) {
      // ? condition passed
      // ? check functions
      await hold(1000);

      const done = await clicking_Button(ag, "//button [@id ='stratrgy-done-btn']", '    Greeks Done');

      if (done) {
        // ? condition passed
        await hold(2000);

        // ? Click to check Greeks Nifty Target Buttons

        const prolos = await (
          await (await ag.$x("//h3[@id ='Profit-Loss-value']"))[0].getProperty('textContent')
        ).jsonValue();

        // ? parse Value
        const profitLoss = parseInt(prolos);

        console.log('        ✅ Greeks  NIFTY TARGET');
        console.log('        Greeks profti loss Value : ', profitLoss);

        // ? click first nifty Target Values

        const nifty_Decre = await clicking_Button(
          ag,
          "//button[@id = 'target-subraction-btn']",
          '    Greeks Nifty Decrement'
        );

        if (nifty_Decre) {
          // ? hold
          await hold(1000);
          // ? nifty decrement button clicking
          const decrement = await (
            await (await ag.$x("//h3[@id ='Profit-Loss-value']"))[0].getProperty('textContent')
          ).jsonValue();
          const decrementValue = parseInt(decrement);
          console.log('        Greeks Nifty Decrement Values : ', decrementValue);

          //  ? conditionaly check button is working or not
          if (profitLoss === decrementValue) {
            // ! decrement button not working
            await take_screenShot(ag, 'Greeks Decrement Button');
          } else {
            // ? Clicking Nifty Increment button
            const nift_Incre = await clicking_Button(
              ag,
              "//button [@id = 'target-addition-btn']",
              '    Greeks Nifty Increment'
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
                await take_screenShot(ag, 'Greeks Nifty Increment Button');
              } else {
                console.log('        Greeks Nifty Increment Values : ', incrementValue);
              }
            }

            // ? click Reset button
            const nifty_Reset = await clicking_Button(ag, "//p[@id = 'target-reset-btn']", '    Greeks Nifty Reset');

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
                console.log('        Greeks Nifty Reset Values : ', resetValue);
                await hold(1000);
              } else {
                // ! reset button  not working
                await take_screenShot(ag, 'Greeks Nifty Reset button');
              }
            }
          }
        }

        // ?   check expiry
        // ? Expiry Date Button click
        console.log('        Greeks ✅ EXPIRY TARGET');

        await hold(1000);
        // ?  fetch expiry date profit loss values
        const expProfit = await (
          await (await ag.$x("//h3[@id ='Profit-Loss-value']"))[0].getProperty('textContent')
        ).jsonValue();

        const expProftitValue = parseInt(expProfit);

        console.log('        Greeks Expiry Profit Values : ', expProftitValue);

        // ? fetch expiry Date
        const expDate = await (
          await (await ag.$x("//p [@id ='expiry-value']"))[0].getProperty('textContent')
        ).jsonValue();

        console.log('        Greeks Expiry Date : ', expDate);

        // ? expiry forward date
        const expInc = await clicking_Button(
          ag,
          "//button [@id ='expiry-move-backword-btn']",
          '    Greeks Expiry Forward'
        );

        if (expInc) {
          await hold(1000);
          // ? fetch forward date value
          const forwardDate = await (
            await (await ag.$x("//p [@id ='expiry-value']"))[0].getProperty('textContent')
          ).jsonValue();

          console.log('        Greeks Expiry Forward Date : ', forwardDate);
          // ? fetch forward date profit loss values
          const profitDateInc = await (
            await (await ag.$x("//h3[@id ='Profit-Loss-value']"))[0].getProperty('textContent')
          ).jsonValue();

          const profitDateIncVal = parseInt(profitDateInc);

          console.log('        Greeks Expiry Forward Date Profit Loss Value : ', profitDateIncVal);

          // ? check today is expiry or not
          // ? if values are equal check date ? equal or not
          const options = { weekday: 'long' };

          const currentDate = new Date();

          const checkDateValue = currentDate.toLocaleDateString('en-US', options);

          // ? if expiry stop the process..... or not continue to check the process
          if ('Thursday' === checkDateValue) {
            console.log('        Greeks Today is Expiry Date');
          } else if (expProftitValue !== profitDateIncVal) {
            // ? click Decrement button
            const expDec = await clicking_Button(
              ag,
              "//button [@id ='expiry-move-forword-btn']",
              '    Greeks Expiry Backward'
            );

            if (expDec) {
              // ? hold and fetch values
              await hold(1000);
              const backwardDate = await (
                await (await ag.$x("//p [@id ='expiry-value']"))[0].getProperty('textContent')
              ).jsonValue();

              console.log('        Greeks Expiry backward Date : ', backwardDate);

              const profitDateDec = await (
                await (await ag.$x("//h3[@id ='Profit-Loss-value']"))[0].getProperty('textContent')
              ).jsonValue();

              const profitDateDecVal = parseInt(profitDateDec);

              console.log('        Greeks Expiry backward Date Profit Loss Value : ', profitDateDecVal);

              if (profitDateIncVal === profitDateDecVal) {
                // ! backward button
                await take_screenShot(ag, 'Greeks Expiry Backward');
              } else {
                // ? click Reset button

                const expReset = await clicking_Button(
                  ag,
                  "//p [@id ='expiry-target-reset-btn']",
                  '    Greeks Expiry Reset'
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
                    await take_screenShot(ag, 'Greeks Expiry Reset');
                  } else {
                    console.log('        Greeks Expiry Reset Profit Loss Value : ', profitDateResetVal);
                  }
                }
              }
            }
          } else if (expProftitValue === profitDateIncVal) {
            // ! expiry forward button
            await take_screenShot(ag, 'Greeks Expiry Forward');
          }
        } //
      } else {
        // @ts-expect-error
        await take_screenShot(ag, 'Greeks Done');
      }

      // ?
      // ? clck strike wise IV butotn
      console.log('        ✅ Greeks STRIKEWISE IVs');

      await hold(1000);
      // ?
      // ? fetch strike wise values
      const strikewise = await (
        await (await ag.$x("//p [@id ='strikewise-iv-value']"))[0].getProperty('textContent')
      ).jsonValue();

      // ? parse value
      const strikewiseVal = parseFloat(strikewise);

      console.log('        Greeks StrikeWise Values : ', strikewiseVal);

      const strikeInc = await clicking_Button(ag, "//p [@id ='0-plusclick-btn']", '    Greeks Strikewise Increment');
      if (strikeInc) {
        await hold(1000);
        // ?
        const strikewiseInc = await (
          await (await ag.$x("//p [@id ='strikewise-iv-value']"))[0].getProperty('textContent')
        ).jsonValue();

        // ? parse value
        const strikewiseIncVal = parseFloat(strikewiseInc);

        console.log('        Greeks StrikeWise Increment Values : ', strikewiseIncVal);

        if (strikewiseIncVal !== strikewiseVal) {
          //  ? condition passed

          // ? click decrement button on strikewise
          const strikeDec = await clicking_Button(
            ag,
            "//p [@id ='0-minusclick-btn']",
            '    Greeks Strikewise Decrement'
          );

          if (strikeDec) {
            await hold(1000);
            // ?
            const strikewiseDec = await (
              await (await ag.$x("//p [@id ='strikewise-iv-value']"))[0].getProperty('textContent')
            ).jsonValue();

            // ? parse value
            const strikewiseDecVal = parseFloat(strikewiseDec);

            console.log('        Greeks StrikeWise Decrement Values : ', strikewiseDecVal);

            if (strikewiseDecVal !== strikewiseIncVal) {
              // ? strike Reset
              const strikereset = await clicking_Button(ag, "//p [@id ='iv-reset-btn']", '    Greeks Strikewise Reset');

              if (strikereset) {
                await hold(2000);
                // ? fetch values
                const strikewiseReset = await (
                  await (await ag.$x("//p [@id ='strikewise-iv-value']"))[0].getProperty('textContent')
                ).jsonValue();

                // ? parse value
                const strikewiseResetVal = parseFloat(strikewiseReset);

                if (strikewiseResetVal !== strikewiseVal) {
                  console.log('        Greeks StrikeWise Reset Values : ', strikewiseResetVal);

                  await hold(1000);
                  //  ? clear strategies
                  // ? set to LTP tab
                } else {
                  // @ strike wise Reset
                  await take_screenShot(ag, 'Greeks Strike Reset');
                }
              }
            } else {
              // @ strike wise decrement
              await take_screenShot(ag, 'Greeks Strike Decrement');
            }
          }
        } else {
          // ! Strikewise increment
          await take_screenShot(ag, 'Greeks Strikewise Increment');
        }
      }
    } else {
      // @ts-expect-error
      await take_screenShot(ag, 'Greeks Put buy');
    }
  } else {
    // @ts-expect-error
    await take_screenShot(ag, label);
  }
};

module.exports.greeksTab = greeksTab;
