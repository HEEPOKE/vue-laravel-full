import HomeVue from "../../views/Home.vue";
import AboutVue from "../../views/About.vue";
import StoreVue from "../../views/Store.vue";
import LoginVue from "../../views/auth/Login.vue";
import RegisterVue from "../../views/auth/Register.vue";
import DashboardVue from "../../views/Dashboard.vue";
import NotFound from "../../errors/NotFound.vue";

const routes = {
  "/": HomeVue,
  "/about": AboutVue,
  "/store": StoreVue,
  "/login": LoginVue,
  "/register": RegisterVue,
  "/dashboard": DashboardVue,
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