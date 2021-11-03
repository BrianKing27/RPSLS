"use strict";

const{Player} = require("./Player");
const prompt = require("prompt-sync")();


class Human extends Player {
    constructor() {
        console.log("Enter your name:");
        let humanName = prompt();
        let humanPoints = 0;
        super(humanName, humanPoints);
        
    }
}



module.exports = {
    Human: Human
}