import { createRouter, createWebHistory } from "vue-router";
import AddReservation from '../views/Reservation/AddReservation';
import UpdateReservation from '../views/Reservation/UpdateReservation';
import Reservation from '../views/Admin/Reservations';
import Home from '../views/Home';
import About from '../views/About';
import Tables from '../views/Tables';
import NotFound from '../views/NotFound';

const routes = [
    { path:"", redirect:{ name:"home" } },
    { path:"/home", name:"home", component: Home },
    { path:"/about", name:"about", component: About },
    { path:"/reserved", name:"Reservations", component: Reservation },
    { path:"/reserved/add", name:"addReservation", component: AddReservation },
    { path:"/reserved/update/:id", name:"UpdateReservation", component: UpdateReservation },
    { path:"/tables", name:"Tables", component: Tables },
    { path:"/:catchAll(.*)", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;