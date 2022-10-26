<template>
  <NavbarMenu />
  <indexVue />
</template>

<script>
import NavbarMenu from "../components/Navbar/Navbar.vue";
import indexVue from "../components/create/index.vue";

export default {
  name: "CreateVue",
  components: {
    NavbarMenu,
    indexVue,
  },
};
</script>
