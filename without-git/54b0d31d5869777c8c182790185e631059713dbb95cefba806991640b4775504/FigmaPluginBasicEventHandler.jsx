// main.js
import {on, showUI} from '@create-figma-plugin/utilities'

export default function () {
  on('HIDE_ALL', (args) => {
    const allNodes = figma.currentPage.children.slice()
    allNodes.map((node) => {
      node.visible = false
    })
    figma.closePlugin()
  }
  showUI()
}

// ui.jsx
import {Container, render} from '@create-figna-plugin/ui'
import {emit} from '@create-figma-plugin/utilities'
import {h} from 'preact'

function Plugin() {
  function handleClick() {
    emit('HIDE_ALL')
  }
  
  return (
    <Container>
      <button onClick={handleClick}>Hide all content</button>
    </Container>
  )
}

export default render(Plugin)