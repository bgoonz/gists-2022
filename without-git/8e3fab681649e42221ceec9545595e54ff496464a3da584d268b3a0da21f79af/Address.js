import React, { useState, useEffect } from "react";
 
function Address() {
  const [address, setName] = useState("");
 
  useEffect(() => {
    const getName = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("337, Neverland, US");
      }, 6000);
    });
 
    getName.then(result => {
      setName(result);
    });
  }, []);
 
  if (!address) {
    return <h2> Loading..</h2>;
  }
  return (
    <>
      <h2> {address} </h2>
    </>
  );
}
 
export default Address;