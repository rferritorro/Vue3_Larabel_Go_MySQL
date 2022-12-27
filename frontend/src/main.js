import { createApp } from 'vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'vue-select/dist/vue-select.css';
import Toaster from '@meforma/vue-toaster';
import App from './App.vue'
import router from "./router";
import store from "./store";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGear, faPen, faTrash, faPlus, faUser, faBackwardStep , faForwardStep} from '@fortawesome/free-solid-svg-icons'
library.add( faGear, faPen, faTrash, faPlus, faUser, faBackwardStep ,faForwardStep)

createApp(App)
  .use(router)
  .use(store)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(Toaster)
  .mount("#app");