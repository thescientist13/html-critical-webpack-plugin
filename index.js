const critical = require('critical');

function HtmlCriticalWebpackPlugin (options) {
  this.options = options;
};

HtmlCriticalWebpackPlugin.prototype.emit = function(compilation, callback) {
  critical.generate(this.options, (err, output) => {
    callback(err);
  });
};

HtmlCriticalWebpackPlugin.prototype.apply = function(compiler) {
  var self = this;
  compiler.hooks.afterEmit.tapAsync('HtmlCriticalWebpackPlugin', function (compilation, callback) {
    self.emit(compilation, callback);
  });
};

module.exports = HtmlCriticalWebpackPlugin;
