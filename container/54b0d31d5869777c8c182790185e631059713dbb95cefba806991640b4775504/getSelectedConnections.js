// Connections have this shape
// {
//   key: "connection-1",
//   x: 0,
//   y: 0,
//   commands: [
//     {
//       command: "M",
//       x: 180,
//       y: 280
//     },
//     {
//       command: "L",
//       x: 250,
//       y: 280
//     },
//   ]
// },

function getEdgeRects(connection) {
  return connection.commands.reduce((edges, point, index) => {
    if (index === connection.commands.length - 1) {
      return edges;
    }
    const nextPoint = connection.commands[index + 1];
    const sameX = point.x === nextPoint.x;
    const sameY = point.y === nextPoint.y;
    if (!(sameX && sameY) && (sameX || sameY)) {
      const minX = Math.min(point.x, nextPoint.x);
      const maxX = Math.max(point.x, nextPoint.x);
      const minY = Math.min(point.y, nextPoint.y);
      const maxY = Math.max(point.y, nextPoint.y);
      if (sameX) {
        edges.push({
          x: minX,
          y: minY - 5,
          width: 10,
          height: Math.abs(maxY) - Math.abs(minY)
        });
      } else {
        edges.push({
          x: minX - 5,
          y: minY,
          width: Math.abs(maxX) - Math.abs(minX),
          height: 10
        });
      }
    }
    return edges;
  }, []);
}

export function getSelectedEntities(selectionArea, data) {
  const selectedConnections = data.connections.filter((connection) => {
    const edgeRects = getEdgeRects(connection);
    return edgeRects.reduce((result, edge) => {
      if (Konva.Util.haveIntersection(selectionArea, edge)) {
        result = true;
      }
      return result;
    }, false);
  });
  return selectedConnections.map((connection) => connection.key)
}
