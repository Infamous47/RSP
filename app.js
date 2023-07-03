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
console.log(playerSelection(), compSelection());