/**
 *Created by Mikael Lindahl on 2019-04-22
 */

"use strict";

const debug = require('debug')('abios-rpp:pages:home');

import "./serie_row.scss"

import enableDebug from "../lib/enable_debug.jsx"

enableDebug();


function getDetails(props) {

    const t1 = props.rosters[0].teams[0] || props.rosters[0].players[0]
    const t2 = props.rosters[1].teams[0] || props.rosters[1].players[0]

    return (
        <div className={'mt-2 d-flex flex-row align-items-center'}>
            <div className={'mr-2'}><img src={t1.country.images.thumbnail}/></div>
            <div>{t1.short_name || t1.nick_name}</div>
            <div className="mx-3">.vs</div>
            <div className={'mr-2'}><img src={t2.country.images.thumbnail}/></div>
            <div>{t2.short_name || t2.nick_name}</div>
        </div>
    )

}

export default function SerieRow(props) {

    // debug(props)

    return (
        <div className={'row-serie d-flex flex-row align-items-center'}>
            <div className="row-serie-hero"
                 style={{backgroundImage: "url('%s')".replace('%s', props.game.images.rectangle)}}>
            </div>
            <div className={'row-serie-content d-flex flex-row align-items-center'}>
                <div className={'d-flex flex-row align-items-center'}>
                    <div className={'mx-3'}>{props.start.slice(11, 16)}</div>
                    <div className={'row-details'}>
                        <div><strong>{props.title}</strong></div>
                        {props.rosters.length > 1 && getDetails(props)}

                    </div>
                </div>
            </div>

        </div>
    )
}