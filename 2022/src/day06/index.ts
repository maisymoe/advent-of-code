import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

function doPart(rawInput: string, part: 1 | 2) {
    const input = parseInput(rawInput);
    const size = part === 1 ? 4 : 14;
    let found;

    for (let i = 0; i < input.length; i++) {
        const last = input.substring(i, i + size);
        const lastSets = [...new Set(last.split(""))];
        if (lastSets.length === size && !found) found = i + size;
    }

    return found;
}

const part1 = (rawInput: string) => doPart(rawInput, 1);
const part2 = (rawInput: string) => doPart(rawInput, 2);

run({
    part1: {
        solution: part1,
    },
    part2: {
        solution: part2,
    },
    trimTestInputs: true,
    onlyTests: false,
});
