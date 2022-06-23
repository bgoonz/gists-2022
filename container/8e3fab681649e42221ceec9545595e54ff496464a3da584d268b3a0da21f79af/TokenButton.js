import React, { useContext } from "react";
import { Button } from "semantic-ui-react";
import { TokenContext } from "../context/TokenContext";
 
export default function tokenButtons() {
  const [count, setCount] = useContext(TokenContext);
 
  const increment = () => {
	setCount(count + 1);
  };
 
  const decrement = () => {
	setCount(count - 1);
  };
            	
  return (
	<div>
  	<Button.Group>
    	<Button color="blue" onClick={increment}>
      	Increment
    	</Button>
    	<Button color="orange" onClick={decrement}>
      	Decrement
    	</Button>
  	</Button.Group>
	</div>
  );
}