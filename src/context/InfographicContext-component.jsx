import { createContext, useState } from "react";

export const InfographicContext = createContext({
  infoClicked: "introduction",
  setInfoClicked: () => {},
});

export const InfographicProvider = ({ children }) => {
  const [infoClicked, setInfoClicked] = useState("introduction");
  const value = { infoClicked, setInfoClicked };

  return (
    <InfographicContext.Provider value={value}>
      {children}
    </InfographicContext.Provider>
  );
};
