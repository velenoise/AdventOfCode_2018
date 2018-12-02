const fs = require('fs');

module.exports = function (file)
{
    let inputBuffer = fs.readFileSync(file, 'utf8');
    let input = inputBuffer.split('\n');

    return input;
}