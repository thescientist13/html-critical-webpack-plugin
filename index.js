const resolve = require('path').resolve;
const critical = require('critical');
const cleantmp = require('webpack-util-cleantmp').cleantmp;
const merge = require('merge');

function HtmlWebpackCriticalPlugin (options) {};

HtmlWebpackHarddiskPlugin.prototype.emit = function(compilation, callback) {
  const options = this.options;
  const subscription = cleantmp({
    prefix: 'criticalcss',
    globToDisk: '**/*.+(css|html)',
    globFromDisk: '**/*.+(css|html)',
    assets: compilation.assets
  })
  .subscribe((tmp) => {
    const opts = merge(options, {
      base: resolve(tmp, options.base || ''),
      dest: resolve(tmp, options.dest)
    });

    critical.generate(opts, (err, output) => {
      subscription.unsubscribe();
      callback(err);
    });
  })
};

HtmlWebpackHarddiskPlugin.prototype.apply(compiler) {
  compiler.plugin('compilation', function(compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function(htmlPluginData, callback) {
      this.emit.bind(this)
      callback(null, htmlPluginData);
    });
  });
};

module.exports = HtmlWebpackCriticalPlugin
