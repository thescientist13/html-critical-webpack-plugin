const assert = require('assert');
const HtmlCriticalWebpackPlugin = require('../src/index');

describe('HtmlCriticalWebpackPlugin', () => {

  describe('webpack hooks', () => {
    
    it('HtmlCriticalWebpackPlugin has the required apply method', (done) => {
      let hasRequiredFunction = typeof new HtmlCriticalWebpackPlugin().apply === 'function';
  
      assert.equal(hasRequiredFunction, true);
      
      done();
    });
  
    it('HtmlCriticalWebpackPlugin has the required emit method', (done) => {
      let hasRequiredFunction = typeof new HtmlCriticalWebpackPlugin().emit === 'function';
  
      assert.equal(hasRequiredFunction, true);

      done();
    });    

  });

});