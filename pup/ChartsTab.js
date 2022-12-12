const { OpenAndClose, clicking_Button } = require('./Strategy/Button.js');
const { hold, take_screenShot } = require('./utils.js');

const charts_Tab = async function (arg, brwsr) {
  //  ? Chart Tab Open
  await OpenAndClose(arg, "//button [@id ='headlessui-popover-button-21']");

  // ? Charts IV Smile
  console.log('    9.1   Navigate to IV Smile Page');

  const iv_Smile = await clicking_Button(arg, "//p[contains(text(), 'IV Smile')]", '    IV Smile');

  if (iv_Smile) {
    await hold(1500);

    // ? check IV smile dashboard
    const iv_Dash = await clicking_Button(arg, "//span[contains(text(), 'ivSmile')]", '    IV Dashboard');

    if (iv_Dash) {
      await hold(1000);
      //  ? check IV search Field
      const iv_Search = await clicking_Button(arg, "//div [@id ='charts-ivSmile-search']", '    IV Search');

      if (iv_Search) {
        await hold(1000);
        // ? click IV Date Picker
        const iv_Datepicker = await clicking_Button(
          arg,
          "//div[@id = 'charts-ivSmile-select-with-title-date']",
          '    IV Date Picker'
        );

        if (iv_Datepicker) {
          await hold(1000);
          // ? Next Option Interest
          await OpenAndClose(arg, "//button [@id ='headlessui-popover-button-71']");

          // ? Open Interest
          const OI = await clicking_Button(arg, "//a [@id ='navlink-1']", '    Open Interest');

          console.log('    9.2   Navigate to Open Interest Page');

          if (OI) {
            await hold(1000);
            //?  close button
            await OpenAndClose(arg, "//button [@id ='headlessui-popover-button-71']");

            // ? OI dashboard
            const oi_Dash = await clicking_Button(arg, "//span[contains(text(), 'oi')]", '   OI Dashboard');

            if (oi_Dash) {
              // ?
              await hold(1000);

              const oi_Search = await clicking_Button(arg, "//div [@id = 'charts-oi-search']", '   OI Search');

              if (oi_Search) {
                await hold(1000);
                // ?
                const oi_Filter = await clicking_Button(
                  arg,
                  "//div [@id = 'charts-oi-select-with-title-c1']",
                  '   OI Filter'
                );

                if (oi_Filter) {
                  // ?
                  await hold(1000);

                  // ? OI Date picker
                  const oi_DatePicker = await clicking_Button(
                    arg,
                    "//div [@id = 'charts-oi-select-with-title-date']",
                    '   OI Date Picker'
                  );

                  if (oi_DatePicker) {
                    // ?
                    await hold(1000);
                    //  ? OI Date Picker Field
                  } else {
                    await hold(1000);
                    await take_screenShot(arg, 'OI Date Picker');
                  }
                } else {
                  await hold(1000);
                  await take_screenShot(arg, 'OI Filter');
                }
              } else {
                await hold(1000);
                await take_screenShot(arg, 'OI Search');
              }
            } else {
              await hold(1000);
              await take_screenShot(arg, 'OI Dashboard');
            }
          } else {
            await hold(1000);
            await take_screenShot(arg, 'Open Interest');
          }
        } else {
          await hold(1000);
          await take_screenShot(arg, 'IV Date Picker');
        }
      } else {
        await hold(1000);
        await take_screenShot(arg, 'IV Search');
      }
    } else {
      await hold(1000);
      await take_screenShot(arg, 'IV Dashboard');
    }
  } else {
    await hold(1000);
    await take_screenShot(arg, 'IV Smile');
  }

  // ? Greeks Tab

  await OpenAndClose(arg, "//button [@id ='headlessui-popover-button-71']");

  const greeks = await clicking_Button(arg, "//a [@id ='navlink-2']", '   Greeks');

  console.log('    9.3   Navigate to Greeks Page');

  if (greeks) {
    // ? close tab
    await OpenAndClose(arg, "//button [@id ='headlessui-popover-button-71']");

    // ? Greeks Dashboard
    const greeks_Dash = await clicking_Button(arg, "//span [@id ='greeks-btn']", '   Greek Dashhboard');

    if (greeks_Dash) {
      //  ?
      await hold(1000);

      const greeks_Search = await clicking_Button(arg, "//div [@id ='charts-greeks-search']", '   Greek Search');

      if (greeks_Search) {
        // ?
        await hold(1000);
        // ?
        const greeks_DatePicker = await clicking_Button(
          arg,
          "//div [@id ='charts-greeks-select-with-title-date']",
          '   Greek Date Picker'
        );

        if (greeks_DatePicker) {
          await hold(1000);
          // ? Click Call button on chart
          const call = await clicking_Button(arg, "//button [@id ='headlessui-switch-120']", '   Greek Call');

          //  ?
          if (call) {
            await hold(1500);
            // ?  open again click Max Pain
            await OpenAndClose(arg, "//button [@id ='headlessui-switch-152']");

            // ? Max Pain Page
            console.log('    9.4   Navigate to MaxPain Page');
            const maxpain = await clicking_Button(arg, "//a [@id ='navlink-3]", '   MaxPain');

            if (maxpain) {
              await hold(1000);
              // ?
              await OpenAndClose(arg, "//button [@id ='headlessui-popover-button-71']");
              // ? max pain dashbord
              const maxpain_Dash = await clicking_Button(arg, "//span [@id ='maxpain-btn']", '   MaxPain Dashboard');

              if (maxpain_Dash) {
                await hold(1000);
                // ? click maxpain Search
                const maxpain_Search = await clicking_Button(
                  arg,
                  "//div [@id ='charts-maxpain-search']",
                  '   MaxPain Search'
                );

                if (maxpain_Search) {
                  // ?
                  await hold(1000);
                  const maxpain_Datepicker = await clicking_Button(
                    arg,
                    "//div [@id ='charts-maxpain-select-with-title-date']",
                    '   Maxpain Date Picker'
                  );

                  if (maxpain_Datepicker) {
                    // ??   goto homepage
                    const hompage = await clicking_Button(arg, "//span [@id ='charts-btn']", '   Maxpain Homepage');

                    if (hompage !== undefined) {
                      await hold(1000);
                      await take_screenShot(arg, 'Charts Home Page');
                    }
                  } else {
                    await hold(1000);
                    await take_screenShot(arg, 'Maxpain Date Picker');
                  }
                } else {
                  await hold(1000);
                  await take_screenShot(arg, 'Maxpain Search');
                }
              } else {
                await hold(1000);
                await take_screenShot(arg, 'Maxpain Dashboard');
              }
            } else {
              await hold(1000);
              await take_screenShot(arg, 'Maxpain');
            }
          } else {
            await hold(1000);
            await take_screenShot(arg, 'Greeks Call');
          }
        } else {
          await hold(1000);
          await take_screenShot(arg, 'Greeks Date Picker');
        }
      } else {
        await hold(1000);
        await take_screenShot(arg, 'Greeks Search');
      }
    } else {
      await hold(1000);
      await take_screenShot(arg, 'Greeks Dash');
    }
  } else {
    await hold(1000);
    await take_screenShot(arg, 'Greeks');
  }
  // arg.$x();

  // if (iv_Search.length > 1) {
  //   await iv_Search[1].click();
  //   await hold(2000);
  //   console.log(' IV Smile Search Field');
  // }

  // check IV date Picker
  // const iv_Datepicker = await arg.$x();

  // if (iv_Datepicker.length > 0) {
  //   await iv_Datepicker[0].click();
  //   await hold(2000);
  //   console.log(' IV Smile Date Picker');
  // }

  // await ch_Op(arg);

  // Charts Open Interest
  // arg.$x("//p[contains(text(), 'Open Interest')]");

  // if (OI.length > 0) {
  //   await OI[0].click();
  //   await hold(1000);
  // }

  // await ch_Clo(arg);

  // check OI dashboard
  // await arg.$x();

  // if (oi_Dashboard.length > 0) {
  //   await oi_Dashboard[0].click();
  //   await hold(1000);
  //   console.log(' Open Interest Dashboard ');
  // }

  // check OI search field
  // await arg.$x();

  // if (oi_Search.length > 1) {
  //   await oi_Search[1].click();
  //   await hold(2000);
  //   console.log(' Open Interest Search Field');
  // }

  // check OI filter field
  //  await arg.$x();

  //   if (oi_Filter.length > 0) {
  //     await oi_Filter[0].click();
  //     await hold(2000);
  //     console.log(' Open Interest Filter Field');
  //   }

  // check OI Date Picker
  // arg.$x();

  // // if (oi_DatePicker.length > 0) {
  //   await oi_DatePicker[0].click();
  //   await hold(2000);
  //   console.log(' Open Interest Date Picker ');
  // }

  // await ch_Op(arg);

  // //  Charts Greeks
  // const Greeks = await arg.$x("//p[contains(text(), 'Greeks')]");

  // if (Greeks.length > 0) {
  //   await Greeks[0].click();
  //   await hold(2000);
  //   console.log('9.3   Navigate to Greeks Page ');
  // }

  // await ch_Clo(arg);

  // Charts Greeks dashboard
  // arg.$x("//span[contains(text(), 'greeks')]");

  // if (greeks_Dash.length > 0) {
  //   await greeks_Dash[0].click();
  //   await hold(1000);
  //   console.log('  Greeks Dashboard  ');
  // }

  // // Greeks Search Field
  // const greeks_Search = await arg.$x();

  // if (greeks_Search.length > 1) {
  //   await greeks_Search[1].click();
  //   await hold(2000);
  //   console.log('  Greeks Search Field  ');
  // }

  // // Greeks Date Picker
  // const greeks_DatePicker = await arg.$x("//div [@id = 'charts-greeks-select-with-title-date']");

  // if (greeks_DatePicker.length > 0) {
  //   await greeks_DatePicker[0].click();
  //   await hold(2000);
  //   console.log('  Greeks Date Picker  ');
  // }
  // await ch_Op(arg);

  // // Charts MaxPain
  // const maxPain = await arg.$x("//p[contains(text(), 'Maxpain')]");

  // if (maxPain.length > 0) {
  //   await maxPain[0].click();
  //   await hold(2000);
  //   console.log('9.4   Navigate to Maxpain Page ');
  // }

  // await ch_Clo(arg);

  //  maxpain dashboard
  // const maxpain_Dash = await arg.$x("//span[contains(text(), 'maxpain')]");

  // if (maxpain_Dash.length > 0) {
  //   await maxpain_Dash[0].click();
  //   await hold(1000);
  //   console.log('  Maxpain Dashboard  ');
  // }

  // // maxpain  Search Field
  // const maxpain_Search = await arg.$x("//div [@id = 'charts-maxpain-search']");

  // if (maxpain_Search.length > 1) {
  //   await maxpain_Search[1].click();
  //   await hold(2000);
  //   console.log('  Maxpain Search Field  ');
  // }

  // // maxpain Date picker  Field
  // const maxpain_Datepicker = await arg.$x("//div [@id = 'charts-maxpain-select-with-title-date']");

  // if (maxpain_Datepicker.length > 0) {
  //   await maxpain_Datepicker[0].click();
  //   await hold(2000);
  //   console.log('  Maxpain Datepicker Field  ');
  // }
};

module.exports.charts_Tab = charts_Tab;
