function playerSelection() {
    let x = prompt("Please enter your choice");
    x = x.toLowerCase();
    return x;
}

function compSelection() {
    const choice = ["rock", "paper", "scissor"];
    let x = (Math.floor(Math.random() * 3));
    return choice[x]
}

let playerChoice;
let compChoice;

let playerScore = 0;
let compScore = 0;

while (playerScore < 5 && compScore < 5) {
    playerChoice = playerSelection();
    compChoice = compSelection();
    round();
    console.log(playerScore, compScore);

}
function round() {
    if (playerChoice == "rock" && compChoice == "scissor") {
        console.log("Player Wins, Rock beats Scissor")
        playerScore++;
        return;
    }
    else if (playerChoice == "paper" && compChoice == "rock") {
        console.log("Player Wins, Paper beats Rock");
        playerScore++;
        return;
    }
    else if (playerChoice == "scissor" && compChoice == "paper") {
        console.log("Player Wins, Scissor beats Paper");
        playerScore++;
        return;
    }
    else if (playerChoice == "paper" && compChoice == "scissor") {
        console.log("Computer Wins, Scissor beats paper");
        compScore++;
        return;
    }
    else if (playerChoice == "rock" && compChoice == "paper") {
        console.log("Computer Wins, Paper beats Rock");
        compScore++;
        return;
    }
    else if (playerChoice == "scissor" && compChoice == "rock") {
        console.log("Computer Wins, Rock beats Scissor");
        compScore++;
        return;
    }
    else if (playerChoice == compChoice) {
        console.log("Draw");
        return;
    }
    else {
        alert("Invaild choice, Enter Rock Paper or Scissor.");
        return;
    }

}


