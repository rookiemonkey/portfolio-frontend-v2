import React, { useState } from 'react';

const MaxViewPortContext = React.createContext();

const MaxViewPortContextProvider = ({ children }) => {
  const [values, _] = useState({ height: 800, width: 1200 })

  return (
    <MaxViewPortContext.Provider value={values}>
      {children}
    </MaxViewPortContext.Provider>
  )
}

export { MaxViewPortContext, MaxViewPortContextProvider };