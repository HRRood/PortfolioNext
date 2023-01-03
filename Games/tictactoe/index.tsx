import React, { useState } from "react";

// VIEWS
import Init from "./views/Init";
import Score from "./views/Score";
import Board from "./views/Board";
import { TicTacToeContext, defaultTicTacToeContext, BoardItem } from "../../contexts/games/TicTacToeContext";
import Player from "./classes/Player";

import styles from "./styles/Tictactoe.module.scss";

export default function TicTacToeGame() {
  const [gameState, setGameState] = useState<string>(defaultTicTacToeContext.gameState);
  const [players, setPlayers] = useState<Player[]>(defaultTicTacToeContext.players);
  const [board, setBoard] = useState<BoardItem[]>(defaultTicTacToeContext.board);
  const [turn, setTurn] = useState<string>(defaultTicTacToeContext.turn);
  const [playerStart, setPlayerStart] = useState<string>(defaultTicTacToeContext.playerStart);
  const [winner, setWinner] = useState<number>(defaultTicTacToeContext.winner);
  const [finished, setFinished] = useState<boolean>(defaultTicTacToeContext.finished);
  const [tie, setTie] = useState<boolean>(defaultTicTacToeContext.tie);

  const renderGameState = () => {
    if (gameState === "init") return <Init />;
    if (gameState === "score") return <Score />;
    if (gameState === "progress") return <Board />;
    return <div>Error</div>;
  };

  return (
    <TicTacToeContext.Provider
      value={{
        gameState,
        setGameState,
        players,
        setPlayers,
        board,
        setBoard,
        turn,
        setTurn,
        playerStart,
        setPlayerStart,
        winner,
        setWinner,
        finished,
        setFinished,
        tie,
        setTie,
      }}
    >
      <div className={styles["c-tictactoe"]}>{renderGameState()}</div>
    </TicTacToeContext.Provider>
  );
}
