"use strict";

import { resolve } from 'path';
const critical = require('critical');
import { cleantmp } from 'webpack-util-cleantmp';

export default {
  constructor(public options: CriticalPluginOptions) {
    if (!options.dest) {
      throw new Error('A `dest` option is required for the Critical webpack plugin');
    }
  }

  emit(compilation, callback) {
    const options = this.options;
    const subscription = cleantmp({
      prefix: 'criticalcss',
      globToDisk: '**/*.+(css|html)',
      globFromDisk: '**/*.+(css|html)',
      assets: compilation.assets
    })
    .subscribe((tmp) => {
      const opts = {...options, ...{
        base: resolve(tmp, options.base || ''),
        dest: resolve(tmp, options.dest)
      }};

      critical.generate(opts, (err, output) => {
        subscription.unsubscribe();
        callback(err);
      });
    })
  }

  apply(compiler) {
    compiler.plugin('compilation', function(compilation) {
      console.log('The compiler is starting a new compilation...');

      compilation.plugin('html-webpack-plugin-after-emit', function(htmlPluginData, callback) {
        this.emit.bind(this)
        callback(null, htmlPluginData);
      });
    });
  }
}