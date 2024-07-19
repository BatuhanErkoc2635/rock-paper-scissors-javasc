const buttons = document.querySelectorAll("button")
const bigContainer = document.querySelector(".big-container")
const container = document.querySelector(".choice-container")
const humanText = document.createElement("p")
const robotText = document.createElement("p")
const winnerDiv = document.createElement("div")
const scoresDiv = document.createElement("div")
winnerDiv.classList.add("winnerDiv")
const winnerText = document.createElement("p")
scoresDiv.classList.add ("scoresDiv")
const showScoresText = document.createElement("p")
const robotScoreText = document.createElement("p")
const humanScoreText = document.createElement("p")


let robotScore = 0
let humanScore = 0

let robotChoseNumber = 0
let robotChoseText = ""

let humanChoice = ""


function robotChoose(){
    robotChoseNumber = Math.random()
    if(robotChoseNumber <= 0.33){
        robotChoseText = "rock"
    }
    else if (robotChoseNumber >= 0.33 && robotChoseNumber <= 0.66 ){
        robotChoseText = "scissor"
    }
    else if (robotChoseNumber > 0.66){
        robotChoseText = "paper"
    }
    robotText.textContent = "Robot choose: " + robotChoseText
    bigContainer.appendChild(container)
    container.append(robotText)
}
function humanChoose(){
        
    console.log(container)
    humanText.textContent = "You choose: " + humanChoice
    container.appendChild(humanText)
}

function displayWinner(winner){
    winnerText.textContent = winner
    showScoresText.textContent = "The scores"
    humanScoreText.textContent = "Human score: " + humanScore
    robotScoreText.textContent =" Robot score: " + robotScore
   
   
    

}

function playGame(){
    if(robotScore === 3 || humanScore === 3){
        let winnerDecide
        if (robotScore === 3 ){
            winnerDecide = "ROBOT"
        }
        else if (humanScore === 3){
            winnerDecide = "HUMAN "
        }
        alert("GAME ENDED " + winnerDecide + "WON! PLEASE REFRESH PAGE TO REPLAY")

    }
    else{
        humanChoose()
        robotChoose()
        if (humanChoice === "rock" && robotChoseText === "paper"){
            robotScore = robotScore + 1
            displayWinner("Robot won the round!")
        }
        else if (humanChoice === "rock" && robotChoseText === "scissor"){
            humanScore = humanScore + 1
            displayWinner("Human won the round!")
        }
        else if (humanChoice === "rock" && robotChoseText === "rock"){
            displayWinner("It's tie!")
        }
        else if (humanChoice === "paper" && robotChoseText === "rock"){
            humanScore = humanScore + 1
            displayWinner("Human won the round!")
        }
        else if (humanChoice === "paper" && robotChoseText === "scissor"){
            robotScore = robotScore + 1
            displayWinner("Robot won the round!")
        }
        else if (humanChoice === "paper" && robotChoseText === "paper"){
            displayWinner("It's tie!")
        }
        else if (humanChoice === "scissor" && robotChoseText === "paper"){
            humanScore = humanScore + 1
            displayWinner("Human won the round!")
        }
        else if (humanChoice === "scissor" && robotChoseText === "rock"){
            robotScore = robotScore + 1
            displayWinner("Robot won the round!")
        }
        else if (humanChoice === "scissor" && robotChoseText === "scissor"){
            displayWinner("It's tie!")
        }
        
    }

}


buttons.forEach(button => {
    function buttonClicked (){
        humanChoice = button.id
        
        playGame()
        console.log(robotChoseText)
        winnerDiv.appendChild(winnerText)
        winnerDiv.appendChild(showScoresText)
        scoresDiv.appendChild(humanScoreText)
        scoresDiv.appendChild(robotScoreText)
        winnerDiv.appendChild(scoresDiv)
        bigContainer.appendChild(winnerDiv)

        
    }

    button.addEventListener("click",buttonClicked)
}
)
