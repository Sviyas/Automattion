const { hold, take_screenShot } = require('../utils');
const { clicking_Button } = require('./Button');
const { OITab } = require('./OiTab');
const { greeksTab } = require('./GreeksTab');

const Strategies = async function (arg, id, label) {
  const strategy = await clicking_Button(arg, id, label);

  // ? Trades

  if (strategy) {
    console.log(`        👍  ${label} Button `);
    // ? hold
    await hold(2000);

    // ? edit to select legs

    const editadd = await clicking_Button(arg, "//button [contains(text(), 'EDIT/ADD')]", '    Edit/Add');

    if (editadd) {
      // ? click OPT button

      const opt = await clicking_Button(arg, "//li [@id = 'OPT-slider-header-btn']", '    OPT');

      if (opt) {
        // ? check related buttons
        const strategyDate = await clicking_Button(
          arg,
          "//div [@id = 'strategy-view-select-with-title-st-slider-date']",
          '    Strategy Date Picker'
        );

        // ? click LTP Sell button
        if (strategyDate) {
          await hold(1000);
          // ? LTP Sell button
          const ltpSell = await clicking_Button(arg, "//div [@id ='atm-strike-index-ltp-CE-SELL']", '    LTP SELL');

          if (ltpSell) {
            // ?
            // ? Click Done

            const done = await clicking_Button(arg, "//button [@id ='stratrgy-done-btn']", '    Done');

            if (done) {
              await hold(2000);
              // ? hold
              // ? fetch Profit loss Values
              // const prolos = await (
              //   await (await arg.$x("//h3[@id ='Profit-Loss-value']"))[0].getProperty('textContent')
              // ).jsonValue();

              // ? parse Value
              // const profitLoss = parseInt(prolos);

              // console.log('        ✅ NIFTY TARGET');
              // console.log('        profti loss Value : ', profitLoss);

              // ? click first nifty Target Values  |  ,
              // ? nifty targer increment button
              // const nifty_Incre = await clicking_Button(
              //   arg,
              //   "//button [@id = 'target-addition-btn']",
              //   '    Nifty Increment'
              // );

              // if (nifty_Incre) {
              //   // ? hold
              //   await hold(1000);
              //   // ? nifty decrement button clicking
              //   const increment = await (
              //     await (await arg.$x("//h3[@id ='Profit-Loss-value']"))[0].getProperty('textContent')
              //   ).jsonValue();
              //   const incrementValue = parseInt(increment);
              //   console.log('        Nifty Increment Values : ', incrementValue);

              //   //  ? conditionaly check button is working or not
              //   if (profitLoss === incrementValue) {
              //     // ! decrement button not working
              //     await take_screenShot(arg, 'Increment Button');
              //   } else {
              //     // ? Clicking Nifty Increment button
              //     const nift_Decre = await clicking_Button(
              //       arg,
              //       "//button[@id = 'target-subraction-btn']",
              //       '    Nifty Increment'
              //     );

              //     if (nift_Decre) {
              //       // ? hold
              //       await hold(1000);
              //       const decrement = await (
              //         await (await arg.$x("//h3[@id ='Profit-Loss-value']"))[0].getProperty('textContent')
              //       ).jsonValue();

              //       const decrementValue = parseInt(decrement);

              //       if (incrementValue === decrementValue) {
              //         // ! Increment button not working
              //         await take_screenShot(arg, 'Nifty Decrement Button');
              //       } else {
              //         console.log('        Nifty Decrement Values : ', decrementValue);
              //       }
              //     }

              //     // ? click Reset button
              //     const nifty_Reset = await clicking_Button(arg, "//p[@id = 'target-reset-btn']", '    Nifty Reset');

              //     if (nifty_Reset) {
              //       // ? hold
              //       await hold(1000);
              //       // ?
              //       const reset = await (
              //         await (await arg.$x("//h3[@id ='Profit-Loss-value']"))[0].getProperty('textContent')
              //       ).jsonValue();

              //       const resetValue = parseInt(reset);

              //       // ? check reset button working or not
              //       if (profitLoss === resetValue) {
              //         console.log('        Nifty Reset Values : ', resetValue);
              //         await hold(1000);
              //       } else {
              //         // ! reset button  not working
              //         await take_screenShot(arg, 'Nifty Reset button');
              //       }
              //     }
              //   }
              // }

              // ?   check expiry
              // ? Expiry Date Button click
              console.log('        ✅ EXPIRY TARGET');

              await hold(1000);
              // ?  fetch expiry date profit loss values
              const expProfit = await (
                await (await arg.$x("//h3[@id ='Profit-Loss-value']"))[0].getProperty('textContent')
              ).jsonValue();

              const expProftitValue = parseInt(expProfit);

              console.log('        Expiry Profit Values : ', expProftitValue);

              // ? fetch expiry Date
              const expDate = await (
                await (await arg.$x("//p [@id ='expiry-value']"))[0].getProperty('textContent')
              ).jsonValue();

              console.log('        Expiry Date : ', expDate);

              // ? expiry forward date
              const expInc = await clicking_Button(
                arg,
                "//button [@id ='expiry-move-backword-btn']",
                '    Expiry Forward'
              );

              // ? fetch forward date value
              const forwardDate = await (
                await (await arg.$x("//p [@id ='expiry-value']"))[0].getProperty('textContent')
              ).jsonValue();

              console.log('        Expiry Forward Date : ', forwardDate);

              // ? fetch forward date profit loss values
              // const profitDateInc = await (
              //   await (await arg.$x("//h3[@id ='Profit-Loss-value']"))[0].getProperty('textContent')
              // ).jsonValue();

              // const profitDateIncVal = parseInt(profitDateInc);

              // console.log('        Expiry Forward Date Profit Loss Value : ', profitDateIncVal);
              // await hold(10000);
              const profitIncrement = await (
                await (await arg.$x("//h3 [@id ='Profit-Loss-value']"))[0].getProperty('textContent')
              ).jsonValue();

              const profitIncProfitValue = parseInt(profitIncrement);

              console.log('        Expiry Forward Date Profit Loss Value : ', profitIncProfitValue);

              if (expInc) {
                if (expProftitValue !== profitIncProfitValue) {
                  // ? click Decrement button
                  const expDec = await clicking_Button(
                    arg,
                    "//button [@id ='expiry-move-forword-btn']",
                    '    Expiry Backward'
                  );

                  if (expDec) {
                    // ? hold and fetch values
                    await hold(1000);
                    const backwardDate = await (
                      await (await arg.$x("//p [@id ='expiry-value']"))[0].getProperty('textContent')
                    ).jsonValue();

                    console.log('        Expiry backward Date : ', backwardDate);

                    const profitDateDec = await (
                      await (await arg.$x("//h3[@id ='Profit-Loss-value']"))[0].getProperty('textContent')
                    ).jsonValue();

                    const profitDateDecVal = parseInt(profitDateDec);

                    console.log('        Expiry backward Date Profit Loss Value : ', profitDateDecVal);

                    if (profitIncProfitValue === profitDateDecVal) {
                      // ! backward button
                      await take_screenShot(arg, 'Expiry Backward');
                    } else {
                      // ? click Reset button

                      const expReset = await clicking_Button(
                        arg,
                        "//p [@id ='expiry-target-reset-btn']",
                        '    Expiry Reset'
                      );

                      if (expReset) {
                        // ? hold & fetch values
                        await hold(1000);
                        const profitDateReset = await (
                          await (await arg.$x("//h3[@id ='Profit-Loss-value']"))[0].getProperty('textContent')
                        ).jsonValue();

                        const profitDateResetVal = parseInt(profitDateReset);

                        if (profitDateResetVal !== expProftitValue) {
                          // ! expiry Reset
                          await take_screenShot(arg, 'Expiry Reset');
                        } else {
                          console.log('        Expiry Reset Profit Loss Value : ', profitDateResetVal);
                        }
                      }
                    }
                  }
                } else if (expProftitValue === profitIncProfitValue) {
                  // ? check today is expiry or not
                  // ? if values are equal check date ? equal or not
                  const options = { weekday: 'long' };

                  const currentDate = new Date();

                  const checkDateValue = currentDate.toLocaleDateString('en-US', options);

                  if ('Thursday' === checkDateValue) {
                    console.log('        Today is Expiry Date');
                  } else {
                    // ? if expiry stop the process..... or not continue to check the process
                    // ! expiry forward button
                    await take_screenShot(arg, 'Expiry Forward');
                  }
                }
              } //

              // ? clck strike wise IV butotn
              console.log('        ✅ STRIKEWISE IVs');
              // ?
              // ? check striekwise ivs
              await hold(1000);

              // ? fetch strike wise values
              const strikewise = await (
                await (await arg.$x("//p [@id ='strikewise-iv-value']"))[0].getProperty('textContent')
              ).jsonValue();

              // ? parse value
              const strikewiseVal = parseFloat(strikewise);

              console.log('        StrikeWise Values : ', strikewiseVal);

              const strikeInc = await clicking_Button(arg, "//p [@id ='0-plusclick-btn']", '    Strikewise Increment');

              if (strikeInc) {
                await hold(1000);
                // ?
                const strikewiseInc = await (
                  await (await arg.$x("//p [@id ='strikewise-iv-value']"))[0].getProperty('textContent')
                ).jsonValue();

                // ? parse value
                const strikewiseIncVal = parseFloat(strikewiseInc);

                console.log('        StrikeWise Increment Values : ', strikewiseIncVal);

                if (strikewiseIncVal !== strikewiseVal) {
                  //  ? condition passed

                  // ? click decrement button on strikewise
                  const strikeDec = await clicking_Button(
                    arg,
                    "//p [@id ='0-minusclick-btn']",
                    '    Strikewise Decrement'
                  );

                  if (strikeDec) {
                    await hold(1000);
                    // ?
                    const strikewiseDec = await (
                      await (await arg.$x("//p [@id ='strikewise-iv-value']"))[0].getProperty('textContent')
                    ).jsonValue();

                    // ? parse value
                    const strikewiseDecVal = parseFloat(strikewiseDec);

                    console.log('        StrikeWise Decrement Values : ', strikewiseDecVal);

                    if (strikewiseDecVal !== strikewiseIncVal) {
                      // ? strike Reset
                      const strikereset = await clicking_Button(
                        arg,
                        "//p [@id ='iv-reset-btn']",
                        '    Strikewise Reset'
                      );

                      if (strikereset) {
                        await hold(2000);
                        // ? fetch values
                        const strikewiseReset = await (
                          await (await arg.$x("//p [@id ='strikewise-iv-value']"))[0].getProperty('textContent')
                        ).jsonValue();

                        // ? parse value
                        const strikewiseResetVal = parseFloat(strikewiseReset);

                        if (strikewiseResetVal !== strikewiseVal) {
                          await hold(1000);
                          console.log('        StrikeWise Reset Values : ', strikewiseResetVal);

                          // ? again open edit add
                          const EDIT = await clicking_Button(
                            arg,
                            "//button [contains(text(), 'EDIT/ADD')]",
                            '    EDIT ADD'
                          );

                          if (EDIT) {
                            console.log('        Navigate to OI Tab');
                            // ? hold to continue next function
                            await hold(1000);
                          } else {
                            // @ edit add
                            await take_screenShot(arg, 'Edit');
                          }
                        } else {
                          // @ strike wise Reset
                          await take_screenShot(arg, 'Strike Reset');
                        }
                      }
                    } else {
                      // @ strike wise decrement
                      await take_screenShot(arg, 'Strike Decrement');
                    }
                  }
                } else {
                  // ! Strikewise increment
                  await take_screenShot(arg, 'Strikewise Increment');
                }
              }
            } else {
              // ! Done
              await take_screenShot(arg, 'Done');
            }
          } else {
            // ! LTP Sell
            await take_screenShot(arg, 'LTP SELL');
          }
        }
      } else {
        // ! OPT
        await take_screenShot(arg, 'Strategy Date Picker');
      }
    } else {
      // ! strikewise
      await take_screenShot(arg, 'Edit Add');
    }

    //  ?  OI Page
    await OITab(arg, "//li [@id ='OI-slider-header-btn']", '    OI');
    // ? Greeks Page
    await greeksTab(arg, "//li [@id ='GREEKS-slider-header-btn']", '    Greeks');
  } else {
    // ! strategy
    await take_screenShot(arg, label);
  }
};

module.exports.Strategies = Strategies;
