"use strict";

const{Player} = require("./Player");
const prompt = require("prompt-sync")();


class Human extends Player {
    constructor() {
        let humanName = prompt("Choose a name!: ");
        super(humanName);   
    }

    selectGesture(){
        let userInput = prompt("Select one from the following: Rock, Paper, Scissors, Lizard, Spock:  ");
        this.selectedGesture = userInput.toLowerCase();
        // switch(this.selectedGesture());
    }
}
module.exports = {
    Human: Human,
}