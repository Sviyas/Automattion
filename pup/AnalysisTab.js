const { hold } = require('./utils');
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
      // ?
      await OpenAndClose(arg, "//div [@id ='nav-Analysis']");
      // ?
      const technical = await clicking_Button(arg, "//a [@id ='navlink-1']", '    Technical');

      if (technical) {
        // ? click dashboard
        await clicking_Button(arg, "//span [@id ='overview-btn']", '    Technical Dashboard');

        // ? click search
        await clicking_Button(arg, "//div [@id ='technical-overview-search']", '    Technical Search');

        // ? click date picker
        await clicking_Button(
          arg,
          "//div [@id ='technical-overview-select-with-title-date']",
          '    Technical Date Picker'
        );
        // ? technical page
        await clicking_Button(arg, "//p [contains(text(),'Technical Page')]", '    Technical Page');
        //  ? pivotspoint table
        await clicking_Button(arg, "//p [contains(text(),'Pivotspoint Table')]", '    Technical Pivotspoint Table');

        // ? homepage button
        await clicking_Button(arg, "//span [@id ='technical-btn']", '    Home Page');
      }
    }
  }
};

module.exports.analysis_Tab = analysis_Tab;
