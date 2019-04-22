/**
 *Created by Mikael Lindahl on 2019-04-22
 */

"use strict";

import "./team_row.scss"

export default function TeamRow(props) {
    ''
    return (
        <div className={'team-row-content team-row d-flex flex-row align-items-center'}>
            <div className="team-row-hero"
                 style={{backgroundImage: "url('%s')".replace('%s', props.images.thumbnail)}}>
            </div>
            <div className={'ml-3'}>

                <div>{props.name} ({props.short_name})</div>

                <div className={'d-flex flex-row align-items-center'}>
                    {/*<div className={'team-row-hero'}> <img src={props.images.thumbnail}/></div>*/}

                    <div><img src={props.country.images.thumbnail}/></div>
                    <div className={'ml-2'} >{props.game.title}</div>
                </div>
            </div>
        </div>
    )
}