import React, { useState } from "react";

const GreetingsContext = React.createContext();

const GreetingsContextProvider = ({ children }) => {
  const [hasGreeted, setHasGreeted] = useState(false)

  const handleSetHasGreeted = () => {
    setHasGreeted(true)
    document.querySelector('.contain-screen').classList.remove('contain-screen-with-greeting')
  }

  return (
    <GreetingsContext.Provider value={{ hasGreeted, handleSetHasGreeted }} >
      {children}
    </GreetingsContext.Provider>
  )
}

export { GreetingsContext, GreetingsContextProvider }