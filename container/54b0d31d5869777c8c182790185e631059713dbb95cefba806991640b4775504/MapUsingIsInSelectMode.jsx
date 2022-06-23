import React, { useContext } from "react";
import { Stage } from "react-konva";
import AppContext, { AppConsumer, AppProvider } from "./AppContext";
import { MapContent } from "./MapContent";

export function Map() {
  const { isInSelectMode } = useContext(AppContext);

  return (
    <AppConsumer>
      {(appState) => (
        <Stage
          width={window.innerWidth}
          height={window.innerHeight}
          draggable={!isInSelectMode}
          listening={!isInSelectMode}
        >
          <AppProvider value={appState}>
            <MapContent />
          </AppProvider>
        </Stage>
      )}
    </AppConsumer>
  );
}
