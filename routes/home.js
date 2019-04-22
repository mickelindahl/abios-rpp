/**
 *Created by Mikael Lindahl on 2019-04-19
 */

"use strict";


const nw = require('../lib/next_wrapper');

module.exports = [

    {

        method: 'GET',
        path: '/',
        handler: nw.pathWrapper('/home'),
    },

];