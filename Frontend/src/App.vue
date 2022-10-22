<template>
    <!-- <NavbarMenu /> -->
    <HomeVue />
</template>

<script setup>
// import NavbarMenu from "./components/Navbar/Navbar.vue";
</script>
<script>
import HomeVue from "./views/Home.vue";

export default {
    name: 'App',
    components: {
        HomeVue
    }
};
</script>