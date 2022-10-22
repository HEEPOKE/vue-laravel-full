<template>
  <div class="">
    <nav class="navbar navbar-dark bg-dark navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Topic</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler"
          aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarToggler">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/store">Store</a>
            </li>
          </ul>
          <form class="d-flex mx-3" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <nav>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/login">Login</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/register">Register</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
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
  name: 'NavbarMenu',
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
</script>
<!-- <script src="../../router.js"></script> -->
