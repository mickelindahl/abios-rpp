/**
 *Created by Mikael Lindahl on 2019-04-21
 */

"use strict";

/* eslint no-extend-native: 0 */
// core-js comes with Next.js. So, you can import it like below
import includes from 'core-js/library/fn/string/virtual/includes'
import repeat from 'core-js/library/fn/string/virtual/repeat'
import startsWith from 'core-js/library/fn/string/virtual/starts-with'
import assign from 'core-js/library/fn/object/assign'
import find from 'core-js/library/fn/array/virtual/find'
import findIndex from 'core-js/library/fn/array/virtual/find-index'
import isNaN from 'core-js/library/fn/number/is-nan'
// import random from 'core-js/library/fn/math/random'

// import includes_object from 'core-js/library/fn/object/includes'

// Add your polyfills
// This files runs at the very beginning (even before React and Next.js core)
console.log('Load your polyfills')

String.prototype.includes = includes;
String.prototype.repeat = repeat;
String.prototype.startsWith = startsWith;
Object.assign = assign;
Array.prototype.find = find;
Array.prototype.findIndex = findIndex;
Number.isNaN=isNaN;
// Math.random=random
// Object.includes=includes_object
