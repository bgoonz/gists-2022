// In index.js where plugin is initilised
localStorage.setItem('BOTTOM_BAR', 'CLOSED')
localStorage.setItem('SIDEBAR', 'NONE')

miro.onReady(() => {
    miro.initialize({
      extensionPoints: {
        toolbar: {
          title: 'Plugin',
          async onClick() {
            const sidebarTool = localStorage.getItem('SIDEBAR')
            if (sidebarTool !== 'SELECTOR') {
              localStorage.setItem('SIDEBAR', 'SELECTOR')
              await miro.board.ui.openLeftSidebar('app.html')
            } else {
              localStorage.setItem('SIDEBAR', 'NONE')
              miro.board.ui.closeLeftSidebar()
            }
          }
        },
        bottomBar: {
          title: 'Plugin',
          async onClick() {
            const bottomBarState = localStorage.getItem('BOTTOM_BAR')
            if (bottomBarState === 'CLOSED') {
              localStorage.setItem('BOTTOM_BAR', 'OPEN')
              await miro.board.ui.openBottomPanel('bottom-panel.html')
            } else {
              localStorage.setItem('BOTTOM_BAR', 'CLOSED')
              miro.board.ui.closeBottomPanel()
              
            }
          }
        }
      }
    })
})

// In bottom-panel.html where buttons there can open left sidebar
function BottomPanel() {

  async function onClick(event) {
    event.preventDefault()
    const leftSidebarState = localStorage.getItem('SIDEBAR')
    if (leftSidebarState !== 'DATA') {
      localStorage.setItem('SIDEBAR', 'DATA')
      await miro.board.ui.openLeftSidebar('item-list.html')
    } else {
      localStorage.setItem('SIDEBAR', 'NONE')
      miro.board.ui.closeLeftSidebar()
    }
  }
}