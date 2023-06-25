import Tower from "./Tower";

import { useState } from "react";

function Game() {
  const [towers, setTowers] = useState([[3,2,1], [], []]);
  const [moves, setMoves] = useState(0);

  const moveDisc = (from, to) => {
    const newTowers = [...towers];
    const fromTower = newTowers[from];
    const toTower = newTowers[to];
    const disc = fromTower[fromTower.length - 1];

    toTower.push(disc);
    fromTower.pop();

    setTowers(newTowers);
    setMoves(moves + 1);
  };

  const handleDrop = (size, towerIndex) => {
    if (isGameOver()) {
      return; // Retorna se o jogo já foi concluído
    }
  const fromTowerIndex = towers.findIndex((tower) => tower.includes(size));
  const toTower = towers[towerIndex];

  if (toTower.length === 0 || size < toTower[toTower.length - 1]) {
    moveDisc(fromTowerIndex, towerIndex);
  }
};

  const isGameOver = () => {
    return towers[2].length === 3;
  };

  return (
    <>
      <header>
        <h1>Towers of Hanoi</h1>
      </header>
      <main>
        <div className="game">
          {towers.map((disk, index) => (
            <Tower
              key={index}
              discs={disk}
              ondrop={(size) => handleDrop(size, index)}
              isGameOver={isGameOver}
            />
          ))}
        </div>
        <div className="data-moves">
          <button value="Reset" onClick={() => window.location.reload()}> Reset </button>
          <label>
            <p>Discs</p>
            <select >
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">3</option>
              <option value="6">4</option>
              <option value="7">4</option>
              <option value="8">4</option>
            </select>
          </label>
          

          <p className="moves">Moves: {moves}</p>
          <p className="expected-moves"> Expected-moves: 7</p>
        </div>
        {isGameOver() && <p>Congratulaations!</p>}
      </main>
    </>
  );
}

export default Game;