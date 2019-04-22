/**
 *Created by Mikael Lindahl on 2019-04-21
 */

"use strict";


/**
 * Convert dic to list
 *
 * - `dic` {object} Dictionary to convert
 * - `contain` If provided on dic entries that contains the string in contain
 * is returned
 *
 */
function dicToList(dic, contain){

    let list=[]

    for (let key in dic){

        if (contain){

            var re = new RegExp(contain);

            if (key.match(re).length==0){

                continue

            }
        }

        list.push(dic[key])

    }

    return list

}



function sort(list, key, direction){

    let i = direction=='asc' ? -1 : 1

    list.sort((a,b)=>{

        a=key(a)
        b=key(b)

        if (a>b){

            return 1*i

        }else if (a<b){

            return -1*i

        }else{

            return 0

        }
    })

    return list
}

module.exports={

    dicToList,
    sort

}