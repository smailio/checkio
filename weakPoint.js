/**
 * Created by anis on 16/11/17.
 */
"use strict";

function weakPoint(matrix){
    const sum = r => r.reduce((x, y) => x + y);
    const rows = matrix.map(r => sum(r));
    const minRow = Math.min(...rows);
    const columns = matrix.map( (_, i) => sum(matrix.map(row => row[i])));
    const minCol = Math.min(...columns);
    return [rows.indexOf(minRow), columns.indexOf(minCol)]
}

let assert = require('assert');

if (!global.is_checking) {
    assert.deepEqual(weakPoint([[7, 2, 7, 2, 8],
                                [2, 9, 4, 1, 7],
                                [3, 8, 6, 2, 4],
                                [2, 5, 2, 9, 1],
                                [6, 6, 5, 4, 5]]
                                ), [3, 3], "Example");
    assert.deepEqual(weakPoint([[7, 2, 4, 2, 8],
                                [2, 8, 1, 1, 7],
                                [3, 8, 6, 2, 4],
                                [2, 5, 2, 9, 1],
                                [6, 6, 5, 4, 5]]
                                ), [1, 2], "Two weak point");

    assert.deepEqual(weakPoint([[1, 1, 1],
                                [1, 1, 1],
                                [1, 1, 1]]
                                ), [0, 0], "Top left");

}
