import Home from "../../views/Home.vue";
import About from "../../views/About.vue";
import Store from "../../views/Store.vue";
import Login from "../../views/auth/Login.vue";
import Register from "../../views/auth/Register.vue";
import NotFound from "../../errors/NotFound.vue";

const routes = {
  "/": Home,
  "/about": About,
  "/store": Store,
  "/login": Login,
  "/register": Register,
};

export default {
  data() {
    return {
      currentPath: window.location.hash,
    };
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || "/"] || NotFound;
    },
  },
  mounted() {
    window.addEventListener("hashchange", () => {
      this.currentPath = window.location.hash;
    });
  },
};