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
    let promptText = document.createElement("p");
    promptText.classList.toggle("prompt");
    output.appendChild(promptText);

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
        buttons.forEach((button) => {
            button.disabled = true;
        });

        let winnerText = document.createElement("p");
        winnerText.classList.add("winner");
        if (playerScore === 5) {
            winnerText.textContent = "Player Wins the Game!";
        } else  {
            winnerText.textContent = "Computer Wins the Game!";
        }
        output.appendChild(winnerText);
        
        let playAgainButton = document.createElement("button");
        playAgainButton.classList.toggle("playAgain");
        playAgainButton.textContent = "Play Again";
        output.appendChild(playAgainButton);

        playAgainButton.addEventListener("click", () => {
            // reset everything
            buttons.forEach((button) => {
                button.disabled = false;
            });
            playerScore = 0;
            computerScore = 0;
            playerScoreText.textContent = "0";
            computerScoreText.textContent = "0";
            output.innerHTML = "";
        });
    }
}

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
}

let playerScore = 0;
let computerScore = 0;
let output = document.querySelector(".output");
let modeButton = document.querySelector(".mode");
let playerScoreText = document.querySelector(".playerScore");
let computerScoreText = document.querySelector(".computerScore");
let buttons = document.querySelectorAll("button");

modeButton.addEventListener("click", () => {
    let body = document.body;
    body.classList.toggle("dark-mode");
});

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let playerChoice = button.textContent.toLowerCase();
        playGame(playerChoice);
    });
});





