function getComputerChoice(min = 1, max = 3) {
    let num = Math.floor(Math.random() * (max - min + 1) + min);
    switch (num) {
        case 1: return "rock"; 
        case 2: return "paper"; 
        case 3: return "scissors"; 
    }
    return "invalid";
}

function playRound(playerChoice, computerChoice){
    if (playerChoice === computerChoice) {
        promptText.textContent = `TIE! Your ${playerChoice} does not beat ${computerChoice}.`;
    } else if (
        (playerChoice === "rock" && computerChoice === "paper") || 
        (playerChoice === "paper" && computerChoice === "scissors") || 
        (playerChoice === "scissors" && computerChoice === "rock")
    ) {
        promptText.textContent = `LOSE! Your ${playerChoice} got destroyed by ${computerChoice}.`;
        computerScore++;
        computerScoreText.textContent = computerScore;
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") || 
        (playerChoice === "paper" && computerChoice === "rock") || 
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        promptText.textContent = `WIN! Your ${playerChoice} destroyed ${computerChoice}.`;
        playerScore++;
        playerScoreText.textContent = playerScore;
    }

    if (playerScore === 5 || computerScore === 5) {
        let winnerText = document.createElement("p");
        winnerText.classList.add("winner");
        if (playerScore === 5) {
            winnerText.textContent = "Player Wins the Game!";
        } else  {
            winnerText.textContent = "Computer Wins the Game!";
        }
        outputDiv.appendChild(winnerText);
        buttons.forEach((button) => {
            button.disabled = true;
        });
    }
}

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
}

////////////////////////////////////////////////////////////////////

let playerScore = 0;
let computerScore = 0;

let playerScoreText = document.querySelector(".playerScore");
let computerScoreText = document.querySelector(".computerScore");
let buttons = document.querySelectorAll("button");
let outputDiv = document.querySelector(".output");
let promptText = document.querySelector(".prompt");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let playerChoice = button.textContent.toLowerCase();
        playGame(playerChoice);
    });
});



