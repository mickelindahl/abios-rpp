/**
 *Created by Mikael Lindahl on 2019-04-22
 */

"use strict";

import tr from "../lib/transform";

const debug = require('debug')('abios-rpp:components:teams_table');

import TeamRow from "./team_row"

import enableDebug from "../lib/enable_debug.jsx"

enableDebug();


export default function TeamsTable(props) {

    let entries=[];

    props.entries.forEach(s=>{

        if (props.filter_games[s.game.title]){entries.push(s)}

    });


    entries=entries.length>0 ? entries : props.entries;

    if (props.grouped_by_game){

        entries = tr.sort(entries, s=>s.game.title)

    }else{

        entries = tr.sort(entries, s=>s.name)
    }

    return (
        <div>

            {entries.map(t=><TeamRow key={t.name} {...t}/>)}

        </div>
    )
}