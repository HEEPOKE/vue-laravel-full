<template>
  <NavbarMenu />
  <formVue />
</template>

<script>
import NavbarMenu from "../components/Navbar/Navbar.vue";
import formVue from "../components/Create/form.vue";

export default {
  name: "CreateVue",
  components: {
    NavbarMenu,
    formVue,
  },
};
</script>
