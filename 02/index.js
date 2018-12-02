const parseInput = require('../utils/parseInput');

let input = parseInput(`${ __dirname }/input.txt`);

let twice = 0;
let thrice = 0;

for (let i = 0; i < input.length; i++)
{
    let id = input[i];
    if (!id.length) continue;

    let chars = [];

    let hasDoubles = false;
    let hasTriples = false;

    for (let j = 0; j < id.length; j++)
    {
        if (chars.indexOf(id[j]) > -1) continue;

        let temp = id.split(id[j]);

        if (temp.length == 3 && !hasDoubles)
        {
            hasDoubles = true;
            twice++;
        }
        else if (temp.length == 4 && !hasTriples)
        {
            hasTriples = true;
            thrice++;
        }   

        chars.push(id[j]);
    }
}

console.log('checksum', twice * thrice);

input.sort();

let i = 0; 
let found = false;
while (i < input.length && !found)
{
    let idA = input[i];

    for (let j = i + 1; j < input.length; j++)
    {
        let idB = input[j];

        let differences = 0;
        let result = [];

        for (let k = 0; k < idA.length; k++)
        {
            if (idA[k] == idB[k])
            {
                result.push(idA[k]);
            }
            else
            {
                differences++;
                if (differences > 1) break;
            }
        }

        if (differences == 1)
        {
            found = true;
            console.log('result', result.join(''));
            break;
        }
    }


    i++
}