import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { GoPrimitiveDot } from "react-icons/go";
import { TicTacToeContext } from "../../../contexts/games/TicTacToeContext";
import { getGameStatus } from "../utils";

import styles from "../styles/Tictactoe.module.scss";

type Props = {
  value: string;
  x: number;
  y: number;
};
export default function BoardItem({ value, y, x }: Props) {
  const { turn, board, players, setFinished, setWinner, setPlayers, setTie, setTurn } = useContext(TicTacToeContext);

  const handleClick = () => {
    const itemIndex = board.findIndex((item) => item.x === x && item.y === y);

    if (itemIndex < 0) return;

    if (board[itemIndex].value !== "") return;

    board[itemIndex].value = turn;
    const status = getGameStatus(board);

    switch (status) {
      case "won":
        const wonIndex = players.findIndex((player) => player.getSymbol().toLowerCase() === turn.toLowerCase());
        setFinished(true);
        setWinner(wonIndex);
        const tempPlayers = [...players];
        tempPlayers[wonIndex].setWins(tempPlayers[wonIndex].getWins() + 1);
        setPlayers([...tempPlayers]);
        break;
      case "tie":
        setFinished(true);
        setTie(true);
        break;
      default:
        setTurn(turn === "x" ? "o" : "x");
        break;
    }
  };

  const renderValue = () => {
    switch (value) {
      case "x":
        return <FaTimes style={{ color: "rgb(255, 255, 255)" }} />;
      case "o":
        return <GoPrimitiveDot style={{ color: "rgb(255,255,255)" }} />;
      default:
        return "";
    }
  };

  const styleClass = `c-pos-${y}-${x}`;

  return (
    <div className={styles["c-tictactoe__item"]} onClick={handleClick}>
      <div className={`${styles["c-tictactoe__item__content"]} ${styles[styleClass]}`}>{renderValue()}</div>
    </div>
  );
}
