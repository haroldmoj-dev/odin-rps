function getComputerChoice(min = 1, max = 3) {
    let num = Math.floor(Math.random() * (max - min + 1) + min);
    switch (num) {
        case 1: return "rock"; 
        case 2: return "paper"; 
        case 3: return "scissors"; 
    }
    return "invalid";
}

function getHumanChoice() {
    return prompt("Rock, Paper, or Scissors?", "").toLowerCase();
}

function playRound(humanChoice, computerChoice){
    console.log("ROUND START");
    console.log(`Player: ${humanChoice}`);
    console.log(`Computer: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log(`TIE! Your ${humanChoice} does not beat ${computerChoice}`);
    } else if (
        (humanChoice === "rock" && computerChoice === "paper") || 
        (humanChoice === "paper" && computerChoice === "scissors") || 
        (humanChoice === "scissors" && computerChoice === "rock")
    ) {
        console.log(`LOSE! Your ${humanChoice} got destroyed by ${computerChoice}`);
        computerScore++;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`WIN! Your ${humanChoice} destroyed ${computerChoice}`);
        humanScore++;
    }
}

function playGame() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}

let humanScore = 0;
let computerScore = 0;

for (let i = 0; i < 5; i++) {
    playGame();
}

console.log(`Final Score: ${humanScore} - ${computerScore}`);

