// main.js
import {emit, showUI} from '@create-figma-plugin/utilities'

export default function () {
  figma.on('selectionchange', () => {
    // convert current selection to nodes (passing raw SceneNode would result in just node ID being passed)
    const nodes = figma.currentPage.selection.map((node) => {
      return {
        id: node.id,
        name: node.name
      }
    })
    emit('UPDATE_SELECTION', nodes)                                           
  })
  showUI()
}

// ui.jsx
import {Container, render} from '@create-figma-plugin/ui'
import {on} from '@create-figma-plugin/utilities'
import {h} from 'preact'
import {useState, useEffect} from 'preact/hooks'

function Plugin() {
  const [selection, setSelection] = useState([])
  
  useEffect(() => {
    on('UPDATE_SELECTION', (nodes) => {
      setSelection(nodes)
    })
  })
  
  const selectedNodes = selection.map((node) => <p>{node.name}</p>)
  return (
    <Container>
      {selectedNodes}
    </Container>
  )
}

export default render(Plugin)