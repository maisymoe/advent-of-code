import run from "aocrunner";

const parseInput = (rawInput: string) => {
    const input = rawInput.split("\n\n");
    const elfTotals = [];

    for (let i of input) {
        const kcalAmounts = i.split("\n");
        let total = 0;

        for (let amount of kcalAmounts) total += parseInt(amount);
        elfTotals.push(total);
    }

    elfTotals.sort((a, b) => b - a);
    return elfTotals;
};

const part1 = (rawInput: string) => {
    const input = parseInput(rawInput);
    return input[0];
};

const part2 = (rawInput: string) => {
    const input = parseInput(rawInput);
    return input[0] + input[1] + input[2];
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
