const parseInput = require('../utils/parseInput');

let inputStrings = parseInput(`${ __dirname }/input.txt`);

let input = [];

inputStrings.forEach(val => {
    if (!val.length) return;

    let result = {
        timestamp: new Date(val.substr(1, 16)),
        event: val.substr(19)
    };

    input.push(result);
});

input.sort((a, b) => a.timestamp - b.timestamp);

let output = {};

input.forEach(entry => {

})