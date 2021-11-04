"use strict";
const prompt = require("prompt-sync")();

const {AI} = require("./AI");
const {Human} = require("./Human");
const{Player} = require("./Player");

this.gestures.length


class Game 
{
    constructor(rules, comparedGestures, displayWinner) {
        this.player1 = null;
        this.player2 = null;

    }

    createMatch(){
        console.log("let's create our match, starting with players!");
        if(gameType == 2){
            this.player1 = Human();
            this.player2 = Human();
        }
        else{
            this.player1 = Human();
            this.player2 = AI();
        }
      
        

    }
    rules(){
        console.log(`Must choose one of the following gestures ${this.player.gestures} \n`);
        console.log(`There are a total of 25 different outcomes in each round. The following are all possible winning pairs:` + '\n');
        console.log(`Rock > Scissors.` + '\n' `Rock > Lizard` + '\n' `Scissors > Lizard` + '\n' `Scissors > Paper` + '\n' `Spock > Scissors` + '\n' `Spock > Rock` + '\n' `Paper > Rock`  +  `Paper > Spock`  + '\n' `Lizard > Paper` + '\n' `Lizard > Spock`);
        
        this.player1.selectedGesture();
        this.player2.selectedGesture();
        console.log(this.player1.selectedGesture)
        console.log(this.player2.selectedGesture)


 

        if(this.player1.selectedGesture == this.player2.selectedGesture){
            //tie
        }
        else if(this.player1.selectedGesture == "rock"  && (this.player2.selectedGesture == "Paper" || this.player2.selectedGesture == "Spock")){
            //player2
        }
        else if(this.player1.selectedGesture == "paper"  && (this.player2.selectedGesture == "Paper" || this.player2.selectedGesture == "Spock")){

        }
        else if(this.player1.selectedGesture == "scissor"  && (this.player2.selectedGesture == "Paper" || this.player2.selectedGesture == "Spock")){

        }
        else if(this.player1.selectedGesture == "lizardsd"  && (this.player2.selectedGesture == "Paper" || this.player2.selectedGesture == "Spock")){

        }
        else if(this.player1.selectedGesture == "rock"  && (this.player2.selectedGesture == "Paper" || this.player2.selectedGesture == "Spock")){

        }

    }




}



module.exports = {
    Game: Game
}



