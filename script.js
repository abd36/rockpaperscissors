/*-------------defining all constants----------------*/

const playerScore = document.getElementById('playerScore');
const compScore = document.getElementById('compScore');
const reset = document.getElementById('reset');
const tieMessage = document.getElementById('tieMessage');

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const message = document.getElementById('message');

var tieCounter = 0;

/*-----------------adding all event listeners------------*/

rock.addEventListener('click', e => playRound(e, computerPlay()));
paper.addEventListener('click', e => playRound(e, computerPlay()));
scissors.addEventListener('click', e => playRound(e, computerPlay()));

reset.addEventListener('click', resetGame);

/*--------------------functions-----------------------*/

resetGame();

function mouseIn(image) {
    image.src = `${image.id}Hover.png`;
    image.classList.add('hover');
}

function mouseOut(image) {
    image.src = `${image.id}.png`;
    image.classList.remove('hover');
}

function resetGame() {
    playerScore.textContent = 0;
    compScore.textContent = 0;
    message.textContent = 'choose a weapon to start';
    tieMessage.textContent = '';
}

function computerPlay() {
    var choices = ['rock', 'paper', 'scissors'];

    return choices[(Math.floor(Math.random() * choices.length))];
}

function playRound(e, computerSelection) {
    //computerSelection = 'paper';
    var playerSelection = e.target.id;
    
    if (playerSelection == computerSelection) {
        tieMessage.style.fontWeight = 'normal';
        tieMessage.style.textDecoration = 'none';
        
        if (tieCounter == 0) {
            tieMessage.textContent = 'tie';
            tieCounter++;
        }
        else if (tieCounter == 1) {
            tieMessage.textContent = 'tie again';
            tieCounter++;
        }
        else if (tieCounter == 2) {
            tieMessage.style.fontWeight = 'bold';
            tieCounter++;
        }
        else if (tieCounter == 3) {
            tieMessage.style.fontWeight = 'bold';
            tieMessage.style.textDecoration = 'underline';
        }
    }

    else if (((playerSelection == 'rock') && (computerSelection == 'scissors')) || ((playerSelection == 'paper') && (computerSelection == 'rock')) || ((playerSelection == 'scissors') && (computerSelection == 'paper'))) {
        playerScore.textContent++;
        tieMessage.textContent = '';
        tieCounter = 0;
    }

    else {
        compScore.textContent++;
        tieMessage.textContent = '';
        tieCounter = 0;
    }
    
    message.textContent = `computer chose ${computerSelection}`;
}