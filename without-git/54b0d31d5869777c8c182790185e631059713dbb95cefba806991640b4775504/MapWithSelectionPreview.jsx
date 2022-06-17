import React, { useContext, useState } from "react";
import { Rect, Stage, Layer } from "react-konva";
import AppContext, { AppConsumer, AppProvider } from "./AppContext";
import { MapContent } from "./MapContent";

export function Map() {
  const { isInSelectMode } = useContext(AppContext);
  const [selection, setSelection] = useState(null);

  function handleMouseDown(e) {
    e.evt.preventDefault();
    if (e.evt.shiftKey && selection === null) {
      const stage = e.target.getStage();
      const { x: pointerX, y: pointerY } = stage.getPointerPosition();
      const pos = {
        x: pointerX - stage.x(),
        y: pointerY - stage.y()
      };
      setSelection({
        startX: pos.x,
        startY: pos.y,
        endX: pos.x,
        endY: pos.y,
        x: pos.x,
        y: pos.y,
        width: 0,
        height: 0
      });
    }
  }

  function handleMouseMove(e) {
    if (e.evt.shiftKey && selection !== null) {
      const stage = e.target.getStage();
      const { x: pointerX, y: pointerY } = stage.getPointerPosition();
      const pos = {
        x: pointerX - stage.x(),
        y: pointerY - stage.y()
      };
      setSelection({
        ...selection,
        endX: pos.x,
        endY: pos.y,
        x: Math.min(selection.startX, pos.x),
        y: Math.min(selection.startY, pos.y),
        width: Math.abs(selection.startX - pos.x),
        height: Math.abs(selection.startY - pos.y)
      });
    }
  }

  function handleMouseUp(e) {
    e.evt.preventDefault();
    if (selection !== null) {
      // Calculate the selection and update app state
      setSelection(null);
    }
  }

  const selectionPreview =
    selection !== null ? (
      <Rect
        fill="rgba(86, 204, 242, 0.1)"
        stroke="#2d9cdb"
        x={selection.x}
        y={selection.y}
        width={selection.width}
        height={selection.height}
      />
    ) : null;

  return (
    <AppConsumer>
      {(appState) => (
        <Stage
          width={window.innerWidth}
          height={window.innerHeight}
          draggable={!isInSelectMode}
          listening={!isInSelectMode}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <AppProvider value={appState}>
            <MapContent />
          </AppProvider>
          <Layer>
            {selectionPreview}
          </Layer>
        </Stage>
      )}
    </AppConsumer>
  );
}
