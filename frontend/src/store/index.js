import Vuex from "vuex";
import {reservation}  from "./modules/admin/Reservation"
import {menu}  from "./modules/admin/MenuAdmin"
import {tables}  from "./modules/admin/TablesAdmin"

export default Vuex.createStore({
    modules: {
        reservation: reservation,
        menu: menu,
        tables: tables
    }
});