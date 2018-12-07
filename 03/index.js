const parseInput = require('../utils/parseInput');

let input = parseInput(__dirname + '/input.txt');

let tiles = [];

function parsePatch (patch)
{
    let pieces = patch.split(' ');
    let coords = pieces[2].split(',');
    let size = pieces[3].split('x');

    return {
        id: parseInt(pieces[0].substr(1)),
        x: parseInt(coords[0]),
        y: parseInt(coords[1]),
        w: parseInt(size[0]),
        h: parseInt(size[1])
    }
}

let overlaps = {};

input.forEach(patch => {
    if (!patch.length) return;
    let patchInfo = parsePatch(patch);

    overlaps[patchInfo.id] = 0;

    for (let x = patchInfo.x; x < patchInfo.x + patchInfo.w; x++)
    {
        //console.log(x, tiles[x]);
        if (!tiles[x] || tiles[x] == NaN) tiles[x] = [];

        for (let y = patchInfo.y; y < patchInfo.y + patchInfo.h; y++)
        {
            
            if (tiles[x][y] == undefined) 
                tiles[x][y] = [];
            
            tiles[x][y].push(patchInfo.id);
        }    
    }
})

let count = 0; 

for (let i = 0; i < tiles.length; i++)
{
    if (!tiles[i]) continue;

    for (let j = 0; j < tiles[i].length; j++)
    {
        if (tiles[i][j] != undefined && tiles[i][j].length > 1) 
        {
            tiles[i][j].forEach(el => {
                overlaps[el]++;
            })
            count++;
        }
    }
}

console.log('count', count);

for (let key in overlaps)
{
    if (overlaps[key] == 0) 
    {
        console.log('noOverlap', key);
        break;
    }
}
