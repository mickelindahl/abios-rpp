/**
 *Created by Mikael Lindahl on 2019-04-21
 */

"use strict";

const dotenv = require('dotenv');
const fetch = require('isomorphic-unfetch')
const qs = require("querystring");
const moment = require('moment')


var fs = require('fs');

dotenv.config();

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

fetch(url, options)
    .then(res =>res.json())
    .then(res=> {
        console.log(res);


        body={access_token:res.access_token}
        let headers={
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // Authorization:'Bearer '+res.access_token
        }
        // url="https://api.abiosgaming.com/v2/series?games[]=3&access_token="+res.access_token;
        url="https://api.abiosgaming.com/v2/series?starts_after="+moment().format('YYYY-MM-DDTHH:mm:ss')+'Z'

        url=url+'&access_token='+res.access_token;

        console.log(url)

        return fetch(url,{
            headers
        })


    })
    .then(res=>res.json())
    .then(res=>{

        console.log(res)

        var json = JSON.stringify(res);
        fs.writeFileSync('series.json', json, 'utf8');

    })
    .catch(err => {

        console.log(err)

    })