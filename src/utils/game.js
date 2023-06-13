//Purpose: Exporting the game functions for the game functionality.

export const GameFunctions = {
    // Purpose: This function checks if the game is over.
    // Parameters: None.
    // Returns: True if the game is over, false otherwise.
    isGameOver: function() {
        if (this.state.towers[2].length === this.state.numDisks || this.state.towers[1].length === this.state.numDisks) {
            return true;
        }
        return false;
    },
    canMoveDisk: function(disk, tower) {
        if (tower.length === 0) {
            return true;
        }
        if (disk < tower[tower.length - 1]) {
            return true;
        }
        return false;
    },
    moveDisk: function(disk, fromTower, toTower) {
        if (this.canMoveDisk(disk, toTower)) {
            toTower.push(disk);
            fromTower.pop();
        } else {
            console.log("Invalid move!");
        }
        return;
    },
    

}
