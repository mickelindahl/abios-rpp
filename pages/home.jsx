/**
 *Created by Mikael Lindahl on 2019-04-19
 */

"use strict";

const debug = require('debug')('abios-rpp:pages:home');

import "../styles/app.scss"

import React from 'react';

import enableDebug from "../lib/enable_debug.jsx"
import fetch from 'isomorphic-unfetch';
import Panel from "../components/panel";
import util from '../lib/util.js'

enableDebug();


export default class extends React.Component {

    static async getInitialProps({req}) {

        let query = util.getQuery(req) || {}
        let path = util.getFullPath(req, '/data/home');
        let headers = util.getHeader(req);

        const res = await fetch(path, {credentials: 'include', headers})
            .catch(err => {

                console.error(err)
                throw err

            });


        if (!res) {
            return {}
        } else {

            const props = await res.json();

            return {...props, query}

        }
    }

    constructor(props) {

        super(props);

        this.state = {
            filter_games: {}
        }

        this.onChangeFilterGames = this.onChangeFilterGames.bind(this)

    }

    onChangeFilterGames(e) {

        debug('onChangeFilterGames', e);

        const game = e.currentTarget.value;
        const checked = e.currentTarget.checked;

        let filter_games = {...this.state.filter}
        filter_games[game] = !checked;

        this.setState({filter_games})


    }

    render() {

        return (

            <div className={'container'}>
                <div className={'row'}>
                    <div key={'team'}
                         className={'col-sm-6'}>
                        <Panel type={'serie'}
                               entries={this.props.series}
                               games={this.props.games}/>

                    </div>
                    <div key={'team'}
                         className={'col-sm-6'}>
                        <Panel type={'team'}
                               entries={this.props.teams}
                               games={this.props.games}/>
                    </div>
                </div>
            </div>
        )
    }
}


// const columns_series = [
//     {
//         Header: 'Serie',
//         accessor: 'title',
//         filterable: true,
//     },
//     {
//         Header: 'Game',
//         accessor: 'game.title',
//         filterable: true,
//     },
//     {
//         Header: 'Start',
//         accessor: 'start',
//         filterable: true,
//     },
//
// ]
//
// const columns_teams = [
//     {
//         Header: 'Name',
//         accessor: 'name',
//         filterable: true,
//     },
//     {
//         Header: 'Games',
//         accessor: 'game_names',
//         filterable: true,
//     }
// ]
//
// return (
//     <div>
//         <ReactTable data={this.props.series}
//                     defaultFilterMethod={(filter, row) => {
//                         return String(row[filter.id] || '').toLowerCase().startsWith(filter.value.toLowerCase())
//                     }}
//                     defaultPageSize={this.props.default_page_size || 10}
//                     minRows={this.props.min_rows || false}
//                     showPagination={this.props.show_pagination != undefined ? this.props.show_pagination : true}
//                     columns={columns_series}
//                     defaultSorted={[
//                         {
//                             id: this.props.default_sorted || 'start',
//                             desc: this.props.default_sorted_asc || true
//                         }
//                     ]}
//                     indexKey={'admin_id'}
//         />
//         <ReactTable data={tr.dicToList(this.props.teams)}
//                     defaultFilterMethod={(filter, row) => {
//                         return String(row[filter.id] || '').toLowerCase().startsWith(filter.value.toLowerCase())
//                     }}
//                     defaultPageSize={this.props.default_page_size || 10}
//                     minRows={this.props.min_rows || false}
//                     showPagination={this.props.show_pagination != undefined ? this.props.show_pagination : true}
//                     columns={columns_teams}
//                     defaultSorted={[
//                         {
//                             id: this.props.default_sorted || 'name',
//                             desc: this.props.default_sorted_asc || true
//                         }
//                     ]}
//                     indexKey={'admin_id'}
//         />
//     </div>
// )