"use strict";
const prompt = require("prompt-sync")();
const{Player} = require("./player");





class Human extends Player {
    constructor(){
        console.log("Enter your name:");
        let humanName = prompt();
        super(humanName);
    }
}


module.exports = {
    Human: Human
}
