const { hold, take_screenShot } = require('./utils');
const { clicking_Button, OpenAndClose } = require('./Strategy/Button');

/**
 *
 * @param {*} arg  - page
 * @param {*} brwsr - browser
 */
const analysis_Tab = async function (arg, brwsr) {
  // ? clcik analysis page
  await OpenAndClose(arg, "//div [@id ='nav-Analysis']");

  //  ? click Fundamental tab
  const fundamental = await clicking_Button(arg, "//a [@id ='navlink-0']", '    Fundamental');

  if (fundamental) {
    console.log('        11.1   Navigate to Analysis Page');

    await hold(1000);
    const fundamentalDate = await clicking_Button(
      arg,
      "//div [@id ='fundamental-select-with-title-date']",
      '    Fechnical Date Picker'
    );

    if (fundamentalDate) {
      await hold(1000);
      //   const fundamentalSearch = await clicking_Button(
      //     arg,
      //     "//span[@id ='react-select-5-live-region']",
      //     'Fundamental Search'
      //   );
      // } else {
      //   await take_screenShot(arg, '    Fundamental Search');
    }

    await hold(1000);
    // ?
    await OpenAndClose(arg, "//div [@id ='nav-Analysis']");
    // ?
    const technical = await clicking_Button(arg, "//a [@id ='navlink-1']", '    Technical');

    if (technical) {
      await hold(1000);
      // ? click dashboard
      const dash = await clicking_Button(arg, "//span [@id ='overview-btn']", '    Technical Dashboard');

      if (dash) {
        // ? click search
        const search = await clicking_Button(arg, "//div [@id ='technical-overview-search']", '    Technical Search');

        if (search) {
          // ? click date picker
          const date = await clicking_Button(
            arg,
            "//div [@id ='technical-overview-select-with-title-date']",
            '    Technical Date Picker'
          );

          if (date) {
            // ? technical page
            const tp = await clicking_Button(arg, "//p [contains(text(),'Technical Page')]", '    Technical Page');

            if (tp) {
              await hold(1000);
              //  ? pivotspoint table
              const pivot = await clicking_Button(
                arg,
                "//p [contains(text(),'Pivotspoint Table')]",
                '    Technical Pivotspoint Table'
              );

              if (pivot) {
                await hold(1000);
                // ? homepage button
                const homepage = await clicking_Button(arg, "//span [@id ='technical-btn']", '    Home Page');

                if (homepage) {
                  await hold(1000);
                  console.log('        Analysis Homepage Successfully');
                }
              } else {
                await take_screenShot(arg, 'Pivotspoint Table');
              }
            } else {
              await take_screenShot(arg, 'Technical Page');
            }
          } else {
            await take_screenShot(arg, 'Technical Date Picker');
          }
        } else {
          await take_screenShot(arg, 'Technical Search');
        }
      } else {
        await take_screenShot(arg, 'Technical Dashboard');
      }
    }
  } else {
    await take_screenShot(arg, 'Fundamental');
  }
};

module.exports.analysis_Tab = analysis_Tab;
