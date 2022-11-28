import { createApp } from 'vue';
import 'bootstrap/dist/css/bootstrap.css';
import './components/header/Header.css'
import './components/footer/Footer.css'
//import './main.css';
import App from './App.vue'

import router from "./router";
import store from "./store";

createApp(App)
  .use(router)
  .use(store)
  .mount("#app");

