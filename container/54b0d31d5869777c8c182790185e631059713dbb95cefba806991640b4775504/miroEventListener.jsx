import React, { useEffect, useState } from 'react'

function App()  {

  const [selection, setSelection] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
  async function setInitialSelection() {
    const selection = await miro.board.selection.get()
    setSelection(selection)
  }
  
  function handleSelection({ data }) {
    setSelection(data)
  }

  useEffect(() => {
    miro.onReady(async () => {
      miro.addListener('SELECTION_UPDATED', handleSelection)
      await setInitialSelection()
      setIsLoading(false)
    })

    return function cleanUp() {
      miro.removeListener('SELECTION_UPDATED', handleSelection)
    }
  })
  
  return {
    // rest of app
  }
}