"use strict";
var $ = require('jquery')
var Popper = require('popper.js')

global.jQuery = $
global.Popper = popper
require('bootstrap')

$('[data-toggle="popover"]').popover()
