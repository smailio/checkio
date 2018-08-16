/**
 * Created by anis on 17/11/17.
 */
"use strict";

function mostWanted(data) {
    const alphabet = 'abcdefghijklmnopqrstuwxyz'.split('');
    let sort = alphabet.map(letter => {
        let letters = data.toLocaleLowerCase().split('');
        return {letter, count: letters.filter(l => l === letter).length};
    }).sort((x, y) => {
        if(x['count'] !== y['count']){
            return y['count'] - x['count'];
        }
        if(x['letter'] > y['letter']) return 1;
        else if(x['letter'] < y['letter']) return -1;
        else return 0;
    });
    return sort[0]['letter'];
}
var assert = require('assert');

if (!global.is_checking) {
    assert.equal(mostWanted("Hello World!"), "l", "1st example");
    assert.equal(mostWanted("How do you do?"), "o", "2nd example");
    assert.equal(mostWanted("One"), "e", "3rd example");
    assert.equal(mostWanted("Oops!"), "o", "4th example");
    assert.equal(mostWanted("AAaooo!!!!"), "a", "Letters");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
