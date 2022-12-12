const { hold, take_screenShot } = require('./utils.js');
const { clicking_Button, OpenAndClose, click_Button } = require('./Strategy/Button');

const options_Tab = async function (arg, brwsr) {
  // ? clicking option open and close tab
  const open = await OpenAndClose(arg, "//span[contains(text(), 'Options') ]");

  if (open) {
    // ? Option Dashboard
    console.log('    8.1   Navigate to Option Page');
    const option = await clicking_Button(arg, "//p[contains(text(), 'Dashboard') ]", '    Option');

    if (option) {
      await hold(1000);
      // ? Check Dashboard
      const opt_Dash = await clicking_Button(arg, "//span [@id ='dashboard-btn']", '    Option Dashboard');

      if (opt_Dash) {
        await hold(1000);
        //  ?  Click Option Date Picker

        const opt_Datepicker = await clicking_Button(
          arg,
          "//div [@id = 'options-dashboard-select-with-title-date']",
          '    Option DatePicker'
        );

        if (opt_Datepicker) {
          // ?  Click Again Open
          await OpenAndClose(arg, "//span[contains(text(), 'Options') ]");
          // ? click another button
          console.log('    8.2   Navigate to Option Screener Page');
          const opt_Screener = await clicking_Button(
            arg,
            "//p[contains(text(), 'Option Screener')]",
            '    Option Screener'
          );

          if (opt_Screener) {
            // ?
            // ? close button
            await OpenAndClose(arg, "//span[contains(text(), 'Options') ]");

            await hold(1000);
            const scree_Dash = await clicking_Button(
              arg,
              "//span[contains(text(), 'screener')]",
              '    Option Screener Dashboard'
            );

            if (scree_Dash) {
              await hold(1000);
              // ? screener Date Picker

              const scree_DatePicker = await clicking_Button(
                arg,
                "//div [@id = 'options-screener-select-with-title-date']",
                '    Option Screener Date Picker'
              );

              if (scree_DatePicker) {
                await hold(1000);
                // ? CLICK Screener Filter Field

                const scree_Filter = await clicking_Button(
                  arg,
                  "//div [@id = 'options-screener-select-with-title-filters']",
                  '    Option Screener Filter'
                );

                if (scree_Filter) {
                  await hold(1000);
                  // ? click Screener Table
                  const scree_Table = await clicking_Button(
                    arg,
                    "//div [@id = 'options-screener-table-id-undefined']",
                    '    Option Screener Table'
                  );

                  if (scree_Table) {
                    // ? Click to open
                    await OpenAndClose(arg, "//span[contains(text(), 'Options') ]");

                    // ? Click Option Chain
                    console.log('    8.3   Navigate to Option  Chain Page');
                    const opt_Chain = await clicking_Button(
                      arg,
                      "//p[contains(text(), 'Option Chain')]",
                      '    Option Chain'
                    );
                    // ? open tab
                    if (opt_Chain) {
                      // ?  close tab
                      await OpenAndClose(arg, "//span[contains(text(), 'Options') ]");

                      const opt_ChaiDash = await clicking_Button(
                        arg,
                        "//span [@id ='chain-btn']",
                        '    Option Chain Dashboard'
                      );

                      if (opt_ChaiDash) {
                        // ? click Search for Option chain
                        const opt_ChaiSearch = await clicking_Button(
                          arg,
                          "//div [@id ='options-chain-search']",
                          '    Option Chain Search'
                        );

                        if (opt_ChaiSearch) {
                          await hold(1000);
                          // ?  click filter field option chain
                          const opt_ChaiDatePicker = await clicking_Button(
                            arg,
                            "//div [@id ='options-chain-select-with-title-date']",
                            '    Option Chain Date Picker'
                          );

                          if (opt_ChaiDatePicker) {
                            await hold(1000);
                            // ? option chain table
                            const opt_ChaiTable = await clicking_Button(
                              arg,
                              "//div [@id ='options-chain-table-id-undefined']",
                              '    Option Chain Table'
                            );

                            if (opt_ChaiTable) {
                              await hold(1000);
                              // ? click homepage button

                              const homepge = await clicking_Button(
                                arg,
                                "//span [@id ='options-btn']",
                                '    Option Homepage'
                              );

                              if (homepge) {
                                console.log('          Option Homepage Successfully');
                              } else {
                                await hold(1000);
                                await take_screenShot(arg, 'Option Homepage');
                              }
                            } else {
                              await hold(1000);
                              await take_screenShot(arg, 'Option Chain Table');
                            }
                          } else {
                            await hold(1000);
                            await take_screenShot(arg, 'Option Chain Date Picker');
                          }
                        } else {
                          await hold(1000);
                          await take_screenShot(arg, 'Option Chain Search');
                        }
                      } else {
                        await hold(1000);
                        await take_screenShot(arg, 'Option Chain Dashboard');
                      }
                    } else {
                      await hold(1000);
                      await take_screenShot(arg, 'Option Chain');
                    }
                  } else {
                    await hold(1000);
                    await take_screenShot(arg, 'Option Screener Table');
                  }
                } else {
                  await hold(1000);
                  await take_screenShot(arg, 'Option Screener Filter');
                }
              } else {
                await hold(1000);
                await take_screenShot(arg, 'Option Screener Date Picker');
              }
            } else {
              await hold(1000);
              await take_screenShot(arg, 'Option Screener Dashboard');
            }
          } else {
            await hold(1000);
            await take_screenShot(arg, 'Option Screener');
          }
        } else {
          await hold(1000);
          await take_screenShot(arg, 'Option DatePicker');
        }
      } else {
        await hold(1000);
        await take_screenShot(arg, 'Option Dashboard');
      }
    } else {
      await hold(1000);
      await take_screenShot(arg, 'Option');
    }
  } else {
    await hold(1000);
    await take_screenShot(arg, 'Open Button');
  }

  // // ? Option Dashboard
  // const option_Dash = await arg.$x("//p[contains(text(), 'Dashboard') ]");

  // if (option_Dash.length > 0) {
  //   await option_Dash[0].click();
  //   await hold(2000);
  //   console.log('8.1   Navigate to Options Dashboard Page');
  // }

  // // Check dashboard
  // const opt_Dashboard = await arg.$x("//span[contains(text(), 'dashboard')]");

  // if (opt_Dashboard.length > 0) {
  //   await opt_Dashboard[0].click();
  //   await hold(2000);
  //   console.log('  Option Dashboard   ');
  // }

  // //  check date picker
  // const opt_Datepicker = await arg.$x("//div [@id = 'options-dashboard-select-with-title-date']");

  // if (opt_Datepicker.length > 0) {
  //   await opt_Datepicker[0].click();
  //   await hold(2000);
  //   console.log('  Option Date Picker  ');
  // }

  // await opt_Open(arg);

  // // Option Screener Tab
  // const opt_Screener = await arg.$x("//p[contains(text(), 'Option Screener')]");

  // if (opt_Screener.length > 0) {
  //   await opt_Screener[0].click();
  //   await hold(2000);
  //   console.log('8.2   Navigate to Option Screener Page');
  // }

  // await opt_Close(arg);

  // // option screener check dashboard
  // const scre_Dash = await arg.$x("//span[contains(text(), 'screener')]");

  // if (scre_Dash.length > 0) {
  //   await scre_Dash[0].click();
  //   await hold(2000);
  //   console.log('  Option Screener Dashboard ');
  // }

  // // Screener Date picker
  // const scre_DatePicker = await arg.$x("//div [@id = 'options-screener-select-with-title-date']");
  // if (scre_DatePicker.length > 0) {
  //   await scre_DatePicker[0].click();
  //   await hold(2000);
  //   console.log('  Option Screener Date Picker ');
  // }

  // check Filter
  // const opt_Filter = await arg.$x("//div [@id = 'options-screener-select-with-title-filters']");

  // if (opt_Filter.length > 0) {
  //   await opt_Filter[0].click();
  //   await hold(2000);
  //   console.log('  Option Screener Filter  ');
  // }

  // check Screener Table
  // const opt_ScreenTable = await arg.$x("//div [@id = 'options-screener-table-id-undefined']");

  // if (opt_ScreenTable.length > 0) {
  //   await opt_ScreenTable[0].click();
  //   await hold(2000);
  //   console.log('  Option Screener Table ');
  // }

  // await opt_Open(arg);

  // //  option chain tab
  // const opt_Chain = await arg.$x("//p[contains(text(), 'Option Chain')]");
  // if (opt_Chain.length > 0) {
  //   await opt_Chain[0].click();
  //   await hold(2000);
  //   console.log('8.2   Navigate to Option Chaing Page');
  // }

  // await opt_Close(arg);

  //  option chain check
  // const chain_Dash = await arg.$x("//span[contains(text(), 'chain')]");

  // if (chain_Dash.length > 0) {
  //   await chain_Dash[0].click();
  //   await hold(2000);
  //   console.log('  Option Chain Dashboard  ');
  // }

  // option chain search field
  // const chain_Search = await arg.$x("//div [@id = 'options-chain-search']");

  // if (chain_Search.length > 1) {
  //   await chain_Search[1].click();
  //   await hold(2000);
  //   console.log('  Option Chain Search ');
  // }

  // option chain date picker

  // const chain_DatePicker = await arg.$x("//div[@id = 'options-chain-select-with-title-date']");

  // if (chain_DatePicker.length > 0) {
  //   await chain_DatePicker[0].click();
  //   await hold(2000);
  //   console.log('  Option Chain Date Picker ');
  // }
};

module.exports.options_Tab = options_Tab;
