'use strict';

const score1 =document.querySelector('#score--1');
const score0 =document.querySelector('#score--0');

const diceEl =document.querySelector('.dice');
const btnnew =document.querySelector('.btn--new');
const btnRoll =document.querySelector('.btn--roll');
const btnHold =document.querySelector('.btn--hold');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const player0El =document.querySelector('.player--0');
const player1El =document.querySelector('.player--1');


const scores = [0,0];
score1.textContent = 0;
score0.textContent = 0;
diceEl.classList.add('hidden');
let currentScore =0;
let activePlayer = 0;
console.log(currentScore);

//Rollinmg dice functionality
btnRoll.addEventListener('click',function(){
    //1.Geneating a random roll
const dice =  Math.trunc(Math.random() * 6)+1
    //2. Display dice
diceEl.classList.remove('hidden');
diceEl.src = 'dice-'+ dice+'.png'; //how to bring img 
    //3.Check for rolled 1: if true , switch to next to player
if(dice !== 1){
//Add dice to the current score 
currentScore += dice;
document.getElementById('current--'+ activePlayer).textContent =currentScore;
}else{
//Switch player
document.getElementById('current--'+ activePlayer).textContent = 0;
currentScore = 0;
activePlayer = activePlayer === 0 ? 1 : 0;// exactly need to understand 
player0El.classList.toggle('player--active');//if statement is 'remove' -> 'add' , add-> remove
player1El.classList.toggle('player--active');
}
});
