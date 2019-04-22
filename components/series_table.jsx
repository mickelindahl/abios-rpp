/**
 *Created by Mikael Lindahl on 2019-04-22
 */

"use strict";

const debug = require('debug')('abios-rpp:pages:home');

import enableDebug from "../lib/enable_debug.jsx"
import SerieRow from "./serie_row"
import SerieRowDateDivider from "./serie_date_divider_row"
import tr from "../lib/transform"


enableDebug();


export default function SeriesTable(props) {

    let entries=[]

    props.entries.forEach(s=>{

        if (props.filter_games[s.game.title]){entries.push(s)}

    });


    entries=entries.length>0 ? entries : props.entries;

    if (props.grouped_by_game){

        entries = tr.sort(entries, s=>s.game.title)
    }else{

        entries = tr.sort(entries, s=>s.start)
    }

    let previous;

    return (
        <div>

            {entries.map(s=>{

                const start=s.start.split(' ')[0]

                let add=[]

                if(!props.skip_divider && previous && previous<start ){

                    add.push(<SerieRowDateDivider date={s.start}/>)

                }

                previous=start;

                add.push(<SerieRow {...s}/>)

                return add

            })}

        </div>
    )
}