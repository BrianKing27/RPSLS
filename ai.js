"use strict";

const prompt = require("prompt-sync")();
const{Player} = require("./player");




class AI extends Player {
    constructor(){
        console.log("Enter AI's name:");
        let AIName = prompt();
        super(AIName);
    }
}


module.exports = {
    AI: AI
}











