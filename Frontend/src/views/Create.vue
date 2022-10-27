<template>
  <NavbarMenu />
  <indexVue />
</template>

<script>
import NavbarMenu from "../components/Navbar/Navbar.vue";
import TablecreateVue from "../components/create/Table.vue";

export default {
  name: "CreateVue",
  components: {
    NavbarMenu,
    TablecreateVue,
  },
};
</script>
