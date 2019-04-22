/**
 *Created by Mikael Lindahl on 2019-04-22
 */

"use strict";


import FilterCheckbox from "./filter_checkbox"


export default function FilterCheckboxes(props) {

    return (
        <div key={props.title}
             className={'row'}>
            <div key={'title'}
                 className={'col-sm-4'}>
                {props.title.toUpperCase()}
            </div>
            <div key={'filter'}
                 className={'d-flex col-sm-8'}>
                <div className={'d-flex flex-wrap'}>
                    {props.options.map(option => <FilterCheckbox key={option}
                                                                 option={option}
                                                                 onChange={props.onChange}/>)}
                </div>
            </div>
        </div>
    )
}