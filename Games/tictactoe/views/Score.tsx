import React, { useContext, useEffect } from "react";
import { BoardItem, GAMESTATES, NeighbourBoardItem, TicTacToeContext } from "../../../contexts/games/TicTacToeContext";

import styles from "../styles/Tictactoe.module.scss";

export default function Score() {
  const { players, setBoard, setWinner, setFinished, setTie, setPlayerStart, playerStart, setGameState, gameState } = useContext(TicTacToeContext);
  let sorted = players.slice();

  sorted = sorted.sort((a, b) => b.getWins() - a.getWins());

  useEffect(() => {
    setBoard([]);
    setWinner(-1);
    setFinished(false);
    setTie(false);
    setPlayerStart(playerStart === "x" ? "o" : "x");

    const tempBoard: BoardItem[] = [];
    for (let y = 0; y < 3; y++) {
      for (let x = 0; x < 3; x++) {
        const neighbours = getNeighbors(x, y);
        tempBoard.push({ value: "", y, x, neighbours });
      }
    }

    setBoard([...tempBoard]);
  }, []);

  const getNeighbors = (pos_x: number, pos_y: number): NeighbourBoardItem[] => {
    const neighbours = [];
    for (let y = 0; y < 3; y++) {
      for (let x = 0; x < 3; x++) {
        const sameTile = pos_x === x && pos_y === y;
        if (!sameTile) {
          if (x === pos_x + 1 || x === pos_x || x === pos_x - 1) {
            if (y === pos_y + 1 || y === pos_y || y === pos_y - 1) {
              neighbours.push({ x, y });
            }
          }
        }
      }
    }
    return neighbours;
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
    <div className={styles["c-score"]}>
      <h2 className={styles["c-score__title"]}>score</h2>
      <table className="c-table c-table--score">
        <thead>
          <tr>
            <th className="c-table__symbol">Symbol</th>
            <th className="c-table__name">Name</th>
            <th className="c-table__wins">Wins</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((player, i) => {
            return (
              <tr key={i} className="c-table__tr">
                <td>{player.getSymbol()}</td>
                <td>{player.getName()}</td>
                <td>{player.getWins()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button className="c-btn c-btn--primary" onClick={nextGameState}>
        Start
      </button>
    </div>
  );
}
