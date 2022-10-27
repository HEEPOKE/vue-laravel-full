<template>
  <NavbarMenu />
  <TableVue />
</template>
<script>
import NavbarMenu from "../components/Navbar/Navbar.vue";
import TableVue from "../components/store/Table.vue";

export default {
  name: "StoreVue",
  components: {
    NavbarMenu,
    TableVue,
  },
};
</script>
