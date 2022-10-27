import { createApp } from 'vue';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebookSquare, faGoogle } from '@fortawesome/free-brands-svg-icons';
import App from './App.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./assets/css/Navbar.css";
import "./assets/css/Login.css";
import "./assets/css/Register.css";
import "./assets/css/Uploadimg.css";

library.add(faFacebookSquare,faGoogle);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app');
