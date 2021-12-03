const { readFileSync } = require('fs');

const args = readFileSync('input.txt').toString().split('\n');

let increased = 1;

for (let i = 1; i < args.length; i++) {
    if (args[i] > args[i-1]) increased+= 1;
}

console.log(increased);
