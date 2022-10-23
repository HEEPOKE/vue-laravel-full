<template>
    <NavbarMenu />
    <router-view />
</template>

<script>

import NavbarMenu from "./components/Navbar/Navbar.vue";

export default {
    name: 'App',
    components: {
        NavbarMenu
    }
};
</script>