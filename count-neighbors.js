/**
 * Created by anis on 11/11/17.
 */
"use strict";


function countNeighbours_(data, row, col) {
    let lastIndex = data.length - 1;
    let neighboursCount = 0;
    neighboursCount += row > 0 && col > 0 ? data[row - 1][col - 1] : 0;
    neighboursCount += row > 0 ? data[row - 1][col] : 0;
    neighboursCount += row > 0 && col < lastIndex ? data[row - 1][col + 1] : 0;
    neighboursCount += col < lastIndex ? data[row][col + 1] : 0;
    neighboursCount += col > 0 ? data[row][col - 1] : 0;
    neighboursCount += row < lastIndex && col > 0 ? data[row + 1][col - 1] : 0;
    neighboursCount += row < lastIndex ? data[row + 1][col] : 0;
    neighboursCount += row < lastIndex && col < lastIndex ? data[row + 1][col + 1] : 0;
    return neighboursCount;
}

function countNeighbours(data, row, col) {
    let count = 0;
    for (let i = row - 1; i < row + 2; i++) {
        for (let j = col - 1; j < col + 2; j++) {
            try { count += data[i][j] || 0} catch (e) {}
        }
    }
    return count - data[row][col];
}

let assert = require('assert');

assert.equal(countNeighbours([
    [1, 0, 0, 1, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0]], 1, 2), 3, "1st example");

assert.equal(
    countNeighbours(
        [[1, 0, 0, 1, 0],
            [0, 1, 0, 0, 0],
            [0, 0, 1, 0, 1],
            [1, 0, 0, 0, 0],
            [0, 0, 1, 0, 0]], 0, 0), 1, "2nd example");

assert.equal(countNeighbours([[1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]], 0, 2), 3, "Dense corner");

assert.equal(countNeighbours([[0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]], 1, 1), 0, "Single");

console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");

