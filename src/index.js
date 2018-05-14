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