const fs = require('fs');
let inputBuffer = fs.readFileSync(`${ __dirname }/input.txt`, 'utf8');
let input = inputBuffer.split('\n');

let freq = 0;
let foundFrequencies = [];
let duplicateFound = null;

for (let i = 0; i < input.length; i++)
{
    freq = eval(freq + input[i]);
    if (foundFrequencies.indexOf(freq) > -1)
    {
        duplicateFound = freq;
    }
    else
    {
        foundFrequencies.push(freq);
    }
}

console.log('Result 1', freq);

if (duplicateFound)
{
    console.log('Duplicate', duplicateFound);
}
else
{
    let i = 0;

    while (!duplicateFound)
    {
        freq = eval(freq + input[i % input.length]);
        
        if (foundFrequencies.indexOf(freq) > -1)
        {
            duplicateFound = freq;
        }
        else
        {
            foundFrequencies.push(freq);
        }

        i++;
    }

    console.log('Duplicate 2', duplicateFound);
}