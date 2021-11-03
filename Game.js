"use strict";
const prompt = require("prompt-sync")();
const {AI} = require("./AI");
const {Human} = require("./Human");
const{Player} = require("./Player");




class Game 
{
    constructor(rules, comparedGestures, displayWinner) {
        this.humanPlayer
        this.npcPlayer
        this.player

    }

    createMatch(){
        console.log("Welcome to the THUNDERDOME!!");
        console.log("let's create our match, starting with players!");
        this.HumanPlayer = new Human();
        this.npcPlayer = new AI();
        this.player = new Player();

    }
    rules(){
        console.log(`Must choose one of the following gestures ${this.player.gestures} \n`);
        console.log(`There are a total of 25 different outcomes in each round. The following are all possible winning pairs:` + '\n');
        console.log(`Rock > Scissors.` + '\n' `Rock > Lizard` + '\n' `Scissors > Lizard` + '\n' `Scissors > Paper` + '\n' `Spock > Scissors` + '\n' `Spock > Rock` + '\n' `Paper > Rock` + '\n' `Paper > Rock` + '\n' `Lizard > Paper` + '\n' `Lizard > Spock`);
    //TODO: WRITE A FUNCTION SIMILAR TO MY CONSOLOE.LOG ABOVE. it SHOULD TAKE EACH PLAYERS HAND, SAVE RESULT TO A VARIABLE, PASS VARIABLE THRU FUNCTION.  
    }
    compareGestures(){
        while(this.HumanPlayer.score > 0 && this.HumanPlayer.AI > 0){
            
        }
    }
}


module.exports = {
    Game: Game
}

console.log(new AI());