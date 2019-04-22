/**
 *Created by Mikael Lindahl on 2019-04-19
 */

'use strict';

require( 'make-promises-safe' );

const atc = require( './lib/access_token_cron' );
const dotenv = require('dotenv');
const Hapi = require('hapi');
const next = require( 'next' );
const routes = require( './config/routes' );

dotenv.config();

const dev = process.env.NODE_ENV !== 'production';
const app = next( { dir: './', dev } );


const init = async () => {

    await app.prepare();

    const server = Hapi.server({
        port: process.env.PORT,
        host: process.env.HOST
    });

    server.decorate( 'server', 'next', app );

    routes(server);


    await atc.run(server)
    atc.start(server)


    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();