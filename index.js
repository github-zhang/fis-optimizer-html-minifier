/*
 * fis
 * http://fis.baidu.com/
 */

'use strict';

var minify = require('html-minifier');

module.exports = function(content, file, conf){
    conf.processImport = false;
    return minify(content, conf);
};

