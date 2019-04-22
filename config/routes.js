/**
 *Created by Mikael Lindahl on 2019-04-19
 */

"use strict";

const debug = require('debug')('abios-rpp:config:routes');


module.exports = function ( server ) {

    var paths = [
        '../routes/data_home.js',
        '../routes/home.js',
        '../routes/next.js',
    ];

    for ( var i in paths ) {

        debug(i,paths[i]);

        server.route( require( paths[i] ) );

    }
}