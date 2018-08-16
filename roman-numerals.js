/**
 * Created by anis on 22/11/17.
 */
"use strict";

function romanNumerals(number) {
    const romanNumerals = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    const n = [1, 5, 10, 50, 100, 500, 1000];
    let i = romanNumerals.length - 1;
    let roman = '';
    while(i >= 0){
        if(number >= n[i]){
            number -= n[i];
            roman = roman + romanNumerals[i];
        }
        else if(i%2 === 0 && number >= n[i] - n[i-2] && number < n[i] ){
            number -= (n[i] - n[i-2]);
            roman = roman + romanNumerals[i-2] + romanNumerals[i];
        }
        else if (i%2 === 1 && number >= n[i] - n[i-1] && number < n[i]){
            number -= (n[i] - n[i-1]);
            roman = roman + romanNumerals[i-1] + romanNumerals[i];
        }
        else {
            i --;
        }
    }
    return roman;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(romanNumerals(6), 'VI', "First");
    assert.equal(romanNumerals(8), 'VIII', "First");
    assert.equal(romanNumerals(9), 'IX', "First");
    assert.equal(romanNumerals(76), 'LXXVI', "Second");
    assert.equal(romanNumerals(499), 'CDXCIX', "Third");
    assert.equal(romanNumerals(3888), 'MMMDCCCLXXXVIII', "Forth");
    console.log("Done! Go Check!");
}
