var userScore = 0;
var computerScore = 0;
const userScore_span = document.querySelector(".user-score");
const computerScore_span = document.querySelector(".computer-score");
const ScoreBoard = document.querySelector(".score-board");
const result_div = document.querySelector(".winner");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");


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

}

function lose(userChoice,ComputerChoice){
    computerScore++;
    console.log("comp" +computerScore);
    result_div.innerHTML = "Computer wins ";
    computerScore_span.innerHTML = computerScore ;
    result_div.innerHTML = convertoword(userChoice)  + " beats " + convertoword(ComputerChoice) + ". You lose";
    ScoreBoard.style.border = "#d90d0d solid";
}

function draw(userChoice,ComputerChoice){
    console.log (" ok you go");
    result_div.innerHTML = convertoword(userChoice) + " beats " + convertoword(ComputerChoice) + ". Its a Draw";
}


// functions to convert r to rock, p to paper, s to scissor

function convertoword(letter){
    if(letter=='r') return "Rock";
    if(letter== 'p') return "Paper";
    if(letter == 's') return "Scissor";
}

