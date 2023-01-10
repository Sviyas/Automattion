// const { hold, take_screenShot } = require('../Utils/utils');
// const { clicking_Button, OpenAndClose } = require('../Utils/Functions');

const { hold, take_screenShot } = require('../Utils/utils');
const { clicking_Button, OpenAndClose } = require('../Utils/Functions');
/**
 *
 * @param {*} arg  - page
 * @param {*} brwsr - browser
 */
const analysis_Tab = async function (arg, brwsr) {
  await hold(1000);
  console.log(`                                                      `);
  // console.log(`              Navigate to Analysis Page`);
  // ? clcik analysis page
  await OpenAndClose(arg, "//div [@id ='nav-Analysis']");

  //  ? click Fundamental tab
  await hold(1000);
  // const fundamentalDate = await clicking_Button(
  //   arg,
  //   "//div [@id ='fundamental-select-with-title-date']",
  //   '    Fechnical Date Picker'
  // );

  // if (fundamentalDate) {
  //   await hold(1000);
  //   const fundamentalSearch = await clicking_Button(
  //     arg,
  //     "//span[@id ='react-select-5-live-region']",
  //     'Fundamental Search'
  //   );
  // } else {
  //   await take_screenShot(arg, '    Fundamental Search');
  // }

  await hold(1000);
  // ?
  // ?
  const technical = await clicking_Button(arg, "//a [@id ='navlink-0']", `    Technical`);

  if (technical) {
    await hold(1000);
    // ? click dashboard
    const dash = await clicking_Button(arg, "//span [@id ='overview-btn']", `    Technical Dashboard`);

    if (dash) {
      // ? click search
      const search = await clicking_Button(arg, "//div [@id ='technical-overview-search']", `    Technical Search`);

      if (search) {
        // ? click date picker
        const date = await clicking_Button(arg, "//div [@id ='technical-overview-select-with-title-date']", `    Technical Date Picker`);

        if (date) {
          // ? technical page
          const tp = await clicking_Button(arg, "//p [contains(text(),'Technical Page')]", `    Technical Page`);

          if (tp) {
            await hold(1000);
            //  ? pivotspoint table
            const pivot = await clicking_Button(arg, "//p [contains(text(),'Pivotspoint Table')]", `    Technical Pivotspoint Table`);

            if (pivot) {
              await hold(1000);
              await OpenAndClose(arg, "//div [@id ='nav-Analysis']");
              const technicalChart = await clicking_Button(arg, "//a [@id ='navlink-1']", `    Technical Chart `);

              await hold(3000);
              // ? homepage button
              // const homepage = await clicking_Button(arg, "//span [@id ='technical-btn']", `    Home Page`);

              if (technicalChart) {
                await hold(1000);
                console.log(`                                                      `);
                console.log(`        Successfully Navigated to Analysis Page 🫡`);
                console.log(`                                                      `);
              }
            } else {
              await take_screenShot(arg, `Pivotspoint Table`);
            }
          } else {
            await take_screenShot(arg, `Technical Page`);
          }
        } else {
          await take_screenShot(arg, `Technical Date Picker`);
        }
      } else {
        await take_screenShot(arg, `Technical Search`);
      }
    } else {
      await take_screenShot(arg, `Technical Dashboard`);
    }
  }
};

module.exports.analysis_Tab = analysis_Tab;
