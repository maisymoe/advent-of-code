import run from "aocrunner";

/*
    Not the most proud of what I wrote here today.
    It works, though...
    (I fear for the later days)
*/

// TODO: clean

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#sequence_generator_range
const range = (start: number, stop: number, step: number) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
const checkArray = (source: Array<any>, target: Array<any>) => target.every(v => source.includes(v));
const parseInput = (rawInput: string) => rawInput.split("\n");

const part1 = (rawInput: string) => {
    const pairs = parseInput(rawInput);
    let totalPairs = 0;

    for (let pair of pairs) {
        const splitPairs = pair.split(",");
        const firstPair = splitPairs[0].split("-").map(Number);
        const secondPair = splitPairs[1].split("-").map(Number);
        const firstRange = range(firstPair[0], firstPair[1], 1);
        const secondRange = range(secondPair[0], secondPair[1], 1);

        if (checkArray(firstRange, secondRange) || checkArray(secondRange, firstRange)) {
            totalPairs++;
        }
    }

    return totalPairs;
};

const part2 = (rawInput: string) => {
    const pairs = parseInput(rawInput);
    let totalPairs = 0;

    for (let pair of pairs) {
        const splitPairs = pair.split(",");
        const firstPair = splitPairs[0].split("-").map(Number);
        const secondPair = splitPairs[1].split("-").map(Number);
        const firstRange = range(firstPair[0], firstPair[1], 1);
        const secondRange = range(secondPair[0], secondPair[1], 1);
        const biggest = firstRange.length > secondRange.length ? firstRange : secondRange;
        const smallest = biggest === firstRange ? secondRange : firstRange;
        let didFindPair = false;

        for (let i of smallest) {
            if (didFindPair) continue;

            if (biggest.includes(i)) { 
                totalPairs++;
                didFindPair = true;
            }
        }
    }

    return totalPairs;
};

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
