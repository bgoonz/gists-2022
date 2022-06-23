// Steps have this shape
// export const steps = [
//   {
//     key: "step-1",
//     x: 100,
//     y: 100,
//     width: 100,
//     height: 200
//   },
// ];

export function getSelectedEntities(selectionArea, data) {
  const selectedSteps = data.steps.filter((step) =>
    Konva.Util.haveIntersection(selectionArea, step)
  );
  return selectedSteps.map((step) => step.key)
}