"use strict";
// npm audit fix --force
const{Player} = require("./Player");
const prompt = require("prompt-sync")();


class Human extends Player {
    constructor() {
        let humanName = prompt("Choose a name!: ");
        super(humanName);   
    }

    selectedGesture(){
        this.selectedGesture =  prompt("Choose a gesture. Type the Abbr. or the number" + "/n" + "Rock: Ro/1" + "/n" + "Paper: Pa/2" + "/n" + "Scissors: Sc/3"+ "/n" + "Lizard: Li/4"+ "/n" + "Spock: Sp/5");
        switch(this.selectedGesture())
    }
}



module.exports = {
    Human: Human,
}