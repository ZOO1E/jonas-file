'use strict';

const score0El =  document.querySelector('#score--0');
const score1El =  document.querySelector('#score--1');
const current0El =  document.querySelector('#current--0');
const current1El =  document.querySelector('#current--1');
const diceEl =  document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const player0El =  document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

let currentScore , activePlayer , scores , playing;
const init = function(){
    playing = true ;
score0El.textContent =0 ;
score1El.textContent =0 ;
current0El.textContent = 0;
current1El.textContent = 0;
currentScore = 0;
activePlayer = 0 ;
scores = [0 , 0];
diceEl.classList.add('hidden');
player0El.classList.remove('player--winner');
player1El.classList.remove('player--winner');
player0El.classList.add('player--active');
player1El.classList.remove('player--active');
};
init();

btnRoll.addEventListener('click' , function(){
   if(playing){
    //Generate random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
   //Display dice roll
    diceEl.src = 'dice-'+ dice + '.png';
    diceEl.classList.remove('hidden');
    //Is it a 1 ?
    if (dice !== 1){
        currentScore += dice;
        document.querySelector('#current--'+activePlayer).textContent = currentScore;
    } 
    else{
        //Switch Player 
        document.querySelector('#current--' +activePlayer).textContent=0;
        currentScore = 0 ;
    activePlayer = activePlayer === 0 ? 1: 0 ; 
    
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
    
}
}})

btnHold.addEventListener('click' ,function(){
    if(playing){
    scores [activePlayer] += currentScore; 
     document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];
     document.querySelector('#current--' +activePlayer).textContent=0;
     currentScore = 0 ;
   

    
    if(scores[activePlayer] >=10){
        document.querySelector(`.player--` + activePlayer).classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
        diceEl.classList.add('hidden');
        playing = false;
   
        
    }else{
        activePlayer = activePlayer === 0 ? 1: 0 ;
        document.querySelector('#current--' +activePlayer).textContent=0;
        currentScore = 0 ;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
        }
    }});

    btnNew.addEventListener('click' , init);