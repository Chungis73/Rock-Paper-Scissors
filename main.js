// Your game is going to play against the computer, so begin with a function 
// called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’
// or ‘Scissors’. We’ll use this function in the game to make the computer’s
// play. Tip: use the console to make sure this is returning the expected output 
// before moving to the next step!

const choices = ["rock","paper","scissors"]

function getComputerChoice(){
    return choices[Math.floor(Math.random() * choices.length)]
}

console.log(getComputerChoice())
// Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - 
// the playerSelection and computerSelection - snd then return a string that declares the winner of the round 
// like so: "You Lose! Paper beats Rock"

function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return "Draw"
    }


}

// Write a NEW function called game(). Call the playRound function inside of this one to play 
// a 5 round game that keeps score and reports a winner or loser at the end.

function game(){

}
