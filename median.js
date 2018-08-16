/**
 * Created by anis on 10/11/17.
 */

function median(numbers) {
    numbers.sort((x, y) => x - y);
    const indexMiddle = Math.round(numbers.length / 2);
    if (numbers.length % 2 === 0) {
        return (numbers[indexMiddle] + numbers[indexMiddle - 1]) / 2;
    }
    else {
        return numbers[indexMiddle - 1];
    }
}


console.log(median([1, 2, 3, 4, 5]));
console.log(median([3, 1, 2, 5, 3]));
console.log(median([1, 300, 2, 200, 1]));
console.log(median([3, 6, 20, 99, 10, 15]));

// console.assert(median([1, 2, 3, 4, 5]) === 3);
// console.assert(median([3, 1, 2, 5, 3]) === 3);
// console.assert(median([1, 300, 2, 200, 1]) === 2);
// console.assert(median([3, 6, 20, 99, 10, 15]) === 12.5);
