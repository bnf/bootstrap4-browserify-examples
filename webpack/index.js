"use strict";

import { Carousel, Popover } from 'bootstrap';
import $ from 'jquery';

/* Fix so that webpack doesn't drop them (because they seem unused) */
//var bundle = [ $, Carousel, Popover ];

/*
console.log(Popover)
console.log($);
console.log($.fn);
console.log($.fn.carousel);
console.log($.fn.popover);

console.log($('[data-toggle="popover"]'));
*/

$('[data-toggle="popover"]').popover();


//window.bsPopover = Popover
window.fooJQuery = $
