import { createContext, useState } from "react";

export const GameContext = createContext({
  gameData: -1,
  setGameData: () => {},
});

export const GameProvider = ({ children }) => {
  const [gameData, setGameData] = useState(-1);

  const value = { gameData, setGameData };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
