import React from "react";
import { Segment } from "semantic-ui-react";
 
import { TokenContextProvider } from "../context/TokenContext";
import TokenDisplay from "../components/TokenDisplay";
import TokenButtons from "../components/TokenButtons";
 
export default function TokenView() {
  return (
	<TokenContextProvider>
  	<h3>Token</h3>
  	<Segment textAlign="center">
    	<TokenDisplay />
    	<TokenButtons />
  	</Segment>
	</TokenContextProvider>
  );
}