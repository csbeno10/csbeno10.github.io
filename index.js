let won = 0;
let lost = 0;
let draw = 0;
let player;
let computer;
const wonText = document.getElementById("won");
const lostText = document.getElementById("lost");
const drawText = document.getElementById("draw");
const vs = document.getElementById("vs");
const comp = document.getElementById("comp");

function startGame(choice) {
    player = choice;
    computerTurn();
}

function computerTurn() {
    const randomNumber = Math.floor(Math.random()*3);
    switch(randomNumber) {
        case 0:
            computer = "rock";
            comp.setAttribute("src","rock.jpg")
            break;
        case 1:
            computer = "paper";
            comp.setAttribute("src","paper.jpg")
            break;
        case 2:
            computer = "scissors";
            comp.setAttribute("src","scissors.jpg")
            break;
    }
    result()
}

function result(){
    if(player == computer) drawResult();
    else if (player == "rock" && computer == "paper" ||
             player == "paper" && computer == "scissors" ||
             player == "scissors" && computer == "rock") {
              lostResult();  
             }
    else if (player == "rock" && computer == "scissors" ||
             player == "paper" && computer == "rock" ||
             player == "scissors" && computer =="paper") {
                wonResult();
             }
}

function drawResult() {
    vs.textContent = "Draw!";
    vs.setAttribute("style","color:black");
    draw += 1;
    drawText.textContent = `Draw: ${draw}`;
}

function lostResult() {
    vs.textContent = "You Lost! ";
    vs.setAttribute("style","color:red");
    lost += 1;
    lostText.textContent = `Lost: ${lost}`;
}

function wonResult() {
    vs.textContent = "You Won! ";
    vs.setAttribute("style","color:green");
    won += 1;
    wonText.textContent = `Won: ${won}`;
}

