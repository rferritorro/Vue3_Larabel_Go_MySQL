import { createApp } from 'vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'vue-select/dist/vue-select.css';
import Toaster from '@meforma/vue-toaster';
import App from './App.vue'
import router from "./router";
import store from "./store";

createApp(App)
  .use(router)
  .use(store)
  .use(Toaster)
  .mount("#app");