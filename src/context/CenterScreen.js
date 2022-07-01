import React, { useState } from "react";

const CenterScreenContext = React.createContext();

const CenterScreenContextProvider = ({ children }) => {
  const [centerScreenOriginEl, setCenterScreenOriginEl] = useState(null)

  return (
    <CenterScreenContext.Provider value={{ centerScreenOriginEl, setCenterScreenOriginEl }} >
      { children }
    </CenterScreenContext.Provider>
  )
}

export { CenterScreenContext, CenterScreenContextProvider }