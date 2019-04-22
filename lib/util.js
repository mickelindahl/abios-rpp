/**
 *Created by Mikael Lindahl on 2019-04-19
 */

"use strict";


const debug = require( 'debug' )( 'abios-rpp:lib:util' );

import queryString from "qs";


function getQuery(req){


    let query =  req ? req.url.split('/')[req.url.split('/').length-1] : window.location.search;

    query = queryString.parse(query)


    return query


}

function getFullPath( req, url ) {

    let host = req ? req.headers.host : window.location.host;
    let protocol = req ? req.server.info.protocol : window.location.protocol.slice( 0, window.location.protocol.length - 1 );
    let path = protocol + '://' + host + url;

    return path

}

function getHeader( req ) {

    return req ? req.headers : {}

}

export default {

    getQuery,
    getFullPath,
    getHeader,

};