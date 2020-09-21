
function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    diceDOM.style.display = 'none';
}

function initHTMLelements(){
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

function initVariebls(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    isGameActive = true;
    preDiceRoll = 0;
    goal = 100;
}

function init() {
    initVariebls();
    initHTMLelements();
}

function generateDiceNumber(){
    return Math.floor(Math.random() * 6) + 1;
}

function handleGameWinner(){
    isGameActive = false;
    document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
}

function setGoalValue(){
    var input = document.getElementById('inp-goal').value;
    if(input){
        goal = input;
    }
    else {
        goal = 100;
    }
}

function addingTotalScore(){
    scores[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
}

function handleHoldButtonClickEvent(){
    if(isGameActive){
        addingTotalScore();
        setGoalValue();
        if(scores[activePlayer] >= goal){
            handleGameWinner();
        }
        else{
            nextPlayer();
        }
    }
}

function addingCurrentScore(dice){
    roundScore += dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
}

function resetAllScoresOfActivePlayer(){
    scores[activePlayer] = 0
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
}

function handleRoleButtonClickEvent(){
    if(isGameActive){
        var dice = generateDiceNumber();
        diceDOM.src = 'dice-' + dice + '.png';
        diceDOM.style.display = 'block';
        if(preDiceRoll === 6 && dice === 6){
            resetAllScoresOfActivePlayer();
            nextPlayer();
        }
        else if(dice !== 1){
            addingCurrentScore(dice);
        }
        else {
            nextPlayer();
        }
        preDiceRoll = dice;
    }
}
var scores , roundScore , activePlayer , isGameActive , preDiceRoll , goal;
init();
var diceDOM =  document.querySelector('.dice');
diceDOM.style.display = 'none';
document.querySelector('.btn-roll').addEventListener('click' , handleRoleButtonClickEvent);

document.querySelector('.btn-hold').addEventListener('click' , handleHoldButtonClickEvent);

document.querySelector('.btn-new').addEventListener('click' , init); 