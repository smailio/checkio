/**
 * Created by anis on 17/12/17.
 */

function toBinaryArray(n){
    return n.toString(2).split('');
}

function hammingDistance(n, m){
    let nBits = toBinaryArray(n);
    let mBits = toBinaryArray(m);
    return nBits.filter((b,i) => b !== i < mBits.length && mBits[i]).length;
}

var assert = require('assert');

if (!global.is_checking) {
    // assert.equal(hammingDistance(117, 17), 3, "First example");
    // assert.equal(hammingDistance(1, 2), 2, "Second example");
    // assert.equal(hammingDistance(16, 15), 5, "Third example");
    // assert.equal(hammingDistance(1,999999), 11, "4th example");
    console.log(hammingDistance(1,999999));
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
