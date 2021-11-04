"use strict";

const{Player} = require("./Player");
const prompt = require("prompt-sync")();


class Human extends Player {
    constructor() {
        let humanName = prompt("Choose a name!: ");
        super(humanName);   
    }

    selectGesture(isError = false){
        let userInput = prompt(`${(isError) ? 'Error!!!' : ''} Select one from the following: Rock, Paper, Scissors, Lizard, Spock:  `);
        this.selectedGesture = userInput.toLowerCase();
        if(this.gesturesLC.indexOf(this.selectedGesture) === -1){
            this.selectGesture(true);
        }
        // switch(this.selectedGesture());
    }
}
module.exports = {
    Human: Human,
}