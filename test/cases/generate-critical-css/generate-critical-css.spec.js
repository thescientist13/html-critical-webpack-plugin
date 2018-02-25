const assert = require('assert');
const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const path = require('path');
const rimraf = require('rimraf');
const webpackConfig = require('./webpack.config');
const webpack = require('webpack');

describe('HtmlCriticalWebpackPlugin Cases: Generate Critical CSS', () => {
  const buildDirectory = path.resolve(__dirname, 'build');

  beforeEach(() => {
    rimraf(buildDirectory, () => {
      console.log('build directory cleaned');
    });
  });

  // <link href="styles.da22eda767cd98613b04.0e398130.css" rel="preload" as="style" onload="this.onload=null;this.rel='stylesheet'">
  // <noscript><link href="styles.da22eda767cd98613b04.0e398130.css" rel="stylesheet"></noscript>
  // <script>!function(t){"use strict";t.loadCSS||(t.loadCSS=function(){});var e=loadCSS.relpreload={};if(e.support=function(){var e;try{e=t.document.createElement("link").relList.supports("preload")}catch(t){e=!1}return function(){return e}}(),e.bindMediaToggle=function(t){var e=t.media||"all";function a(){t.media=e}t.addEventListener?t.addEventListener("load",a):t.attachEvent&&t.attachEvent("onload",a),setTimeout(function(){t.rel="stylesheet",t.media="only x"}),setTimeout(a,3e3)},e.poly=function(){if(!e.support())for(var a=t.document.getElementsByTagName("link"),n=0;n<a.length;n++){var o=a[n];"preload"!==o.rel||"style"!==o.getAttribute("as")||o.getAttribute("data-loadcss")||(o.setAttribute("data-loadcss",!0),e.bindMediaToggle(o))}},!e.support()){e.poly();var a=t.setInterval(e.poly,500);t.addEventListener?t.addEventListener("load",function(){e.poly(),t.clearInterval(a)}):t.attachEvent&&t.attachEvent("onload",function(){e.poly(),t.clearInterval(a)})}"undefined"!=typeof exports?exports.loadCSS=loadCSS:t.loadCSS=loadCSS}("undefined"!=typeof global?global:this);</script></head>
  // <body>
  // <script type="text/javascript" src="main.js"></script><script type="text/javascript" src="index.js"></script></body>

  describe('minomum configuration', () => {
    
    it('should generate the expected critical inline css style tag', (done) => {
      webpack(webpackConfig, () => {
        const indexHtmlString = fs.readFileSync(`${buildDirectory}/index.html`, {encoding: 'utf8'});
        const indexHtmlDom = new JSDOM(indexHtmlString);
        const inlineStyleTag = indexHtmlDom.window.document.querySelectorAll('style');
        
        assert.equal(inlineStyleTag.length, 1);
        assert.equal(inlineStyleTag[0].getAttribute('type'), 'text/css');

        done();
      });
    });

  })

});