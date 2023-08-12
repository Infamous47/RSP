const imgs = Array.from(document.getElementsByTagName("img"));
let playerUi = document.getElementById("playerChoice");
let compUi = document.getElementById("compChoice");
let playerScoreUi = document.getElementById("playerScore");
let compScoreUi = document.getElementById("compScore");


let playerScore = 0;
let compScore = 0;

playerScoreUi.textContent = playerScore;
compScoreUi.textContent = compScore;
startGame();





function startGame() {
    for (let img of imgs) {
        img.addEventListener("click", function playerSelection(e) {
            const clone = img.cloneNode(true);
            if (playerUi.children.length > 0) {
                playerUi.removeChild(playerUi.firstElementChild);
                playerUi.appendChild(clone);
            }
            else {
                playerUi.appendChild(clone);
            }

            let playerChoice = clone.getAttribute("id").toLowerCase();
            compSelection();
            let compChoice = compUi.lastElementChild.getAttribute("id").toLowerCase();


            if (playerScore == 5 || compScore == 5) {
                round(playerChoice, compChoice);
                img.removeEventListener("click", playerSelection);
            }
            console.log(playerScore, compScore);
            playerScoreUi.textContent = playerScore;
        })
    }
}


function compSelection() {
    let x = (Math.floor(Math.random() * 3));
    // console.log(x);
    const clone = imgs[x].cloneNode(true);
    if (compUi.children.length > 0) {
        compUi.removeChild(compUi.firstElementChild);
        compUi.appendChild(clone);
    }
    else {
        compUi.appendChild(clone);
    }
    compScoreUi.textContent = compScore;
}

function round(playerChoice, compChoice) {
    if (playerScore <= 4 && compScore <= 4) {
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
    }

}