const sideOne = './assets/img/dice1.png';
const sideTwo = './assets/img/dice2.png';
const sideThree = './assets/img/dice3.png';
const sideFour = './assets/img/dice4.png';
const sideFive = './assets/img/dice5.png';
const sideSix = './assets/img/dice6.png';

function buttonClicked(){
    showWinner();
    changeImage();
}

function randomNumber(){
    const number = Math.floor(Math.random() * 6) + 1;
    return number;
}

function showWinner(){
    const player1 = randomNumber();
    const player2 = randomNumber();
    changeImage(player1, 'one');
    changeImage(player2, 'two');

    if(player1 > player2){
        document.getElementById('winner').innerHTML = "- Winner - Player I -";
    }
    else if(player2 > player1){
        document.getElementById('winner').innerHTML = "- Winner - Player II -";
    }
    else{
        document.getElementById('winner').innerHTML = "-Draw-";
    }
}

function changeImage(player, id){
    if (player == 1) {
        document.getElementById(id).src = sideOne;
    } else if (player == 2) {
        document.getElementById(id).src = sideTwo;
    } else if (player == 3) {
        document.getElementById(id).src = sideThree;
    } else if (player == 4) {
        document.getElementById(id).src = sideFour;
    } else if (player == 5) {
        document.getElementById(id).src = sideFive;
    } else if (player == 6) {
        document.getElementById(id).src = sideSix;
    }
}
