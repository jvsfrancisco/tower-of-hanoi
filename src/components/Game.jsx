import Tower from "./Tower";
import { useState, useEffect } from "react";

const generateTowers = (discs) => {
  const initialTower = Array.from(
    { length: discs },
    (_, index) => discs - index
  );
  return [initialTower, [], []];
};

const expectedMoveHandle = (discs) => {
  return Math.pow(2, discs) - 1;
};

function Game() {
  const [discs, setDiscs] = useState(2);
  const [towers, setTowers] = useState(generateTowers(discs));
  const [moves, setMoves] = useState(0);
  const [expectedMoves, setExpectedMoves] = useState(expectedMoveHandle(discs));
  const [gameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    isGameOver();
  }, [towers]);

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
  const fromTower = towers[fromTowerIndex];
  const toTower = towers[towerIndex];

  // Verifica se é possível mover a peça para a torre de destino
  if (
    (toTower.length === 0 || size < toTower[toTower.length - 1]) &&
    (fromTowerIndex !== towerIndex || fromTower.indexOf(size) === fromTower.length - 1)
  ) {
    moveDisc(fromTowerIndex, towerIndex);
  }
};

  const isGameOver = () => {
    return setIsGameOver(towers[2].length === discs);
  };

  const handleReset = () => {
    setDiscs(2);
    setTowers(generateTowers(discs));
    setMoves(0);
  };

  const handleNumberOfDiscs = (event) => {
    const newNumberOfDiscs = parseInt(event.target.value);
    setDiscs(newNumberOfDiscs);
    setTowers(generateTowers(newNumberOfDiscs));
    setMoves(0);
    setExpectedMoves(expectedMoveHandle(newNumberOfDiscs));
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
              towerIndex={index}
              key={index}
              discs={disk}
              ondrop={(size) => handleDrop(size, index)}
              isGameOver={gameOver}
            />
          ))}
        </div>
        <div className="data-moves">
          <button value="Reset" onClick={() => handleReset()}>
            Reset
          </button>
          <div className="select-discs">
            <label htmlFor="numDiscs">Number of Discs:</label>
            <select id="numDiscs" value={discs} onChange={handleNumberOfDiscs}>
              {[2, 3, 4, 5, 6, 7, 8].map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
          <p className="moves">Moves: {moves}</p>
          <p className="expected-moves"> Expected-moves: {expectedMoves}</p>
        </div>
        {gameOver ? (
          moves === expectedMoves ? (
            <p className="win">You Win!</p>
          ) : (
            <p className="lose">You Lose!</p>
          )
        ) : null}
      </main>
    </>
  );
}

export default Game;
