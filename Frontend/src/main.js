import { createApp } from 'vue';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import App from './App.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./assets/css/Navbar.css";
import "./assets/css/Login.css";

library.add(faFacebookSquare);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app');
