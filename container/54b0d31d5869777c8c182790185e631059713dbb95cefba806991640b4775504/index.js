import React, { useEffect, useState } from "react";
import { AppProvider } from "./AppContext";
import { Map } from "./Map";

export default function App() {
  const [isInSelectMode, setIsInSelectMode] = useState(false);
  const [selectedEntities, setSelectedEntities] = useState([]);

  function handleKeyDown(e) {
    if (!isInSelectMode && e.keyCode === 16) {
      setIsInSelectMode(true);
    }
  }

  function handleKeyUp(e) {
    if (isInSelectMode && e.keyCode === 16) {
      setIsInSelectMode(false);
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return function cleanUp() {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  });

  return (
    <AppProvider
      value={{
        isInSelectMode,
        setIsInSelectMode,
        selectedEntities,
        setSelectedEntities
      }}
    >
      <Map />
    </AppProvider>
  );
}
