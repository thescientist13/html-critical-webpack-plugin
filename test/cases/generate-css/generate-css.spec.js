const assert = require('assert');
const webpackConfig = require('./webpack.config');
const webpack = require('webpack');

describe('HtmlCriticalWebpackPlugin Cases: Generate CSS', () => {

  it('do something', (done) => {
    webpack(webpackConfig, () => {
      console.log('webpack run!');
      done();
    })
  });

})
// test('BuildProfilerPlugin has the required `isAcceptableDuration` method', t => {
//   let hasRequiredFunction = typeof new BuildProfilerPlugin().isAcceptableDuration === TYPE_OF_FUNCTION;

//   t.true(hasRequiredFunction);
// });

// test('BuildProfilerPlugin.isAcceptableDuration returns true when within the treshold', t => {
//   let startTime = new Date().getTime();
//   let endTime = startTime + 50;
//   let isAcceptableDuration = new BuildProfilerPlugin().isAcceptableDuration(startTime, endTime);

//   t.true(isAcceptableDuration);
// });

// test('BuildProfilerPlugin.isAcceptableDuration returns false when not within the treshold', t => {
//   let startTime = new Date().getTime();
//   let endTime = startTime + 5000;
//   let isAcceptableDuration = new BuildProfilerPlugin().isAcceptableDuration(startTime, endTime);

//   t.false(isAcceptableDuration);
// });