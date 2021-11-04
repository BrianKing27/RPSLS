"use strict";;


    class Player {
        constructor(name) {
            this.name = name            //? done
            this.score = 0;              
            this.selectedGesture = []; //? done
            this.gestures = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];; //? done
        }

}
console.log(this.gestures)
module.exports = {
    Player: Player,
}