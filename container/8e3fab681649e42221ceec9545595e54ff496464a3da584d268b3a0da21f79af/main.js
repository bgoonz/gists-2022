import router from "./router";
 
 
// handle page reloads
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");