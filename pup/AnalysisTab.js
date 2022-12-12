const { hold } = require('./utils');
const { analysis_Op } = require('./AnalysisOpenClose');

const analysis_Tab = async function (arg, brwsr) {
  // open  tab
  await analysis_Op(arg);

  //  open fundamental
  const fundamental = await arg.$x("//p[contains(text(), 'Fundamental')]");

  if (fundamental.length > 0) {
    await fundamental[0].click();
    await hold(2000);
    console.log('11.1  Navigate to Fundamental Page');
  }

  await analysis_Op(arg);

  //  open technical
  const technical = await arg.$x("//p[contains(text(), 'Technical')]");

  if (technical.length > 0) {
    await technical[0].click();
    await hold(2000);
    console.log('11.2  Navigatet to Technical Page');
  }

  //  overview button
  const techOverview = await arg.$x("//p[contains(text(), 'Overview')]");

  if (techOverview.length > 0) {
    await techOverview[0].click();
    await hold(2000);
    console.log(' Overview Button ');
  }

  const techPage = await arg.$x("//p[contains(text(), 'Technical Page')]");

  if (techPage.length > 0) {
    await techPage[0].click();
    await hold(2000);
    console.log(' Technical Page Button ');
  }

  const pivotsPoint = await arg.$x("//p[contains(text(), 'Pivotspoint Table')]");

  if (pivotsPoint.length > 0) {
    await pivotsPoint[0].click();
    await hold(2000);
    console.log(' Pivotspoint Table Button');
  }
};

module.exports.analysis_Tab = analysis_Tab;
