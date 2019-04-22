/**
 *Created by Mikael Lindahl on 2019-04-19
 */

"use strict";

import Document, {Head, Main, NextScript} from 'next/document'


export default class MyDocument extends Document {
    render() {
        return (
            <html>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta httpEquiv="x-ua-compatible" content="ie=edge"/>

                {/*Disable tap highlight on IE*/}
                <meta name="msapplication-tap-highlight" content="no"/>

            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
            </html>
        )
    }
}
