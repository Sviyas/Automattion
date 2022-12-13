const { hold } = require('./utils');
// const { analysis_Op } = require('./AnalysisOpenClose');
const { clicking_Button, OpenAndClose } = require('./Strategy/Button');

const analysis_Tab = async function (arg, brwsr) {
  // ? clcik analysis page
  await OpenAndClose(arg, "//a [@id ='navlink-0']");

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
      await OpenAndClose(arg, "//a [@id ='navlink-0']");
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

        await clicking_Button();
      }
    }
  }
};

module.exports.analysis_Tab = analysis_Tab;
