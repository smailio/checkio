"use strict";
function boxProbability(marbles, step) {
    return +rec(marbles, step, 1).toFixed(2);
}

function rec(marbles, step, prob) {
    let probWhite=  (marbles.match(/w/g)||[]).length / marbles.length * prob;
    let probBlack =  (marbles.match(/b/g)||[]).length / marbles.length * prob;
    if(step === 1) {
        return probWhite;
    }
    else {
        return rec(marbles.replace('w', 'b'), step - 1, probWhite) + rec(marbles.replace('b', 'w'), step - 1, probBlack);
    }
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(boxProbability('bbw', 3), 0.48, "First");
    assert.equal(boxProbability('wwb', 3), 0.52, "Second");
    assert.equal(boxProbability('www', 3), 0.56, "Third");
    assert.equal(boxProbability('bbbb', 1), 0, "Fifth");
    assert.equal(boxProbability('wwbb', 4), 0.5, "Sixth");
    assert.equal(boxProbability('bwbwbwb', 5), 0.48, "Seventh");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
