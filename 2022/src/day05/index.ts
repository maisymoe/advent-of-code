import run from "aocrunner";

function parseInput(rawInput: string) {
    const splitInput = rawInput.split("\n\n");
    return {
        table: splitInput[0],
        instructions: splitInput[1].split("\n"),
    };
};

function getPositions(table: string) {
    const positions: { [index: number]: Array<string> } = {};
    const rows = table.split("\n");
    const colRow = rows[rows.length - 1];

    for (let row of rows) {
        for (let i = 0; i < row.length; i++) {
            if (row[i] === "[") {
                const letterPos = i + 1;
                const colNum = parseInt(colRow[letterPos]);
                if (!positions[colNum]) {
                    positions[colNum] = [row[letterPos]];
                } else {
                    positions[colNum].push(row[letterPos]);
                }
            }
        }
    }

    return positions;
}

function getInstructions(instructions: string[]) {
    let parsedInstructions = [];
    for (let i of instructions) {
        const splitInstruction = i.split(" ");
        parsedInstructions.push({
            amount: parseInt(splitInstruction[1]),
            from: parseInt(splitInstruction[3]),
            to: parseInt(splitInstruction[5]),
        });
    }

    return parsedInstructions;
}

const part1 = (rawInput: string) => {
    const input = parseInput(rawInput);
    const positions = getPositions(input.table);
    const instructions = getInstructions(input.instructions);

    for (let i of instructions) {
        for (let a = 0; a < i.amount; a++) {
            const removed = positions[i.from].shift();
            positions[i.to].unshift(removed!);
        };
    }

    return Object.values(positions).map(i => i[0]).join("");
};

const part2 = (rawInput: string) => {
    const input = parseInput(rawInput);
    const positions = getPositions(input.table);
    const instructions = getInstructions(input.instructions);

    for (let i of instructions) {
        const allRemoved = [];
        for (let a = 0; a < i.amount; a++) {
            const removed = positions[i.from].shift();
            allRemoved.push(removed!);
        };

        positions[i.to].unshift(...allRemoved);
    }

    return Object.values(positions).map(i => i[0]).join("");
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
