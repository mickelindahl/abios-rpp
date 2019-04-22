/**
 *Created by Mikael Lindahl on 2019-04-19
 */


"use strict";

import FilterCheckbox from "./filter_checkbox";

const debug = require('debug')('abios-rpp:pages:home');

import React from 'react';

import FilterCheckboxes from "./filter_checkboxes"
import enableDebug from "../lib/enable_debug.jsx"
import SeriesTable from "./series_table";
import TeamsTable from "./teams_table";


enableDebug();


export default class Panel extends React.Component {

    constructor(props) {

        super(props);

        this.state={
            filter_games:{},
            grouped_by_game:false
        }

        this.onChangeFilterGames = this.onChangeFilterGames.bind(this);
        this.onChangeFilterGroupByGame = this.onChangeFilterGroupByGame.bind(this);

    }

    onChangeFilterGames(e){

        debug('onChangeFilterGames', e);

        const game = e.currentTarget.value;
        const checked = e.currentTarget.checked;

        let filter_games=JSON.parse(JSON.stringify({...this.state.filter_games}))

        debug('filter_games', filter_games);

        filter_games[game] = checked;

        this.setState({filter_games})

    }

    onChangeFilterGroupByGame(e){

        const grouped_by_game = e.currentTarget.checked;

        this.setState({grouped_by_game})

    }1

    getTable(type){

        if(type==='team'){
            return   <TeamsTable entries={this.props.entries}
                                   filter_games={this.state.filter_games}
                                   grouped_by_game={this.state.grouped_by_game}
                                   skip_divider={this.state.grouped_by_game}/>
        }else if (type==='serie'){

            return   <SeriesTable entries={this.props.entries}
                                   filter_games={this.state.filter_games}
                                   grouped_by_game={this.state.grouped_by_game}
                                   skip_divider={this.state.grouped_by_game}/>

        }


    }

    render() {

        debug('entries')

        return (
            <div>

                <FilterCheckboxes title={'Games'}
                                  options={this.props.games}
                                  onChange={this.onChangeFilterGames}
                />
                <FilterCheckboxes title={'Group by game'}
                             options={['Yes']}
                             onChange={this.onChangeFilterGroupByGame}/>

                {this.getTable(this.props.type)}
            </div>
        )
    }
}
