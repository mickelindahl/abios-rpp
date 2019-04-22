/**
 *Created by Mikael Lindahl on 2019-04-19
 */

"use strict";

const boom = require( 'boom' );
const debug = require( 'debug' )( 'greenboard:lib:next_wrapper' );

const nextHandlerWrapper = () => {

    return async (  {server, raw, url }, h ) => {
        try {

            const app = server.next;
            const handler = app.getRequestHandler()

            raw.req.server=server;

            await handler( raw.req, raw.res, url )
            return h.close

        } catch ( err ) {

            console.error( err );
            return boom.badImplementation( err );

        }
    }
}

const defaultHandlerWrapper = () => {

    return async ( { server, raw: { req, res }, url, query } ) => {
        try {

            debug( 'defaultHandlerWrapper', url.pathname );

            const app = server.next;

            req.server=server;

            return app.renderToHTML( req, res, url.pathname, query )

        } catch ( err ) {

            console.error( err );
            return boom.badImplementation( err );

        }
    }
}

const pathWrapper = ( pathName, opts ) => async ( {server,  raw, query, params } ) => {

    try {

        debug( 'pathWrapper', pathName );

        const app = server.next;

        raw.req.server=server;

        return app.renderToHTML(
            raw.req,
            raw.res,
            pathName,
            { ...query, ...params },
            opts
        )
    } catch ( err ) {

        console.error( err );
        return boom.badImplementation( err );

    }
}

module.exports = { pathWrapper, defaultHandlerWrapper, nextHandlerWrapper }