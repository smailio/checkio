/**
 * Created by anis on 07/12/17.
 */
"use strict";

function countingTiles(radius) {
    let norm = (x, y) => Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    let full = 0, partial = 0;
    for(let i = 0; i <= radius; i ++){
        for(let j = 0; j <= radius; j++){
            if(norm(i, j) <= radius) full++;
            else if(norm(i - 1, j - 1) <= radius) partial++;
        }
    }
    return [full * 4, partial * 4];
}


var assert = require('assert');

if (!global.is_checking) {
    // assert.deepEqual(countingTiles(2), [4, 12], "N=2");
    assert.deepEqual(countingTiles(3), [16, 20], "N=3 " + countingTiles(3));
    let actual = countingTiles(2.1);
    console.log(actual)
    assert.deepEqual(actual, [4, 20], "N=2.1");
    assert.deepEqual(countingTiles(2.5), [12, 20], "N=2.5 " + countingTiles(2.5));
    assert.deepEqual(countingTiles(4), [32, 28], "N=4 " + countingTiles(4));
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
