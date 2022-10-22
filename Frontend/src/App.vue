<template>
    <NavbarMenu />
    <HomeVue />
</template>

<script>
import NavbarMenu from "./components/Navbar/Navbar.vue";
import HomeVue from "./views/Home.vue";

export default {
    name: 'App',
    components: {
        NavbarMenu,
        HomeVue
    }
};
</script>