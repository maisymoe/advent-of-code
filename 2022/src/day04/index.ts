import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput.split("\n");

function getSects(pair: string) {
    const splitPairs = pair.split(",");
    const pair1 = splitPairs[0].split("-").map(Number);
    const pair2 = splitPairs[1].split("-").map(Number)

    return {
        min1: pair1[0],
        max1: pair1[1],
        min2: pair2[0],
        max2: pair2[1],
    }
}

const part1 = (rawInput: string) => {
    const pairs = parseInput(rawInput);
    let totalPairs = 0;

    for (let pair of pairs) {
        const { min1, max1, min2, max2 } = getSects(pair);
        if ((min1 >= min2 && max1 <= max2) || (min2 >= min1 && max2 <= max1)) totalPairs++;
    }

    return totalPairs;
};

const part2 = (rawInput: string) => {
    const pairs = parseInput(rawInput);
    let totalPairs = 0;

    for (let pair of pairs) {
        const { min1, max1, min2, max2 } = getSects(pair);
        if (min1 <= max2 && min2 <= max1) totalPairs++;
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
