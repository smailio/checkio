/**
 * Created by anis on 17/12/17.
 */

function brackets(expression){
    let ops = { '}' : '{', ')' : '(', ']' : '['};
    let tokens = expression.split('').filter(token => '{}()[]'.includes(token));
    let stack = [];
    for(let i = 0; i < tokens.length; i++){
        let token = tokens[i];
        if('})]'.includes(token)){
            if(ops[token] === stack[stack.length - 1]) stack.pop();
            else return false;
        }
        else {
            stack.push(token);
        }
    }
    return stack.length === 0;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(brackets("((5+3)*2+1)"), true, "Simple");
    assert.equal(brackets("{[(3+1)+2]+}"), true, "Different types");
    assert.equal(brackets("(3+{1-1)}"), false, ") is alone inside {}");
    assert.equal(brackets("[1+1]+(2*2)-{3/3}"), true, "Different operators");
    assert.equal(brackets("(({[(((1)-2)+3)-3]/3}-3)"), false, "One is redundant");
    assert.equal(brackets("2+3"), true, "No brackets, no problem");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}