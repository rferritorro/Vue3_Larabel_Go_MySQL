import Vuex from "vuex";
import {reservation}  from "./modules/admin/Reservation"
import {menu}  from "./modules/admin/MenuAdmin"

export default Vuex.createStore({
    modules: {
        reservation: reservation,
        menu: menu
    }
});