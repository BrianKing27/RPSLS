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


     compareGestures(){

        if(this.player1.selectedGesture == this.player2.selectedGesture){
            console.log("It's s TIE!!!");
        } 
        else if(this.player1.selectedGesture == "rock"  && (this.player2.selectedGesture == "Paper" || this.player2.selectedGesture == "Spock")){
            console.log(`${this.player2.name} gets one point!!!`);
            this.player2.score++
        }
        else if(this.player1.selectedGesture == "paper"  && (this.player2.selectedGesture == "Scissors" || this.player2.selectedGesture == "Lizard")){
            console.log(`${this.player2.name} gets one point!!!`);
            this.player2.score++

        }
        else if(this.player1.selectedGesture == "scissor"  && (this.player2.selectedGesture == "Rock" || this.player2.selectedGesture == "Spock")){
            console.log(`${this.player2.name} gets one point!!!`);
            this.player2.score++
        }
        else if(this.player1.selectedGesture == "lizardsd"  && (this.player2.selectedGesture == "Scissors" || this.player2.selectedGesture == "Rock")){
            console.log(`${this.player2.name} gets one point!!!`);
            this.player2.score++
        }
        else if(this.player1.selectedGesture == "Spock"  && (this.player2.selectedGesture == "Paper" || this.player2.selectedGesture == "Lizard")){
            console.log(`${this.player2.name} gets one point!!!`);
            this.player2.score++
        }
        else if(this.player2.selectedGesture == "rock"  && (this.player1.selectedGesture == "Paper" || this.player1.selectedGesture == "Spock")){
            console.log(`${this.player1.name} gets one point!!!`);
            this.player1.score++
        }
        else if(this.player2.selectedGesture == "paper"  && (this.player1.selectedGesture == "Scissors" || this.player1.selectedGesture == "Lizard")){
            console.log(`${this.player1.name} gets one point!!!`);
            this.player1.score++

        }
        else if(this.player2.selectedGesture == "scissor"  && (this.player1.selectedGesture == "Rock" || this.player1.selectedGesture == "Spock")){
            console.log(`${this.player1.name} gets one point!!!`);
            this.player1.score++
        }
        else if(this.player2.selectedGesture == "lizardsd"  && (this.player1.selectedGesture == "Scissors" || this.player1.selectedGesture == "Rock")){
            console.log(`${this.player1.name} gets one point!!!`);
            this.player1.score++
        }
        else if(this.player2.selectedGesture == "Spock"  && (this.player1.selectedGesture == "Paper" || this.player1.selectedGesture == "Lizard")){
            console.log(`${this.player1.name} gets one point!!!`);
            this.player1.score++
        }

    }




}



module.exports = {
    Game: Game
}



