"use strict";
const prompt = require("prompt-sync")();

const {AI} = require("./AI");
const {Human} = require("./Human");


class Game {

    constructor() {
        this.player1;
        this.player2;

    }

    createMatch(gameType = 1){
        console.log("let's create our match, starting with players!");
        if(gameType == 2){
            this.player1 = new Human();
            this.player2 = new Human();
        }
        else{
            this.player1 = new Human();
            this.player2 = new AI();
        }
      
        

    }
    rules(){
        
        console.log("Here are the rules of the game:");
        console.log("Rock > Scissors \nRock > Lizard \nScissors > Lizard \nScissors > Paper \nSpock > Scissors \nSpock > Rock \nPaper > Rock \nPaper > Spock \nLizard > Paper \nLizard > Spock \n\n");


        this.player1.selectGesture();
        this.player2.selectGesture();
        console.log(this.player1.selectedGesture)
        console.log(this.player2.selectedGesture)
        // this.compareGestures();

    }
    compareGestures() {

        if(this.player1.selectedGesture == this.player2.selectedGesture){
            console.log("It's s TIE!!!");
        }
        else if(this.player1.selectedGesture == "rock"  && (this.player2.selectedGesture == "paper" || this.player2.selectedGesture == "spock")){
            console.log(`${this.player2.name} gets one point!!!`);
            this.player2.score++
        }
        else if(this.player1.selectedGesture == "paper"  && (this.player2.selectedGesture == "scissors" || this.player2.selectedGesture == "lizard")){
            console.log(`${this.player2.name} gets one point!!!`);
            this.player2.score++

        }
        else if(this.player1.selectedGesture == "scissors"  && (this.player2.selectedGesture == "rock" || this.player2.selectedGesture == "spock")){
            console.log(`${this.player2.name} gets one point!!!`);
            this.player2.score++
        }
        else if(this.player1.selectedGesture == "lizard"  && (this.player2.selectedGesture == "scissors" || this.player2.selectedGesture == "rock")){
            console.log(`${this.player2.name} gets one point!!!`);
            this.player2.score++
        }
        else if(this.player1.selectedGesture == "spock"  && (this.player2.selectedGesture == "paper" || this.player2.selectedGesture == "lizard")){
            console.log(`${this.player2.name} gets one point!!!`);
            this.player2.score++
        }
        else if(this.player2.selectedGesture == "rock"  && (this.player1.selectedGesture == "paper" || this.player1.selectedGesture == "spock")){
            console.log(`${this.player1.name} gets one point!!!`);
            this.player1.score++
        }
        else if(this.player2.selectedGesture == "paper"  && (this.player1.selectedGesture == "scissors" || this.player1.selectedGesture == "lizard")){
            console.log(`${this.player1.name} gets one point!!!`);
            this.player1.score++

        }
        else if(this.player2.selectedGesture == "scissors"  && (this.player1.selectedGesture == "rock" || this.player1.selectedGesture == "spock")){
            console.log(`${this.player1.name} gets one point!!!`);
            this.player1.score++
        }
        else if(this.player2.selectedGesture == "lizard"  && (this.player1.selectedGesture == "scissors" || this.player1.selectedGesture == "rock")){
            console.log(`${this.player1.name} gets one point!!!`);
            this.player1.score++
        }
        else if(this.player2.selectedGesture == "spock"  && (this.player1.selectedGesture == "paper" || this.player1.selectedGesture == "lizard")){
            console.log(`${this.player1.name} gets one point!!!`);
            this.player1.score++
        }

    }
    
    declareWinner() {
        //Working on it
    }

    runGame() {
        this.createMatch();
        this.rules();
        this.compareGestures();
        this.declareWinner();

    }

}



module.exports = {
    Game: Game
}



