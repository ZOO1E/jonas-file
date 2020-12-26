'use strict';

//html에서 필요한 class ,id 값들을 가지고 옴!
//주로 우리가 변경해야 하는 값들을 넣어 놓는다.
const score1 =document.querySelector('#score--1');
const score0 =document.querySelector('#score--0');
const diceEl =document.querySelector('.dice');
const btnNew =document.querySelector('.btn--new');
const btnRoll =document.querySelector('.btn--roll');
const btnHold =document.querySelector('.btn--hold');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const player0El =document.querySelector('.player--0');
const player1El =document.querySelector('.player--1');

const switchPlayer = function(){ //we don't need to duplicate!
document.getElementById('current--'+ activePlayer).textContent = 0; //getEl을 쓰면 query를 쎃을때 붙는 #이 필요 X
currentScore = 0;
activePlayer = activePlayer === 0 ? 1 : 0;// exactly need to understand 
player0El.classList.toggle('player--active');//if statement is 'remove' -> 'add' , add-> remove
player1El.classList.toggle('player--active');
}




//starting condition
let currentScore,scores,activePlayer,playing;// 이렇게 해야 정의되어서 함수갖 ㅓㅇ상적으로 작동함

const init = function (){
    scores = [0,0];
    currentScore =0;
    activePlayer = 0;
    playing = true;
    diceEl.classList.add('hidden');

    score1.textContent = 0;
    score0.textContent = 0;
    current0El.textContent =0;
    current1El.textContent = 0;

    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
}
init(); //이렇게 하면   
console.log(init);


//Rollinmg dice functionality--------------------------
btnRoll.addEventListener('click',function(){
    if (playing){ 
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
switchPlayer();
}
}
});


//Hold Button ---------------------------------------------
btnHold.addEventListener('click',function(){
    if (playing){ // it is importnant! false 일때는 작동 x
    //1.add current score to active player's score
scores[activePlayer] += currentScore;// 값을 저장할 때 쓰는 Array property
//scores[1] = scores[1] + currentScore;
document.getElementById('score--'+ activePlayer).textContent = scores[activePlayer];  
//2.Check if player's sscore is >=100
    //Finish the game
if(scores[activePlayer] >= 100) {
    diceEl.classList.add('hidden');
    playing = false;
    document.querySelector('.player--' + activePlayer).classList.add('player--winner');
    document.querySelector('.player--' + activePlayer).classList.remove('player--active');

}else{
    //Switch the Players
    switchPlayer();

}

}
});

//New Game Button -----------------------------------------
btnNew.addEventListener('click',init); //주의 할것 'click' 이랑 ''click ' 이랑은 다른다!!!!!!!!!!!!!!!ㅆㅂ!!