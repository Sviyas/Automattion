// const editadd = await clicking_Button(arg, "//button [contains(text(), 'EDIT/ADD')]", '    Edit/Add');

// console.log('        ✅ EDIT / ADD  BUTTON');
// if (editadd) {
//   // ? click OPT button

//   const opt = await clicking_Button(arg, "//li [@id = 'OPT-slider-header-btn']", '    OPT');

//   if (opt) {
//     // ? check related buttons
//     const strategyDate = await clicking_Button(
//       arg,
//       "//div [@id = 'strategy-view-select-with-title-st-slider-date']",
//       '    Strategy Date Picker'
//     );

//     // ? click LTP Sell button
//     if (strategyDate) {
//       await hold(1000);
//       // ? LTP Sell button
//       const ltpSell = await clicking_Button(arg, "//div [@id ='atm-strike-index-ltp-CE-SELL']", '    LTP SELL');

//       if (ltpSell) {
//         // ?
//         // ? Click Done

//         const done = await clicking_Button(arg, "//button [@id ='stratrgy-done-btn']", '    Done');

//         if (done) {
