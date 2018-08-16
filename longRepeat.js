/**
 * Created by anis on 02/12/17.
 */
"use strict";

function longRepeat(line) {
    let letters = line.split('');
    letters.map(l => letters.map(_l => _l === l? 1 : 0).reduce((x, y) => x === 1, []));
    return line
        .split('')
        .reduce((acc, letter) => {
            if (acc[acc.length - 1][0] === letter) {
                acc[acc.length - 1].push(letter);
            } else {
                acc.push([letter]);
            }
            return acc;
        }, [[]])
        .map(l => l.length)
        .reduce( (x, y) => x > y ? x : y );
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(longRepeat(''), 0, "zero")
    assert.equal(longRepeat('sdsffffse'), 4, "First")
    assert.equal(longRepeat('ddvvrwwwrggg'), 3, "Second")
    console.log('"Run" is good. How is "Check"?');
}