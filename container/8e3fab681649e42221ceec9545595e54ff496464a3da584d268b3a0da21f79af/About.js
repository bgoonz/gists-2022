import React, { useState, useEffect } from "react";
import Address from "./Address";
 
function About() {
  const [name, setName] = useState("");
 
  useEffect(() => {
    const getName = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("This is the about page with company details");
      }, 6000);
    });
 
    getName.then(result => {
      setName(result);
    });
  }, []);
  if (!name) {
    return <h2> Loading..</h2>;
  }
  return (
    <>
      <h2> {name} </h2>
      <Address />
    </>
  );
}
export default About;