// List item to launch modal to add or edit items
function ListItem({ item }) {
  
  function onEdit(event) {
    event.preventDefault()
    event.stopPropagation()
    miro.board.ui.openModal(`./item-form.html?itemId=${item.id}&name=${item.name}`)
  }
  
  return (
    <button key={item.id} onClick={onEdit}>{item.name}</button>
  )
}


function ItemList({ items }) {
  const itemList = items.map((item) => <ListItem item={item} />)
  
  function onAdd(event) {
    event.preventDefault()
    miro.board.ui.openModal('./item.form.html')
  }

  return (
    <div>
      <button onClick={onAdd}>Create Item</button>
      {itemList}
    </div>
  )
}


// View to show in modal = item-form.html

function getItemFromUrlParams() {
  const search = window.location.search
  const params = new URLSearchParams(search)
  const itemId =  params.get('itemId')
  const name = params.get('name')
  return {
    id: itemId,
    name: name !== null ? name : '',
  }
}

function ItemForm() {
  const item = getItemFromUrlParams()
  const [nameValue, setNameValue] = useState(item.name)
  const isEditMode = item.id !== null
  // rest of the form
}