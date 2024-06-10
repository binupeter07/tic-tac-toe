import React from "react";

const GameOver = ({ winner, restartHandler }) => {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p> it's Draw</p>}
      <p>
        <button onClick={restartHandler}>Rematch!</button>
      </p>
    </div>
  );
};

export default GameOver;
