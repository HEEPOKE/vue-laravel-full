import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./assets/css/Navbar.css";

createApp(App).use(router).mount('#app');
