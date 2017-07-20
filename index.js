const critical = require('critical');

function HtmlWebpackPluginCritical (options) {
  this.options = options;
};

HtmlWebpackPluginCritical.prototype.emit = function(compilation, callback) {
  critical.generate(this.options, (err, output) => {
    callback(err);
  });
};

HtmlWebpackPluginCritical.prototype.apply = function(compiler) {
  var self = this;
  compiler.plugin('after-emit', function (compilation, callback) {
    self.emit(compilation, callback);
  });
};

module.exports = HtmlWebpackPluginCritical
