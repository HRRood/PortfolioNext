import React, { useContext, useRef } from "react";
import { GAMESTATES, TicTacToeContext } from "../../../contexts/games/TicTacToeContext";
import Input from "../../../components/form/Input";
import Player from "../classes/Player";

import styles from "../styles/Tictactoe.module.scss";

export default function Init() {
  const { gameState, setPlayers, setGameState, players } = useContext(TicTacToeContext);
  const player1Ref = useRef<HTMLInputElement>(null);
  const player2Ref = useRef<HTMLInputElement>(null);

  const resetError = () => {
    if (!player1Ref?.current) return;
    if (!player2Ref?.current) return;
    player1Ref.current.classList.remove("error");
    player2Ref.current.classList.remove("error");
  };

  const startGame = () => {
    if (!player1Ref?.current) return;
    if (!player2Ref?.current) return;
    resetError();
    const tempPlayerArray: Player[] = [];
    const player1 = player1Ref.current.value;
    const player2 = player2Ref.current.value;
    if (!player1 || !player2) {
      if (!player1) player1Ref.current.classList.add("error");
      if (!player2) player2Ref.current.classList.add("error");
      return;
    }
    tempPlayerArray.push(new Player(player1, "X"));
    tempPlayerArray.push(new Player(player2, "O"));

    setPlayers([...tempPlayerArray]);
    nextGameState();
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
    <div className={styles["c-init"]}>
      <h2>Who are playing this game?</h2>
      <div className={styles["c-player-create"]}>
        <Input id="player_one" label="Player 1" name="player_one" type="text" value={players[0]} inputRef={player1Ref} />
        <Input id="player_two" label="Player 2" name="player_two" type="text" value={players[1]} inputRef={player2Ref} />

        <button className="c-btn c-btn--primary" onClick={startGame}>
          Start
        </button>
      </div>
    </div>
  );
}
