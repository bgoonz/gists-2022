import { createContext } from 'react';

const ViewBoxContext = createContext({
    xPos: 75,
    setXPos: () => null,
    yPos: 75,
    setYPos: () => null,
    scale: 1,
    setScale: () => null,
    scaleDelta: 0,
    setScaleDelta: () => null,
    miniMapX: 75,
    setMiniMapX: () => null,
    miniMapY: 75,
    setMiniMapY: () => null,
});
const { Provider } = ViewBoxContext;

export function ViewBoxProvider({ children, value}) {
    return <Provider value={value}>{children}</Provider>
}

export const ViewBoxConsumer = ViewBoxContext.Consumer;

export default ViewBoxContext;