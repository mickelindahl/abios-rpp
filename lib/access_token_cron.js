/**
 *Created by Mikael Lindahl on 2019-04-21
 */

"use strict";

const debug = require( 'debug' )( 'abios-rpp:lib:access_token_cron' );
const fetch = require('isomorphic-unfetch')
const qs = require("querystring");

const run=async function(server) {

    let body = qs.stringify({ grant_type: 'client_credentials',
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET });

    let url = 'https://api.abiosgaming.com/v2/oauth/access_token?';//+query

    let options = {
        method: "POST",
        body,
        headers: {
            "content-type": "application/x-www-form-urlencoded"
        },
    };

    const credentials = await fetch(url, options).then(res =>res.json());

    server.app={credentials};

    debug('fetch access doken')

}

var CronJob = require('cron').CronJob;

function start(server){

    new CronJob('0 0 * * * *', ()=>run(server) , null, true, 'Europe/Stockholm');

}


module.exports={
    run,
    start
}
