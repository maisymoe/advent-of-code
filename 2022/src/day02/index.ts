import run from "aocrunner";

type Action = "Rock" | "Paper" | "Scissors";

enum Outcomes {
    Loss = "X",
    Draw = "Y",
    Won = "Z",
}

const scores: { [index: string]: number } = {
    Rock: 1,
    Paper: 2,
    Scissors: 3,
    Loss: 0,
    Draw: 3,
    Won: 6,
};

function getAction(rawAction: string): Action {
    if (rawAction === "X" || rawAction === "A") return "Rock";
    else if (rawAction === "Y" || rawAction === "B") return "Paper";
    else if (rawAction === "Z" || rawAction === "C") return "Scissors";
    else throw new Error("Invalid action type");
}

function getScore(enemy: Action, you: Action): number {
    let score = 0;
    score += scores[you];

    if (enemy === you) score += scores.Draw;
    else if (
        (you === "Rock" && enemy === "Scissors") ||
        (you === "Scissors" && enemy === "Paper") ||
        (you === "Paper" && enemy === "Rock")
    ) score += scores.Won;

    return score;
}

// I don't like this function, but TypeScript wasn't playing ball...
function getActionFromOutcome(enemy: Action, outcome: string): Action | undefined {
    if (outcome === Outcomes.Draw) return enemy;
    else if (outcome === Outcomes.Loss) {
        if (enemy === "Rock") return "Scissors";
        else if (enemy === "Paper") return "Rock";
        else if (enemy === "Scissors") return "Paper";
    } else if (outcome === Outcomes.Won) {
        if (enemy === "Scissors") return "Rock";
        else if (enemy === "Rock") return "Paper";
        else if (enemy === "Paper") return "Scissors";
    }
}

const parseInput = (rawInput: string) => rawInput.split("\n");

const part1 = (rawInput: string) => {
    const rounds = parseInput(rawInput);
    let totalScore = 0;

    for (let round of rounds) {
        const splitActions = round.split(" ");
        const scoreForRound = getScore(getAction(splitActions[0]), getAction(splitActions[1]));
        totalScore += scoreForRound;
    }

    return totalScore;
};

const part2 = (rawInput: string) => {
    const rounds = parseInput(rawInput);
    let totalScore = 0;

    for (let round of rounds) {
        const splitActions = round.split(" ");
        const enemyAction = getAction(splitActions[0]);
        const scoreForRound = getScore(enemyAction, getActionFromOutcome(enemyAction, splitActions[1])!);
        totalScore += scoreForRound;
    }

    return totalScore;
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
