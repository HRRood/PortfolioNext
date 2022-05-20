import React, { useContext, useEffect } from "react";
import { GAMESTATES, TicTacToeContext } from "../../../contexts/games/TicTacToeContext";
import BoardItem from "../components/boardItem";

import styles from "../styles/Tictactoe.module.scss";

export default function Board() {
  const { board, finished, tie, winner, players, gameState, setGameState, setTurn, playerStart, turn } = useContext(TicTacToeContext);

  useEffect(() => {
    setTurn(playerStart);
  }, []);

  const getEndText = () => {
    if (tie) {
      return "It is a Tie!";
    }

    const player = players[winner];

    return `${player.getName()} won the game`;
  };

  const nextGameState = () => {
    const indexCurrentState = GAMESTATES.findIndex((item) => item === gameState);
    if (GAMESTATES[indexCurrentState + 1]) {
      setGameState(GAMESTATES[indexCurrentState + 1]);
    } else {
      setGameState(GAMESTATES[1]);
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "center", width: "100%" }}>Player {turn} turn</h1>
      <div className={styles["c-tictactoe__board"]}>
        {board.map((item, i) => {
          return <BoardItem key={i} value={item.value} y={item.y} x={item.x} />;
        })}
        {finished && (
          <div className={styles["c-tictactoe__overlay"]}>
            <h2>{getEndText()}</h2>
            <button className="c-btn c-btn--primary" onClick={nextGameState}>
              Rematch
            </button>
          </div>
        )}
      </div>
    </>
  );
}
