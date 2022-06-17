var items = [{
  text: 'Upload',
  icon: 'upload'
}, {
  text: 'Download',
  icon: 'download'
}];

var MyToolbar = Ractive.extend({
  template: '#templ'
})

var MyToolbarWrapper = Ractive.extend({
  template: '<MyToolbar items="{{items}}"/>',
  
  components: {
    MyToolbar: MyToolbar
  },
  data() {
    return {
      items: items
    }
  }
});

new Ractive({
  el: 'main',
  template: '<MyToolbarWrapper/>',
  components: {
    MyToolbarWrapper: MyToolbarWrapper
  }
})
