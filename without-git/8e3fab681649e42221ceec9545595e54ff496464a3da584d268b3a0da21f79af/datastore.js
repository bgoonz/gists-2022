import ClearX from `clearx`;

let store = new ClearX({
  id: 'Brave Browser',
  version: 'v0.68.140',
  settings: {
    File: true,
    Edit: true,
    History: true,
    Bookmarks: true,
    Window: true,
    Help: true,
    DevTools: true
  },
  openTabs: 3,
  users: [{
    email: 'john.doe@test.com',
    name: 'John Doe',
    age: 300
  }, {
    email: 'doe.john@test.com',
    name: 'Doe John',
    age: 50
  }]
});

export default store;