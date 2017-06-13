"use strict";

// jQuery and Popper are required to be available globally by bootstrap
var $ = require('jquery')
global.jQuery = $
global.Popper = require('popper.js');

require('bootstrap');

$('[data-toggle="popover"]').popover()
