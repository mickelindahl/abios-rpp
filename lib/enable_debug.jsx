/**
 *Created by Mikael Lindahl on 2019-04-19
 */

"use strict";

import root from 'window-or-global'

export default ()=>{

    if (root.location && root.location.protocol=='http:'){

        localStorage.debug='*'

    }
}