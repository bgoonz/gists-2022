async function updateWidgets(widgetIds) {
  const widgetObjects = await Promise.all(widgetsIds.map(async (widgetId) => {
    const widgets = await miro.board.widgets.get({ id: widgetId })
    if (widgets.length > 0) {
      return widgets[0]
    }
    return null
  }))
  const widgets = widgetObjects.filter(x => x !== null)
  widgets.forEach((widget) => {
    switch(widget.type) {
      case 'TEXT':
        return widget.style.textColor = '#d5f692'
      case 'LINE': 
        return widget.style.lineColor = '#8fd14f'
      case 'STICKER':
        return widget.style.stickerBackgroundColor = '#d5f692'
      default:
        return widget.style.backgroundColor = '#d5f692'
    }
  })
  try {
    await miro.board.widgets.update(widgets)
  } catch (err) {
    console.error('Error updating widgets', err)
  }
}