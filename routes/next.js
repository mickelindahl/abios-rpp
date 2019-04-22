/**
 *Created by Mikael Lindahl on 2019-04-19
 */

"use strict";

/**
 * Created by Mikael Lindahl on 2019-02-04.
 */

'use strict';

const nw=require('../lib/next_wrapper');

module.exports = [
    {
        method: 'GET',
        path: '/_next/{p*}' /* next specific routes */,
        handler: nw.nextHandlerWrapper()
    },
];
