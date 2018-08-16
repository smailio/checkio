"use strict";

function capture(data) {
    let cleanNodesCount = data.length - 1;
    let infectedNodes = [0];
    let totalTime = 1;
    while(cleanNodesCount > 0){
        let infectedNodesNeighbors = [];
        console.log('')
        console.log('----------------')
        console.log('totalTime ' , totalTime)
        console.log('cleanNodesCount ' , cleanNodesCount)
        console.log('infectedNodes ' , infectedNodes)
        for(let node of infectedNodes) {
            let neighbors = getNeighbors(node, data);
            console.log('neigbors of ', node ,' : ',neighbors)
            for (let neighbor of neighbors) {
                if (!infectedNodesNeighbors.includes(neighbor)) {
                     infectedNodesNeighbors.push(neighbor);
                }
            }
        }
        console.log('infectedNodesNeighbors ' , infectedNodesNeighbors)
        console.log('infectedNodesNeighbors with time ' , infectedNodesNeighbors.map(i => ({[i] : data[i][i]}) ))
        for(let neighbor of infectedNodesNeighbors){
            if(data[neighbor][neighbor] !== 1){
                data[neighbor][neighbor]--;
            }
            else {
                data[neighbor][neighbor]--;
                if(!infectedNodes.includes(neighbor)){
                    infectedNodes.push(neighbor);
                    cleanNodesCount --;
                    if(cleanNodesCount === 0) return totalTime;
                }
            }
        }
        totalTime ++;
    }
}

function getNeighbors(current, data) {
    return data[current]
        .map((isConnected, index)  => isConnected && index !== current ? index : - 1 )
        .filter( i => i !== -1)
}

var assert = require('assert');

if (!global.is_checking) {
    console.log(capture([[0, 1, 0, 1, 0, 1],
        [1, 8, 1, 0, 0, 0],
        [0, 1, 2, 0, 0, 1],
        [1, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 3, 1],
        [1, 0, 1, 0, 1, 2]]), 8, "Base example");
    console.log(capture([
        [0, 1, 0, 1, 0, 1],
        [1, 1, 1, 0, 0, 0],
        [0, 1, 2, 0, 0, 1],
        [1, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 3, 1],
        [1, 0, 1, 0, 1, 2]]) );
    assert.equal(capture([[0, 1, 1],
        [1, 9, 1],
        [1, 1, 9]]), 9, "Small");
    // console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
