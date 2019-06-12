// Main container
const setup = (() => {
    let playerScore = 0;
    let computerScore = 0;

    const userScoreOutput = document.querySelector(".user-score");
    const computerScoreOutput = document.querySelector(".computer-score");
    const jumbotronOutput = document.querySelector(".jumbotron-container p");
    const playerChoicesButtons = document.querySelectorAll(".btn");
    

    function makeCompChoice() {
        const compOptions = ["rock", "paper", "scissors"];
        const randomNum = Math.floor(Math.random() * compOptions.length);
        const compDecision = compOptions[randomNum];
        return compDecision;
    }

    function playRound(playerSelection, compSelection) {
        // Check for a draw.
        if (playerSelection === compSelection) {
            jumbotronOutput.textContent = "It's a draw!";
            return;
        }

        // Check for rock.
        if (playerSelection === "rock") {
            if(compSelection === "scissors") {
                playerWin(playerSelection, compSelection);
                return;
            } else {
                computerWin(playerSelection, compSelection);
                return;
            }
        }

        // Check for paper.
        if (playerSelection === "paper") {
            if (compSelection === "rock") {
                playerWin(playerSelection, compSelection);
                return;
            } else {
                computerWin(playerSelection, compSelection);
                return;
            }
        }

        // Check for scissors.
        if (playerSelection === "scissors") {
            if (compSelection === "paper") {
                playerWin(playerSelection, compSelection);
                return;
            } else {
                computerWin(playerSelection, compSelection);
                return;
            }
        }
    }

    function computerWin(playerSelection, compSelection) {
        jumbotronOutput.textContent = `Computer (${compSelection}) beats the user (${playerSelection})!`;
        computerScore++;
        updateScore();
    }

    function playerWin(playerSelection, compSelection) {
        jumbotronOutput.textContent = `User (${playerSelection}) beats the computer (${compSelection})!`;
        playerScore++;
        updateScore();
    }

    function updateScore() {
        userScoreOutput.textContent = playerScore;
        computerScoreOutput.textContent = computerScore;
    }

    playerChoicesButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // User selection is equal to the id of whatever btn was pressed, then computer selection is randomly generated and stored.
            const userSelection = button.id;
            const computerSelection = makeCompChoice();
            
            playRound(userSelection, computerSelection);
        });
    });
    
})();