import run from "aocrunner";

const alphabet = [..."abcdefghijklmnopqrstuvwxyz", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const getPriority = (item: string) => alphabet.indexOf(item) + 1;

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
    const rucksacks = parseInput(rawInput).split("\n");
    let totalPriority = 0;

    for (let rucksack of rucksacks) {
        const firstCompartment = rucksack.substring(0, rucksack.length / 2);
        const secondCompartment = rucksack.substring(firstCompartment.length, rucksack.length);

        for (let letter of alphabet) {
            if (firstCompartment.includes(letter) && secondCompartment.includes(letter)) {
                totalPriority += getPriority(letter);
            }
        }
    }

    return totalPriority;
};

const part2 = (rawInput: string) => {
    const groups = parseInput(rawInput).match(/(?:^.*$\n?){1,3}/mg);
    let totalPriority = 0;

    for (let group of groups!) {
        let rucksacksInGroup = group.split("\n").slice(0,3);
        
        for (let letter of alphabet) {
            if (rucksacksInGroup[0].includes(letter) && rucksacksInGroup[1].includes(letter) && rucksacksInGroup[2].includes(letter)) {
                totalPriority += getPriority(letter);
            }
        }
    }

    return totalPriority;
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
