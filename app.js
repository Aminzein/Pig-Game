var scores , roundScore , activePlayer;
scores = [0,0];
roundScore = 0;
activePlayer = 1;
var diceDOM =  document.querySelector('.dice');
diceDOM.style.display = 'none';
document.querySelector('.btn-roll').addEventListener('click' , function() {
    var dice = Math.floor(Math.random() * 6) + 1;
    diceDOM.src = 'dice-' + dice + '.png';
    diceDOM.style.display = 'block';
    console.log(dice);
});
