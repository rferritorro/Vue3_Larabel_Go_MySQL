import Vuex from "vuex";
import {reservation}  from "./modules/admin/Reservation"
import {menu}  from "./modules/admin/MenuAdmin"
import {tables}  from "./modules/admin/TablesAdmin"
import {menuclient}  from "./modules/client/MenuClient"
import {tablesclient}  from "./modules/client/TablesClient"

export default Vuex.createStore({
    modules: {
        reservation: reservation,
        menu: menu,
        menuclient: menuclient,
        tables: tables,
        tablesclient: tablesclient,
    }
});