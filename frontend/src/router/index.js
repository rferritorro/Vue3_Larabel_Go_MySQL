import { createRouter, createWebHistory } from "vue-router";
import AddReservation from '../views/Client/Reservation/AddReservation';
import UpdateReservation from '../views/Admin/Reservation/UpdateReservation';
import Reservation from '../views/Admin/Reservation/Reservations';
import AddMenu from '../views/Admin/Menu/AddMenu';
import UpdateMenu from '../views/Admin/Menu/UpdateMenu';
import ListMenu from '../views/Admin/Menu/ListMenu';
import TablesAdmin from '../views/Admin/Tables/TablesAdmin';
import AddTables from '../views/Admin/Tables/AddTable';
import UpdateTables from '../views/Admin/Tables/UpdateTable'
import Home from '../views/Home';
import HomeAdmin from '../views/Admin/HomeAdmin';
import About from '../views/About';
import Tables from '../views/Client/Tables/Tables';
import NotFound from '../views/NotFound';
import Profile from '../views/Profile';
import AuthGuards from '../services/AuthGuard/AuthGuard';

const routes = [
  { path:"", redirect:{ name:"home" } },
  { path:"/home", name:"home", component: Home },
  { path:"/about", name:"about", component: About },
  { path:"/reserved/add", name:"addReservation", component: AddReservation },
  { path:"/profile", name:"profile", component: Profile, beforeEnter: AuthGuards.AuthGuard, meta: { requiresAuth: true } },
  { path:"/tables", name:"Tables", component: Tables },
  { path:"/:catchAll(.*)", component: NotFound },
  { 
    path:"/dashboard", 
    name:"dashboard", 
    component: HomeAdmin,
    beforeEnter: AuthGuards.authGuardAdmin, meta: { requiresAuth: true },
    children: [
      {
        path:"menu/add", name:"addMenu", component: AddMenu
      },
      {
        path:"menu/list", name:"listMenu", component: ListMenu
      },
      {
        path:"menu/update/:id", name:"updateMenu", component: UpdateMenu 
      },
      {
        path:"reserved", name:"Reservations", component: Reservation
      },
      {
        path:"tables", name:"TablesAdmin", component: TablesAdmin
      },
      {
        path:"tables/:filter", name:"TablesAdminFilter", component: TablesAdmin
      },
      {
        path:"tables/add", name:"addTables", component: AddTables
      },
      {
        path:"tables/update/:id", name:"updateTables", component: UpdateTables
      },
      { 
        path:"reserved/update/:id", name:"UpdateReservation", component: UpdateReservation 
      },
      {
        path:"menu/:search", name:"SearchMenu", component: ListMenu
      }
    ]
  },
  { path: "/login", name: "login", component: () => import('../views/Login/Login.vue'), beforeEnter: AuthGuards.noAuth, meta: { requiresAuth: true } },
  { path: "/register", name: "register", component: () => import('../views/Login/Register.vue'),  beforeEnter: AuthGuards.noAuth, meta: { requiresAuth: true }}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;