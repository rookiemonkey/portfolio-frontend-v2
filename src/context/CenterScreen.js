import React, { useState } from "react";

const CenterScreenContext = React.createContext();

const CenterScreenContextProvider = ({ children }) => {
  const [centerScreen, setCenterScreen] = useState({ x:0, y:0 })

  return (
    <CenterScreenContext.Provider value={{ centerScreen, setCenterScreen }} >
      { children }
    </CenterScreenContext.Provider>
  )
}

export { CenterScreenContext, CenterScreenContextProvider }