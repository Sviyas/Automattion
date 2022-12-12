// // ? short call
// $x("//p [contains(text(),'Long Call')]");
// $x("//p [contains(text(),'Long Put')]");
// $x("//p [contains(text(),'Bull Call Spread')]");
// $x("//p [contains(text(),'Bear Call Spread')]");
// $x("//p [contains(text(),'Bull Put Spread')]");
// $x("//p [contains(text(),'Long Straddle')]");
// $x("//p [contains(text(),'Short Straddle')]");
// $x("//p [contains(text(),'Long Strangle')]");
// $x("//p [contains(text(),'Short Strangle')]");
// $x("//p [contains(text(),'Long Iron Condor')]");
// $x("//p [contains(text(),'Short Iron Condor')]");
// $x("//p [contains(text(),'Long Put Butterfly')]");
// $x("//p [contains(text(),'Short Put Butterfly')]");
// $x("//p [contains(text(),'Long Call Butterfly')]");
// $x("//p [contains(text(),'Short Call Butterfly')]");

const Strategy = await clicking_Button(arg, "//p[contains(text(), 'Long Call')]", ' Long');

if (Strategy) {
  console.log('   👍   Long Call Strategy');
  await hold(2000);

  // ? fetch profit loss values
  const prolos = await (
    await (await arg.$x("//h3[@id ='Profit-Loss-value']"))[0].getProperty('textContent')
  ).jsonValue();

  // ?storing the profit los  value and parse the text to number
  const profitLoss = parseInt(prolos);

  console.log('    ✅ NIFTY TARGET BUTTON');
  console.log('    profit loss Value : ', profitLoss);

  // ? Clicking nifty decrement button
  const nift_Decre = await clicking_Button(arg, "//button[@id = 'target-subraction-btn']", 'Decrement');

  if (nift_Decre) {
    // ? nifty decrement button clicking
    const decrement = await (
      await (await arg.$x("//h3[@id ='Profit-Loss-value']"))[0].getProperty('textContent')
    ).jsonValue();

    const decrementValue = parseInt(decrement);
    console.log('    Decrement Values : ', decrementValue);

    await hold(1000);
    //  ? conditionaly check button is working or not
    if (profitLoss === decrementValue) {
      // ! decrement button not working
      await hold(1000);
      await take_screenShot(arg, 'Decrement Button');
      console.log('    Decrement Button Not Working');
    } else {
      // ? Clicking Nifty Increment button
      const nift_Incre = await clicking_Button(arg, "//button [@id = 'target-addition-btn']", 'Increment');

      if (nift_Incre) {
        const increment = await (
          await (await arg.$x("//h3[@id ='Profit-Loss-value']"))[0].getProperty('textContent')
        ).jsonValue();

        const incrementValue = parseInt(increment);

        if (decrementValue === incrementValue) {
          // ! Increment button not working
          await hold(1000);
          await take_screenShot(arg, 'Increment Button');
          console.log('    Increment Button Not Working');
        } else {
          console.log('    Increment Values : ', incrementValue);
        }
      }

      // ? click Reset button
      const nifty_Reset = await clicking_Button(arg, "//p[@id = 'target-reset-btn']", 'Reset');

      if (nifty_Reset) {
        const reset = await (
          await (await arg.$x("//h3[@id ='Profit-Loss-value']"))[0].getProperty('textContent')
        ).jsonValue();

        const resetValue = parseInt(reset);

        // ? check reset button working or not
        if (profitLoss === resetValue) {
          console.log('    Reset Values : ', resetValue);
          await hold(1000);
        } else {
          // ! reset button  not working
          await hold(1000);
          await take_screenShot(arg, 'Reset button');
          console.log('    Reset Button Not Working');
        }
      }
    }
  }

  // ? Clicking Expiry Date
  console.log('    ✅ EXPIRY DATE BUTTON');
  console.log('    profit loss Value : ', profitLoss);

  // ? expiry increment
  const expiryIncr = await clicking_Button(arg, "//button [@id ='expiry-move-backword-btn']", 'Expiry Increment');

  if (expiryIncr) {
    await hold(1000);
    const forward = await (
      await (await arg.$x("//h3[@id ='Profit-Loss-value']"))[0].getProperty('textContent')
    ).jsonValue();

    const expyIncr = parseInt(forward);

    // ? check increment button is working or not
    if (profitLoss === expyIncr) {
      // ! expiry button not working
      await hold(1000);
      await take_screenShot(arg, 'Exp Inc button');
      console.log('   Expiry Increment Button Not Working');
    } else {
      console.log('    Expiry Increment values : ', expyIncr);

      // ? click expiry decrement
      const expiryDec = await clicking_Button(arg, "//button [@id ='expiry-move-forword-btn']", 'Expiry Decrement');

      if (expiryDec) {
        await hold(1000);
        const backword = await (
          await (await arg.$x("//h3[@id ='Profit-Loss-value']"))[0].getProperty('textContent')
        ).jsonValue();

        const expyDec = parseInt(backword);

        // hold(1000);
        // ? check decrement button is working or not
        if (expyIncr === expyDec) {
          // ! expiry Decrement
          await hold(1000);
          await take_screenShot(arg, 'Exp Dec Button');
          console.log('   Expiry Decrement Button Not Working');
        } else {
          hold(1000);
          console.log('    Expiry Decrement values : ', expyDec);

          // ? click Reset button
          const expiryReset = await clicking_Button(arg, "//p [@id ='expiry-target-reset-btn']", 'Expiry Reset');

          if (expiryReset) {
            await hold(1000);
            const reset = await (
              await (await arg.$x("//h3[@id ='Profit-Loss-value']"))[0].getProperty('textContent')
            ).jsonValue();

            const expyRest = parseInt(reset);

            // ? check reset button
            if (profitLoss === expyRest) {
              console.log('    Expiry Reset values : ', expyRest);
              // await hold(1000);
            } else {
              hold(1000);
              await take_screenShot(arg, 'Expiry Reset');
              console.log('   Expiry Reset Button Not Working');
            }
          }
        }
      }
    }
  }

  // ? clear one strategy to add new strategy

  const clearStgy = await clicking_Button(arg, "//button [@id ='clear-all-trades-btn']", 'clear strategy');
  if (!clearStgy) {
    await hold(1000);
    await take_screenShot(arg, 'Clear');
  }
  // ? CLICK STRATEGY to EDIT / ADD BUTTON
  console.log('    ✅ EDIT / ADD  BUTTON');
  const editAdd = await clicking_Button(arg, "//button [contains(text(), 'EDIT/ADD')]", 'Edit/Add');

  if (editAdd) {
    // ? click opt button
    const opt = await clicking_Button(arg, "//li [@id = 'OPT-slider-header-btn']", 'OPT');

    if (opt) {
      // ? click Strategy Date picker
      const daPick = await clicking_Button(
        arg,
        "//div [@id = 'strategy-view-select-with-title-st-slider-date']",
        'Strategy Date Picker'
      );

      if (daPick) {
        // ? click Ltp button  CE_Buy_21
        const LTP = await clicking_Button(arg, "//li [@id = 'LTP-slider-header-btn']", 'LTP');
        if (LTP) {
          const callBuy = await clicking_Button(arg, "//div[@id = 'CE_Buy_21']", 'Call Buy');
          if (!callBuy) {
            await hold(1000);
            await take_screenShot(arg, 'Call Buy');
          }
          // ? Click LTP Call Sell button
          const sellBut = await clicking_Button(arg, "//div[@id = 'PE_sell_21']", 'Put Sell');

          if (sellBut) {
            // ? Click Done button
            const done = await clicking_Button(arg, "//button[contains(text(), 'DONE')]", 'Done');
            // ? Check StrikeWise IV
            await hold(1000);
            if (done) {
              console.log('    ✅ STRIKE DECREMENT BUTTON');
              const strikrProlos = await (
                await (await arg.$x("//h3[@id ='Profit-Loss-value']"))[0].getProperty('textContent')
              ).jsonValue();
              const strikeProfit = parseInt(strikrProlos);
              console.log('    profit loss Value : ', strikeProfit);

              // ? click Call Increment Button
              const check_Incre = await clicking_Button(arg, "//p [@id = '0-plusclick-btn']", 'Stirke Call Increment');
              await hold(2000);

              if (check_Incre) {
                // ? Fetch decrement values
                const callIncre = await (
                  await (await arg.$x("//h3[@id ='Profit-Loss-value']"))[0].getProperty('textContent')
                ).jsonValue();
                const Incre = parseInt(callIncre);
                console.log('    LTP Strike Call Increment Values : ', Incre);
                await hold(2000);
                // ? Check Call Increment button working or not
                if (profitLoss !== Incre) {
                  await hold(1000);
                  // ? Clicking Decrement Button
                  const callDecre = await clicking_Button(
                    arg,
                    "//p [@id = '0-minusclick-btn']",
                    'Stirke Call Decrement'
                  );
                  await hold(2000);
                  // ? Fetch Decrement button values
                  const callDecreVal = await (
                    await (await arg.$x("//h3[@id ='Profit-Loss-value']"))[0].getProperty('textContent')
                  ).jsonValue();

                  const Decre = parseInt(callDecreVal);
                  console.log('    LTP Strike Call Decrement Values : ', Decre);
                  if (callDecre) {
                    await hold(2000);
                    // ? Check Call and Decrement values not same
                    if (Decre !== Incre) {
                      // ? Stike put Increment button click
                      const putIncre = await clicking_Button(
                        arg,
                        "//p [@id = '1-plusclick-btn']",
                        'Strike Put Increment'
                      );

                      await hold(2000);
                      // ? Fetch Put increment Button
                      const putVal = await (
                        await (await arg.$x("//h3[@id ='Profit-Loss-value']"))[0].getProperty('textContent')
                      ).jsonValue();

                      const putInc = parseInt(putVal);
                      console.log('    LTP Strike Put Increment Values : ', putInc);

                      // ? clicking put decrement button
                      if (putIncre) {
                        await hold(2000);
                        const strikrProlos = await (
                          await (await arg.$x("//h3[@id ='Profit-Loss-value']"))[0].getProperty('textContent')
                        ).jsonValue();
                        const strikeProfit = parseInt(strikrProlos);
                        console.log('    profit loss Value : ', strikeProfit);

                        //  ? conditionally check  put increment button
                        if (putInc === strikeProfit) {
                          // ? click put decrement values

                          const putDecre = await clicking_Button(arg, "//p [@id ='1-minusclick-btn']", 'Put Decrement');
                          await hold(1000);
                          // ? fetch decrement values
                          const putDecVal = await (
                            await (await arg.$x("//h3[@id ='Profit-Loss-value']"))[0].getProperty('textContent')
                          ).jsonValue();

                          const putDec = parseInt(putDecVal);

                          console.log('    LTP Strike Put Decreement Values : ', putDec);
                          // ? after click put decrement button
                          if (putDecre) {
                            // ? check put decrement button
                            await hold(1000);
                            if (putDec !== putInc) {
                              // ?  Click Reset button
                              await clicking_Button(arg, "//p [@id ='iv-reset-btn']", 'Strike Reset');

                              await hold(1000);

                              // ? fetch rest after profit loss values
                              const strikeResetValue = await (
                                await (await arg.$x("//h3[@id ='Profit-Loss-value']"))[0].getProperty('textContent')
                              ).jsonValue();

                              const strkRest = parseInt(strikeResetValue);
                              console.log('    Strike Reset Values : ', strkRest);

                              if (putInc !== strkRest) {
                                await hold(1000);
                                // ? clear all trades
                                const clearTrades = await clicking_Button(
                                  arg,
                                  "//button [@id ='clear-all-trades-btn']",
                                  'Clear'
                                );

                                if (clearTrades) {
                                  await hold(2000);
                                  //  ? check cleared or not
                                  const clearStrategy = await (
                                    await (await arg.$x("//h3[@id ='Profit-Loss-value']"))[0].getProperty('textContent')
                                  ).jsonValue();

                                  const clearstrategyValue = parseInt(clearStrategy);

                                  console.log('    Clear Strategy Reset Values : ', clearstrategyValue);

                                  if (clearstrategyValue === 0) {
                                    await hold(1000);

                                    console.log('    ✅ EDIT / ADD  BUTTON');
                                    // ? again open edit add to checks OI
                                    await clicking_Button(arg, "//button [contains(text(), 'EDIT/ADD')]", 'EDIT / Add');
                                    // ? Click OI button
                                    await OIButton(arg, "//li [@id = 'OI-slider-header-btn']");

                                    console.log('    ✅ EDIT / ADD  BUTTON');
                                    // ? again open edit add to checks Greekss
                                    // ? click greeeks button
                                    await clicking_Button(arg, "//button [contains(text(), 'EDIT/ADD')]", 'EDIT / Add');
                                    // ? click Greeks button
                                    await GreeksButton(arg, "//li [@id ='GREEKS-slider-header-btn']");

                                    //  ? await OIButton(arg, "")
                                    // ? waiting for another function
                                  } else {
                                    // ! clear trades button
                                    await hold(1000);
                                    await take_screenShot(arg, 'Clear Trades');
                                    console.log('   Clear trades  button Not Working');
                                  }
                                }
                              } else {
                                // ! Strike iv Put Decrement button
                                await hold(1000);
                                await take_screenShot(arg, 'Strike Reset');
                                console.log('   Strike Reset  button Not Working');
                              }
                            } else {
                              // ! Strike iv Put Decrement button
                              await hold(1000);
                              await take_screenShot(arg, 'Strike Put Decrement ');
                              console.log('   LTP put Decrement button Not Working');
                            }
                          }
                        } else {
                          // ! Strike iv Put increment button
                          await hold(1000);
                          await take_screenShot(arg, 'Strike Put Increment ');
                          console.log('   LTP put Increment button Not Working');
                        }
                      }
                    } else {
                      // ! Strike IV Call Increment button
                      await hold(1000);
                      await take_screenShot(arg, 'Strike Call Increment');
                      console.log('   LTP Call Decrement button Not Working');
                    }
                  }
                } else {
                  // ! Stirke IVCall decrement button
                  await hold(1000);
                  await take_screenShot(arg, 'Stirke Call Decrement');
                  console.log('   LTP Call Increment button Not Working');
                }
              }
            }
          } else {
            hold(1000);
            await take_screenShot(arg, 'Sell button');
            console.log('   LTP Sell button Not Working');
          }
          // ?
        } else {
          hold(1000);
          await take_screenShot(arg, 'ltp');
          console.log('   LTP button Not Working');
        }
      } else {
        hold(1000);
        await take_screenShot(arg, 'opt date picker');
        console.log('   opt date picker button Not Working');
      }
    } else {
      hold(1000);
      await take_screenShot(arg, 'OPT');
      console.log('   OPT Not button Working');
    }
  } else {
    hold(1000);
    await take_screenShot(arg, 'Edit Add');
    console.log('   Edit Add button Not Working');
  }
} else {
  // ! if Long Call Strategy
  await take_screenShot(arg, 'Long Call');
  console.log('    Long Call Button Not Working');
}
