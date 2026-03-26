// LocalStorage to save the Game

let score = JSON.parse(localStorage.getItem("score")) || {
    wins: 0,
    losses: 0,
    ties: 0,
};

//  <!-- Ab hier ist lessen 9 -->

updateScoreElement();

// // Objects for score if null than default

// if (!score) { // Shortcut: from :(score === null) to  (!score)
//     score = {
//       wins: 0,
//       losses: 0,
//       ties: 0
//     };
// };

// die Funktion playGame

function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = "";
    // Scissors
    if (playerMove === "scissors") {
        if (computerMove === "rock") {
            result = "You<br>Lose";
        } else if (computerMove === "paper") {
            result = "You<br>Win";
        } else if (computerMove === "scissors") {
            result = "You<br>Tie";
        }

        // Paper
    } else if (playerMove === "paper") {
        if (computerMove === "rock") {
            result = "You<br>Win";
        } else if (computerMove === "paper") {
            result = "You<br>Tie";
        } else if (computerMove === "scissors") {
            result = "You<br>Lose";
        }
        // Rock
    } else if (playerMove === "rock") {
        if (computerMove === "rock") {
            result = "You<br>Tie";
        } else if (computerMove === "paper") {
            result = "You<br>Lose";
        } else if (computerMove === "scissors") {
            result = "You<br>Win";
        }
    }

    // Updating the score:
    if (result === "You<br>Win") {
        score.wins += 1;
    } else if (result === "You<br>Lose") {
        score.losses += 1;
    } else if (result === "You<br>Tie") {
        score.ties += 1;
    }

    // Local Storage: support only Stings
    localStorage.setItem("score", JSON.stringify(score));

    // Session 9 = für score zähält
    document.querySelector(".js-score").innerHTML =
        `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

    // session 9.2
    updateScoreElement();

    // Session 9.3 = result

    document.querySelector(".js-result").innerHTML = result;

    // Session 9.3 = moves

          // select Cumputer move
    document.querySelector(".js-moves-comuter").innerHTML =
        `<img src="./fotos/${computerMove}-emoji.png" class="move-icon" alt="ComputerMove">
        <br><h5>System</h5>`;

          // select Player move
    document.querySelector(".js-moves").innerHTML =
        `<img src="./fotos/${playerMove}-emoji.png" class="move-icon" alt="playerMove">
        <br><h5>Player</h5>`;
}

// Session 9 = Score function

function updateScoreElement() {
    document.querySelector(".js-score").innerHTML = `Wins: ${score.wins} &emsp;    
                    Losses: ${score.losses} &emsp;
                    Ties: ${score.ties}`;
}

// die Funktion 2 pickComputerMove

function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = ""; // das heisst global veriable

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = "rock";
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = "paper";
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = "scissors";
    }

    return computerMove; // Das heisst: Returning a value from a function
}