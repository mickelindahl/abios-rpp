/**
 *Created by Mikael Lindahl on 2019-04-19
 */

"use strict";


const debug = require( 'debug' )( 'abios-rpp:routes:data_home' );
const fetch = require('isomorphic-unfetch')
const moment = require('moment');
const tr = require('../lib/transform');

module.exports = [

    {

        method: 'GET',
        path: '/data/home',

        handler: async ( request, h ) => {

            debug( 'data_home', request.path );


            let headers={
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };

            let url="https://api.abiosgaming.com/v2/series?starts_after="+moment().format('YYYY-MM-DDTHH:mm:ss')+'Z';
            url=url+'&access_token='+request.server.app.credentials.access_token;


            const res = await fetch(url,{headers}).then(res=>res.json());
            let series=res.data;

            let teams={}
            let games={}
            series.forEach(s=>{

                games[s.game.id]=s.game.title

                s.rosters.forEach(r=>{

                    r.teams.forEach(t=>{

                        teams[t.id]=t
                        t.game=s.game


                    })

                })

            });


            teams= tr.sort(tr.dicToList(teams), t=>t.name);
            series = tr.sort(series, s=>s.start)
            games= tr.sort(tr.dicToList(games), g=>g);

            return { greeding:'Hello World', series, teams, games }

        }
    }
]