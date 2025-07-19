'use strict'

class numberGenerator{
    constructor(){
    this.box = document.querySelector('.box');
    this.message = document.querySelector('.message');
    this.input = document.getElementById('guessInput');
    this.check = document.querySelector('.check');
    this.scoreDisplay = document.querySelector('.score');
    this.highScoreDisplay = document.querySelector('.highscore');
    this.again = document.querySelector('.again'); 

    // game stats
    this.secretNumber = this.generateSecretNumber();
    this.score = 20;
    this.highScore = 0;

    // event listener 
    this.check.addEventListener('click', this.checkGuess.bind(this))
    this.again.addEventListener('click', this.resetGame.bind(this))

}
    generateSecretNumber(){
        return Math.floor(Math.random()* 20) +1 ;
    } 

    displayMesssage(msg){
        this.message.textContent = msg;
    }

    checkGuess(){
    const guess = Number(this.input.value)
    
    if(!guess){
        this.displayMesssage('⛔ Please enter a number!');
        setTimeout(()=>this.displayMesssage(''),2000);
        return;
    } else if (guess === this.secretNumber){
        this.displayMesssage('🎉 Correct Number!');
        this.box.textContent = this.secretNumber;
        this.box.style.backgroundColor = 'green';

        if(this.score > this.highScore){
            this.highScore = this.score;
            this.highScoreDisplay.textContent = this.score;
        } 
       } else{
            if(this.score > 1){
            this.displayMesssage(guess > this.secretNumber? '📈 Too high!' : '📉 Too low!');
            this.score--;
            this.scoreDisplay.textContent = this.score;   
        } else{
            this.displayMesssage('💥 Game Over!')
            this.box.style.backgroundColor = 'red';
            this.justScore.textContent = 0;
            this.box.textContent = thissecretNumber;
        }
    }
    
       
}
    resetGame() {
    this.box.style.backgroundColor = 'black';
    this.box.textContent = '?';
    this.input.value = '';
    this.displayMesssage('');
    this.secretNumber = Math.floor(Math.random()* 20) + 1;
    this.scoreDisplay.textContent = 20;
    }
}

  
const game = new numberGenerator();
