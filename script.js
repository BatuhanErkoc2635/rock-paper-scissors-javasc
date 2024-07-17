let computer_choice_number = 0

let computer_choice_result = "none"
let human_choice_result = "none"
let humanScore = 0
let computerScore = 0



function getHumanChoice(){
    human_choice_result = String(prompt("Please write your answer: (rock,paper or scissor)"))
    return human_choice_result
}



function getComputerChoice(){
    computer_choice_number = Math.random()
    if(computer_choice_number < 0.3){
        computer_choice_result = "rock"
    }
    else if (computer_choice_number > 0.3 && computer_choice_number < 0.6)
    {
        computer_choice_result = "paper"
    }
    else if (computer_choice_number > 0.6 && computer_choice_number < 1)
    {
        computer_choice_result = "scissor"
    }
    return computer_choice_result
}

function displayScore(winner){
    console.log("Human Choose:" + human_choice_result)
    console.log("Computer Choose:" + computer_choice_result)
    console.log(winner + " Got 1 points!")
    console.log("Human:" +humanScore)
    console.log("Computer:" + computerScore)
}

function playRound(){
    if (humanScore === 3 || computerScore === 3){
        console.log("Game Ended")
        console.log("----------------")
        console.log ("Final Scores:")
        console.log("Human:" +humanScore)
        console.log("Computer:" + computerScore)
    }
    else
    {
        console.log("--------------------")
        console.log("Starting new round!")
        console.log("--------------------")
        getHumanChoice()
        getComputerChoice()
        human_choice_result = human_choice_result.toLowerCase()
        if (human_choice_result === "rock" && computer_choice_result === "paper" ){
            computerScore = computerScore + 1
            displayScore("Computer")
            playRound()
        }
        else if (human_choice_result === "rock" && computer_choice_result ==="scissor"){
            humanScore = humanScore + 1
            displayScore("Human")
            playRound()
        }
        else if (human_choice_result === "rock" && computer_choice_result ==="rock"){
            console.log("Human Choose:" + human_choice_result)
            console.log("Computer Choose:" + computer_choice_result)
            console.log("It's draw!")
            playRound()
        }
        else if (human_choice_result === "paper" && computer_choice_result ==="scissor"){
            computerScore = computerScore + 1
            displayScore("Computer")
            playRound()
        }
        else if (human_choice_result === "paper" && computer_choice_result ==="rock"){
            humanScore = humanScore + 1
            displayScore("Human")
            playRound()
        }
        else if (human_choice_result === "paper" && computer_choice_result ==="paper"){
            console.log("Human Choose:" + human_choice_result)
            console.log("Computer Choose:" + computer_choice_result)
            console.log("It's draw!")
            playRound()
        }
        else if (human_choice_result === "scissor" && computer_choice_result ==="rock"){
            computerScore = computerScore + 1
            displayScore("Computer")
            playRound()
        }
        else if (human_choice_result === "scissor" && computer_choice_result ==="paper"){
            humanScore = humanScore + 1
            displayScore("Human")
            playRound()
        }
        else if (human_choice_result === "scissor" && computer_choice_result ==="scissor"){
            console.log("Human Choose:" + human_choice_result)
            console.log("Computer Choose:" + computer_choice_result)
            console.log("It's draw!")
            playRound()
        }    
    }
}
playRound()






