// createItem action
function createItem(name) {
  return {
    type: 'CREATE_ITEM',
    data: {
      name
    }
  }
}

// In item form the submit button will send data and close the modal the form is displayed in
function ItemForm() {
  const [namvValue, setNameValue] = useState('')
  
  function onSubmit(event) {
    event.preventDefault()
    const action = createItem(nameValue)
    miro.board.ui.closeModal()
  }
  // Rest of the form to set the name value
}

// In the item list custom view the broadcast event will be consumed and actioned
function ItemList() {
  const { state, dispatch } = useContext(AppContext) // React app context with reducer
   
  function handleBroadcastData(event) {
     const action = event.data
     if (['CREATE_ITEM', 'EDIT_ITEM'].includes(action.type)) {
        dispatch(action) 
     }
  }
  
  useEffect(() => {
     miro.onReady(async () => {
       miro.addListener('DATA_BROADCASTED', handleBroadcastData)
     })
    
    return function cleanUp() {
      miro.removeListener('DATA_BROADCASTED', handleBroadcastData) 
    }
  })
  
  // Render list based on state from reducer
}