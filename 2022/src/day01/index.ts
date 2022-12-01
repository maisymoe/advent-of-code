import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
    const input = parseInput(rawInput).split("\n\n");
    let currHighest = 0;

    for (let i of input) {
        const kcalAmounts = i.split("\n");
        let total = 0;

        for (let amount of kcalAmounts) total += parseInt(amount);
        if (total > currHighest) currHighest = total;
    }

    return currHighest;
};

const part2 = (rawInput: string) => {
    const input = parseInput(rawInput).split("\n\n");
    const elfTotals = [];

    for (let i of input) {
        const kcalAmounts = i.split("\n");
        let total = 0;

        for (let amount of kcalAmounts) total += parseInt(amount);
        elfTotals.push(total);
    }

    elfTotals.sort((a, b) => b - a);

    return elfTotals[0] + elfTotals[1] + elfTotals[2];
};

run({
    part1: {
        tests: [
            // {
            //   input: ``,
            //   expected: "",
            // },
        ],
        solution: part1,
    },
    part2: {
        tests: [
            // {
            //   input: ``,
            //   expected: "",
            // },
        ],
        solution: part2,
    },
    trimTestInputs: true,
    onlyTests: false,
});
