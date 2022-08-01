'use strict';
let numbertoguess = Math.trunc(Math.random()*20) + 1;
let score = 20;
let high = 0;
document.querySelector(".check").addEventListener('click', function(){
    let guess = document.querySelector(".guess").value;
    if(score>1){
        if(!guess){
            document.querySelector(".message").textContent = "No input given 🚫";
        }
        else if(guess==numbertoguess){
            document.querySelector(".message").textContent = "Correct Answer 🎉";
            document.querySelector("body").style.backgroundColor = "#60b347";
            document.querySelector(".number").style.width = "40rem";
            if(score>=high){
                document.querySelector(".highscore").textContent = score;
            }
        }
        else if(guess>numbertoguess){
            document.querySelector(".message").textContent = "Too High ⬆️";
            score--;
            document.querySelector(".score").textContent = score;
        }
        else if(guess<numbertoguess){
            document.querySelector(".message").textContent = "Too Low ⬇️";
            score--;
            document.querySelector(".score").textContent = score;
        }
    }
    else{
        document.querySelector(".message").textContent = "You Lose 😢";
        document.querySelector("body").style.backgroundColor= "red";
        score--;
        document.querySelector(".score").textContent = score;
    }
});
document.querySelector(".again").addEventListener('click',function(){
    score = 20;
    document.querySelector(".score").textContent = 20;
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector("body").style.backgroundColor= "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".guess").value='';
    numbertoguess = Math.trunc(Math.random()*20) + 1;
})
