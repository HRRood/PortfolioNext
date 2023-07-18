import { createContext } from "react";
import Player from "../../Games/tictactoe/classes/Player";

export const GAMESTATES = ["init", "score", "progress"];

export interface TicTacToeContextType {
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
}

export interface BoardItem {
  value: string;
  x: number;
  y: number;
  neighbours: NeighbourBoardItem[];
}

export interface NeighbourBoardItem {
  x: number;
  y: number;
}
export const defaultTicTacToeContext: TicTacToeContextType = {
  gameState: "init",
  setGameState: (gameState: string) => {},
  players: [],
  setPlayers: (players: Player[]) => {},
  board: [],
  setBoard: (board: BoardItem[]) => {},
  turn: "",
  setTurn: (turn: string) => {},
  playerStart: "",
  setPlayerStart: (playerStart: string) => {},
  winner: -1,
  setWinner: (winner: number) => {},
  finished: false,
  setFinished: (finished: boolean) => {},
  tie: false,
  setTie: (tie: boolean) => {},
};

export const TicTacToeContext = createContext<TicTacToeContextType>(defaultTicTacToeContext);
