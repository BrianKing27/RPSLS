"use strict";;


    class Player {
        constructor(name) {
            this.name = name
            this.score = 0;              
            this.selectedGesture = []; 
            this.gestures = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
            this.gesturesLC = ["rock", "paper", "scissors", "lizard", "spock"];
        }

}

module.exports = {
    Player: Player,
}