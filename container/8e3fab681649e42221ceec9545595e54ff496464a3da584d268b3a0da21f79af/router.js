import Vue from "vue";
import Router from "vue-router";
import Login from "./Components/Login";
 
Vue.use(Router);
 
const router = new Router({
  routes: [
    {
      path: "*",
      redirect: "/login"
    },
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    }
  ]
});
 
export default router;