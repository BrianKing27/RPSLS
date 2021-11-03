"use strict";
const{Player} = require("./Player");

class AI extends Player {
    constructor() {
        let AIname = "User" + Math.floor(Math.random(1) * 100000) + 1;
        super(AIname);
    }

    selectedGesture(){

        let num = Math.floor(Math.random() * gestures.length);
        this.selectedGesture = gestures[num];
    }
}



module.exports = {
    AI: AI,
}




