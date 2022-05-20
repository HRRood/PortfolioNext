import Player from "../../Games/tictactoe/classes/Player";

export type TicTacToeContextType = {
  gameState: string;
  setGameState: (gameState: string) => void;
  players: Player[];
  setPlayers: (players: Player[]) => void;
  board: BoardItem[];
  setBoard: (board: BoardItem[]) => void;
  turn: string;
  setTurn: (turn: string) => void;
  playerStart: string;
  setPlayerStart: (playerStart: string) => void;
  winner: number;
  setWinner: (winner: number) => void;
  finished: boolean;
  setFinished: (finished: boolean) => void;
  tie: boolean;
  setTie: (tie: boolean) => void;
};

export type BoardItem = {
  value: string;
  x: number;
  y: number;
  neighbours: NeighbourBoardItem[];
};

export type NeighbourBoardItem = {
  x: number;
  y: number;
};
