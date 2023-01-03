import { BoardItem } from "../../../contexts/games/TicTacToeContext";

export function getGameStatus(board: BoardItem[]): string {
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  let roundWon = false;
  for (let i = 0; i <= 7; i++) {
    const winCondition = winningConditions[i];
    let a = board.at(winCondition[0]);
    let b = board.at(winCondition[1]);
    let c = board.at(winCondition[2]);
    if ((a && a.value === "") || (b && b.value === "") || (c && c.value === "")) {
      continue;
    }
    if (a && b && c && a.value === b.value && b.value === c.value) {
      roundWon = true;
      break;
    }
  }
  if (roundWon) {
    return "won";
  }

  const boardFull = !board.some((tile) => tile.value === "");
  if (boardFull) {
    return "tie";
  }

  return "continue";
}
