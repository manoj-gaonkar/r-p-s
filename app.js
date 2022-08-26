/* tailwind css begin */
tailwind.config = {

    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                clifford: 'rgba(255, 254, 254, 0.323)',
            }
        }

        ,
        keyframes: {
            bounce: {
                '0%, 100%': {
                    transform: 'translateY(-35%)',
                    animationTimingFunction: 'cubic-bezier(0.8,0,1,1)'
                },
            },
            pulse: {
                '0%,100%': {
                    color : '#8d6eff',
                },
                '50%': {
                    opacity: '.2',
                    color: 'white',
                    transform: 'translateY(-35%)'
                },
            }
        },
        animation: {
            bounce: 'bounce 1s infinite',
            pulse: 'pulse 2s cubic-bezier(.67,-0.02,.22,.97) infinite',
        
            
    },
    }
}


var userScore = 0;
var computerScore = 0;
const userScore_span = document.querySelector(".user-score");
const computerScore_span = document.querySelector(".computer-score");
const ScoreBoard = document.querySelector(".score-board");
const result_div = document.querySelector(".winner");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
const userlabel = document.getElementById('user-label');
const computerlabel = document.getElementById('computer-label');
var body = document.getElementById('body');
var modes = document.getElementById('mode');
var c = "";


main();
getComputerChoice();
game();

function getComputerChoice(){
    const choices = [ 'r' , 'p' , 's'];
    const RandomNumber = Math.floor(Math.random(choices)*3);
    return choices[RandomNumber];
}




function main(){
rock_div.addEventListener('click',function(){
    game('r');
})

paper_div.addEventListener('click',function(){
    game('p');

})

scissor_div.addEventListener('click',function(){
    game('s');
})
}

function game(userChoice){
    const ComputerChoice = getComputerChoice();
    

    switch(userChoice+ComputerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,ComputerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice,ComputerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,ComputerChoice);
            break;

    }
}

/// win lose draw 

function win(userChoice,ComputerChoice){
    userScore++;
    console.log("user"+userScore)
    userScore_span.innerHTML = userScore ;
    result_div.innerHTML = convertoword(userChoice)+" beats " + convertoword(ComputerChoice)+ ". You Won ";
    ScoreBoard.style.border = "#00ff08 solid ";
    ScoreBoard.classList.add("normal-fade");
    if (userScore == 10) {
        final("u");
        userlabel.classList.add("bg-green-300");
        window.setTimeout(labelcolor, 1000);
    }
}

function lose(userChoice,ComputerChoice){
    computerScore++;
    console.log("comp" +computerScore);
    result_div.innerHTML = "Computer wins ";
    computerScore_span.innerHTML = computerScore ;
    result_div.innerHTML = convertoword(userChoice)  + " beats " + convertoword(ComputerChoice) + ". You lose";
    ScoreBoard.style.border = "#d90d0d solid";
    // label color changing
    if (computerScore == 10) {
        final("c");
        computerlabel.classList.add("bg-green-300");
        window.setTimeout(labelcolor, 1000);


    }
}

function labelcolor() {
    computerlabel.classList.remove("bg-green-300");
    userlabel.classList.remove("bg-green-300");

}

function draw(userChoice,ComputerChoice){
    console.log (" ok you go");
    result_div.innerHTML = convertoword(userChoice) + " beats " + convertoword(ComputerChoice) + ". Its a Draw";
    ScoreBoard.style.border = "#f2cb1b solid";
}
 

function final(c) {
    console.log("ok"+c);
    if (c == "c") {
        result_div.innerHTML = "COMPUTER WINS";
    }
    else if(c=="u"){
        result_div.innerHTML = "YOU WIN";
    }

    c=""
    computerScore = 0;
    userScore = 0;
    computerScore_span.innerHTML = 0;
    userScore_span.innerHTML = 0;
}


// functions to convert r to rock, p to paper, s to scissor

function convertoword(letter){
    if(letter=='r') return "Rock";
    if(letter== 'p') return "Paper";
    if(letter == 's') return "Scissor";
}

modes.addEventListener('click', () => {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        modes.innerHTML = '<div  class="bg-gray-700 absolute shadow-md  bottom-10 md:bottom-auto right-10 right- md:right-0 md:top-0 rounded-full p-2 md:m-7"> <img src="./images/moon_light.png" alt=""></div>';
    }
    else {
        document.documentElement.classList.add('dark');
        modes.innerHTML = '<div class="bg-white shadow-md absolute bottom-10 md:bottom-auto right-10 right- md:right-0 md:top-0 rounded-full p-2 md:m-7 "><img src="./images/moon_dark.png" alt=""></div>';
    }
})
