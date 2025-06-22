let secretNumber = Math.floor(Math.random()* 20) +1;
let score = 20;
let highscore = 0;

// Selectors for the elements in the HTML
const input = document.getElementById("inputText");
const box = document.querySelector(".box");
const message = document.querySelector(".message");
const scoreDisplay = document.querySelector('.score');
const highscoreDisplay = document.querySelector(".highscore");

// to display Message 
function displayMessage(msg){
    message.textContent = msg;
}

// reset game
document.querySelector(".again").addEventListener("click", function(){
    secretNumber = Math.floor(Math.random()*20) +1;
    box.textContent = "?";
    box.style.backgroundColor = "black";
    input.value = "";
    score = 20;
    displayMessage("");
    scoreDisplay.textContent = score;
});

// check user input
document.querySelector(".check").addEventListener("click", function(){
     const guess = Number(input.value);

      if (!guess){
        displayMessage("Please enter a number");
       } else if (guess===secretNumber){
        displayMessage("🎉 Correct Number!");
        box.textContent = secretNumber;
        box.style.backgroundColor = 'green';

        if(score > highscore){
            highscore = score;
            highscoreDisplay.textContent = highscore;
        }
       } else {
        if (score > 1 ){
            displayMessage(guess > secretNumber ? "Too high" : "Too Low");
            score--;
            scoreDisplay.textContent = score;
        } else {
            displayMessage("Game Over!");
            scoreDisplay.textContent = 0;
        }
       } 

}); 