/**
 *Created by Mikael Lindahl on 2019-04-22
 */

"use strict";

const debug = require('debug')('abios-rpp:pages:home');

import "./serie_row.scss"

import _c from "../lib/constants"
import enableDebug from "../lib/enable_debug.jsx"
import moment from "moment"

enableDebug();

export default function SerieRowDivider(props) {

    // debug(props)

    return (
        <div key={props.date}
             className={'serie-row serie-row-date-divider d-flex flex-row align-items-center'}>
            {moment(props.date).format(_c.DATE_FORMAT_PRETTY)}
        </div>
    )
}