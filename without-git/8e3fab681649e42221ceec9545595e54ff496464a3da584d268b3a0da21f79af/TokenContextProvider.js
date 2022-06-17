import React, { useState, createContext } from "react";
 
// Create Context Object
export const TokenContext = createContext();
 
// Create a provider for components to consume and subscribe to changes
export const TokenContextProvider = props => {
  const [token, setToken] = useState(0);
 
  return (
	<TokenContext.Provider value={[token, setToken]}>
  	{props.children}
	</TokenContext.Provider>
  );
};