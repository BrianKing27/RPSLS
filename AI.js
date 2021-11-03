"use strict";

const{Player} = require("./Player");
const prompt = require("prompt-sync")();


class AI extends Player {
    constructor() {
        let AIname = "computer" + Math.floor(Math.random(1) * 100000) + 1;
        let AIPoints = 0;
        let aiRPSLS = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
        let num = Math.floor(Math.random(1) * 5) + 1
        let aiChoice = aiRPSLS[num];
        super(AIname, AIPoints, aiChoice);
    }
}



module.exports = {
    AI: AI
}




