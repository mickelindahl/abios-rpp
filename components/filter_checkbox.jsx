/**
 *Created by Mikael Lindahl on 2019-04-22
 */

"use strict";


import "./filter-checkbox.scss"

export default function FilterCheckbox(props) {

    return (
        <div className={'mr-3 d-flex flex-row align-items-center'}>
            <input className={'mr-1'}
                   type={"checkbox"}
                   value={props.option}
                   onChange={props.onChange}/>
            <div className={'filter-checkbox-title d-flex flex-row'}>{props.option}</div>

        </div>
    )
}

