import React, { useState } from "react";

const GreetingsContext = React.createContext();

const GreetingsContextProvider = ({ children }) => {
  const [hasGreeted, setHasGreeted] = useState(false)

  return (
    <GreetingsContext.Provider value={{ hasGreeted, setHasGreeted }} >
      {children}
    </GreetingsContext.Provider>
  )
}

export { GreetingsContext, GreetingsContextProvider }