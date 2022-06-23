// main.js
import {emit, on, once, showUI, loadSettingsAsync, saveSettingsAsync} from '@create-figma-plugin/utilities'

const defaultPluginState = {
  foo: 'bar'
}

export default function () {
  on('SAVE_PLUGIN_STATE', async (pluginState) => {
    await saveSettingsAsync(pluginState, 'PLUGIN_STATE')
  })

  once('INITIALISE_PLUGIN', async () => {
    const storedState = await loadSettingsAsync(defaultPluginState, 'PLUGIN_STATE')
    emit(Events.LOAD_PLUGIN_STATE, storedState)
  })
  
  showUI()
}

// ui.jsx
import {Container, render}  from '@create-figma-plugin/ui'
import {emit, on} from '@create-figma-plugin/utilities'
import {h} from 'preact'
import {useEffect, useState} from 'preact/hooks'

function Plugin() {
  const [initialised, setInitialised] = useState(false)
  const [pluginState, setPluginState] = useState({ foo: 'meh' })
  const { foo } = pluginState
  
  useEffect(() => {
    on('LOAD_PLUGIN_STATE', (loadedPluginState) => {
      setPluginState(loadedPluginState)
      setInitialised(true)
    })
    emit('INITIALISE_PLUGIN')
  })
  useEffect(() => {
    if (initialised) {
     emit('SAVE_PLUGIN_STATE', pluginState) 
    }
  }, [pluginState])
  
  if (!initialised) {
    return null
  }
  return (
    <Container>
      <p>Foo: {foo}</p>
    </Container>
  )
}

export default render(Plugin)
