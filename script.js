const playerScore = document.querySelector('#playerScore');
//playerScore.textContent = 'new text';



/*function computerPlay() {
    var choices = ['rock', 'paper', 'scissors'];

    return choices[(Math.floor(Math.random() * choices.length))];

}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        return 'a tie!';
    }

    else if (((playerSelection == 'rock') && (computerSelection == 'scissors')) || ((playerSelection == 'paper') && (computerSelection == 'rock')) || ((playerSelection == 'scissors') && (computerSelection == 'paper'))) {
        return 'you win';
    }

    else {
        return 'you lose';
    }

}
                               
function game() {
    var score = 0;

    for (var i = 0; i < 5; i++) {
        playerSelection = window.prompt('Rock, paper, or scissors?').toLowerCase();

        result = playRound(playerSelection, computerPlay());
        console.log(result);

        if (result == 'you win') {
            score++;
        }

        if (result == 'a tie!') {
            i--;
        }
    }

    if (score >= 3) {
        console.log(score + " out of 5 is a winning score!");
    } else {
        console.log(score + " out of 5 is a losing score...");
    }
}
            
game();*/