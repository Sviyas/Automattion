// const { OpenAndClose, clicking_Button } = require('./Utils/Functions');
// const { hold, take_screenShot } = require('./Utils/utils.js');
const { hold, take_screenShot } = require('../Utils/utils');
const { OpenAndClose, clicking_Button } = require('../Utils/Functions');
/**
 *
 * @param {*} arg  - page
 * @param {*} brwsr - browser
 */
const charts_Tab = async function (arg, brwsr) {
  await hold(1000);
  //  ? Chart Tab Open
  console.log(`                                                      `);

  await OpenAndClose(arg, "//div [@id ='nav-Charts']");

  // ? Charts IV Smile

  const iv_Smile = await clicking_Button(arg, "//a [@id ='navlink-0']", `    IV Skew`);

  if (iv_Smile) {
    await hold(1500);

    // ? check IV smile dashboard
    const iv_Dash = await clicking_Button(arg, "//span[contains(text(), 'ivSmile')]", `    IV Dashboard`);

    if (iv_Dash) {
      await hold(1000);
      //  ? check IV search Field
      const iv_Search = await clicking_Button(arg, "//div [@id ='charts-ivSmile-search']", `    IV Search`);

      if (iv_Search) {
        await hold(1000);
        // ? click IV Date Picker
        const iv_Datepicker = await clicking_Button(arg, "//div[@id = 'charts-ivSmile-select-with-title-date']", `    IV Date Picker`);

        if (iv_Datepicker) {
          await hold(1000);
          // ? Next Option Interest
          await OpenAndClose(arg, "//div [@id ='nav-Charts']");

          // ? Open Interest
          const OI = await clicking_Button(arg, "//a [@id ='navlink-1']", `    Open Interest`);

          if (OI) {
            await hold(1000);
            //?  close button

            // ? OI dashboard
            const oi_Dash = await clicking_Button(arg, "//span[contains(text(), 'oi')]", `    OI Dashboard`);

            if (oi_Dash) {
              // ?
              await hold(1000);

              const oi_Search = await clicking_Button(arg, "//div [@id = 'charts-oi-search']", `    OI Search`);

              if (oi_Search) {
                await hold(1000);
                // ?
                const oi_Filter = await clicking_Button(arg, "//div [@id = 'charts-oi-select-with-title-c1']", `    OI Filter`);

                if (oi_Filter) {
                  // ?
                  await hold(1000);

                  // ? OI Date picker
                  const oi_DatePicker = await clicking_Button(
                    arg,
                    "//div [@id = 'charts-oi-select-with-title-date']",
                    `    OI Date Picker`,
                  );

                  if (oi_DatePicker) {
                    // ?
                    await hold(1000);
                    //  ? OI Date Picker Field
                  } else {
                    await hold(1000);
                    await take_screenShot(arg, `OI Date Picker`);
                  }
                } else {
                  await hold(1000);
                  await take_screenShot(arg, `OI Filter`);
                }
              } else {
                await hold(1000);
                await take_screenShot(arg, `OI Search`);
              }
            } else {
              await hold(1000);
              await take_screenShot(arg, `OI Dashboard`);
            }
          } else {
            await hold(1000);
            await take_screenShot(arg, `Open Interest`);
          }
        } else {
          await hold(1000);
          await take_screenShot(arg, `IV Date Picker`);
        }
      } else {
        await hold(1000);
        await take_screenShot(arg, `IV Search`);
      }
    } else {
      await hold(1000);
      await take_screenShot(arg, `IV Dashboard`);
    }
  } else {
    await hold(1000);
    await take_screenShot(arg, `IV Smile`);
  }

  // ? Greeks Tab

  await OpenAndClose(arg, "//div [@id ='nav-Charts']");

  await hold(1000);

  const greeks = await clicking_Button(arg, "//a [@id ='navlink-2']", `    Greeks`);

  if (greeks) {
    await hold(2000);
    // ? close tab

    // ? Greeks Dashboard
    const greeks_Dash = await clicking_Button(arg, "//span [@id ='greeks-btn']", `    Greek Dashhboard`);

    if (greeks_Dash) {
      //  ?
      await hold(1000);

      const greeks_Search = await clicking_Button(arg, "//div [@id ='charts-greeks-search']", `    Greek Search`);

      if (greeks_Search) {
        // ?
        await hold(1000);
        // ?
        const greeks_DatePicker = await clicking_Button(
          arg,
          "//div [@id ='charts-greeks-select-with-title-date']",
          `    Greek Date Picker`,
        );

        if (greeks_DatePicker) {
          await OpenAndClose(arg, "//div [@id ='charts-greeks-select-with-title-date']");
          await hold(1000);
          // ? Click Call button on chart
          const call = await clicking_Button(arg, "//div [@id ='select-call-put-btn-true']", `    Greek Call`);

          if (call) {
            await hold(1500);
            // ?  open again click Max Pain

            await OpenAndClose(arg, "//div [@id ='nav-Charts']");

            // ? Max Pain Page

            const maxPain = await clicking_Button(arg, "//a [@id ='navlink-3']", `    MaxPain`);

            if (maxPain) {
              await hold(1000);

              // ?
              const maxpain_Dash = await clicking_Button(arg, "//span [@id ='maxpain-btn']", `    MaxPain Dashboard`);

              if (maxpain_Dash) {
                await hold(1000);
                // ? click maxpain Search
                const maxpain_Search = await clicking_Button(arg, "//div [@id ='charts-maxpain-search']", `    MaxPain Search`);

                if (maxpain_Search) {
                  // ?
                  await hold(1000);
                  const maxpain_Datepicker = await clicking_Button(
                    arg,
                    "//div [@id ='charts-maxpain-select-with-title-date']",
                    `    Maxpain Date Picker`,
                  );

                  if (maxpain_Datepicker) {
                    // ??   goto homepage
                    const hompage = await clicking_Button(arg, "//span [@id ='charts-btn']", `    Maxpain Homepage`);
                    console.log(`                                                      `);
                    console.log(`          Successfully Navigated to Charts Page 🫡`);
                    console.log(`                                                      `);

                    if (!hompage) {
                      await hold(1000);
                      await take_screenShot(arg, `Charts Home Page`);
                    }
                  } else {
                    await hold(1000);
                    await take_screenShot(arg, `Maxpain Date Picker`);
                  }
                } else {
                  await hold(1000);
                  await take_screenShot(arg, `Maxpain Search`);
                }
              } else {
                await hold(1000);
                await take_screenShot(arg, `Maxpain Dashboard`);
              }
            } else {
              await hold(1000);
              await take_screenShot(arg, `Maxpain`);
            }
          } else {
            await hold(1000);
            await take_screenShot(arg, `Greeks Call`);
          }
        } else {
          await hold(1000);
          await take_screenShot(arg, `Greeks Date Picker`);
        }
      } else {
        await hold(1000);
        await take_screenShot(arg, `Greeks Search`);
      }
    } else {
      await hold(1000);
      await take_screenShot(arg, `Greeks Dash`);
    }
  } else {
    await hold(1000);
    await take_screenShot(arg, `Greeks`);
  }
};

module.exports.charts_Tab = charts_Tab;
