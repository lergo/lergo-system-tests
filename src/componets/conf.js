

var _  =  require('lodash');
var path = require('path');
var defaults = require( path.join(__dirname, '../../conf/defaults.json' ) );

var meConfPath = process.env.OVERRIDES_JSON || path.resolve(path.join(__dirname, '../../conf/dev/overrides.json'));


var overrides = require( meConfPath );

_.merge(exports, defaults, overrides);