export function updatePathFromMiddle(path, edge, position) {
  const newPoints = path.points.map((item, index) => {
    if (edge.points.includes(index)) {
      return {
        ...item,
        [edge.axis]: position[edge.axis]
      };
    }
    return item;
  });
  return {
    ...path,
    points: newPoints
  };
}