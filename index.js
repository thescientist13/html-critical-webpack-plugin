const critical = require('critical');

class HtmlCriticalWebpackPlugin {
  constructor(options) {
    this.options = options;
  }

  emit(compilation, callback) {
    critical.generate(this.options, (err) => {
      callback(err);
    });
  }

  apply(compiler) {

    compiler.hooks.afterEmit.tapAsync('HtmlCriticalWebpackPlugin', (compilation, callback) => {
      this.emit(compilation, callback);
    });

  }
}

module.exports = HtmlCriticalWebpackPlugin;

// function HtmlCriticalWebpackPlugin (options) {
//   this.options = options;
// }

// HtmlCriticalWebpackPlugin.prototype.emit = function(compilation, callback) {
//   critical.generate(this.options, (err) => {
//     callback(err);
//   });
// };

// HtmlCriticalWebpackPlugin.prototype.apply = function(compiler) {
//   var self = this;

//   compiler.hooks.afterEmit.tapAsync('HtmlCriticalWebpackPlugin', function (compilation, callback) {
//     self.emit(compilation, callback);
//   });
// };