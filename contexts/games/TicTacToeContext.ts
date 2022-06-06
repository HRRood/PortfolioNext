import { BoardItem, TicTacToeContextType } from "./../../@types/games/TicTacToe.d";
import { createContext } from "react";
import Player from "../../Games/tictactoe/classes/Player";

export const GAMESTATES = ["init", "score", "progress"];

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
