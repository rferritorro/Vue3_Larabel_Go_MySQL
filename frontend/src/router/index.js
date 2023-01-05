import { createRouter, createWebHistory } from "vue-router";
import AddReservation from '../views/Client/Reservation/AddReservation';
import UpdateReservation from '../views/Admin/Reservation/UpdateReservation';
import Reservation from '../views/Admin/Reservation/Reservations';
import AddMenu from '../views/Admin/Menu/AddMenu';
import UpdateMenu from '../views/Admin/Menu/UpdateMenu';
import Home from '../views/Home';
import HomeAdmin from '../views/Admin/HomeAdmin';
import About from '../views/About';
import Tables from '../views/Tables';
import NotFound from '../views/NotFound';

const routes = [
  { path:"", redirect:{ name:"home" } },
  { path:"/home", name:"home", component: Home },
  { path:"/about", name:"about", component: About },
  { path:"/reserved/add", name:"addReservation", component: AddReservation },
  { path:"/tables", name:"Tables", component: Tables },
  { path:"/:catchAll(.*)", component: NotFound },
  { 
    path:"/dashboard", 
    name:"dashboard", 
    component: HomeAdmin,
    children: [
      {
        path:"menu/add", name:"addMenu", component: AddMenu
      },
      {
        path:"menu/update/:id", name:"updateMenu", component: UpdateMenu 
      },
      {
        path:"reserved", name:"Reservations", component: Reservation
      },
      { 
        path:"reserved/update/:id", name:"UpdateReservation", component: UpdateReservation 
      },
    ]
  },
  // { path: "/login", name: "login", component: () => import('../views/Login/Login.vue') },
  // { path: "/register", name: "register", component: () => import('../views/Login/Register.vue') }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;