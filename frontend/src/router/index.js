import { createRouter, createWebHistory } from "vue-router";
import AddReservation from '../views/AddReservation';
//import UpdateTodo from '../views/UpdateTodo';
import Reservation from '../views/Reservations';
import Home from '../views/Home';
import About from '../views/About';
import NotFound from '../views/NotFound';

const routes = [
    { path:"", redirect:{ name:"home" } },
    { path:"/home", name:"home", component: Home },
    { path:"/about", name:"about", component: About },
    { path:"/tables", name:"Reservations", component: Reservation },
    { path:"/tables/add", name:"addReservation", component: AddReservation },
    //{ path:"/tables/update/:id", name:"updateTodo", component: UpdateTodo },
    { path:"/:catchAll(.*)", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;