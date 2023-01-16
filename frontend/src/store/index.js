import Vuex from "vuex";
import {reservation}  from "./modules/admin/Reservation"
import {menu}  from "./modules/admin/MenuAdmin"
import {tables}  from "./modules/admin/TablesAdmin"
import {menuclient}  from "./modules/client/MenuClient"
import {tablesclient}  from "./modules/client/TablesClient"
import {reservationclient}  from "./modules/client/ReservationClient"
import {order}  from "./modules/admin/OrderAdmin"
import {user} from "./modules/client/UserClient"

export default Vuex.createStore({
    modules: {
        reservation: reservation,
        menu: menu,
        menuclient: menuclient,
        tables: tables,
        tablesclient: tablesclient,
        reservationclient: reservationclient,
        order: order,
        user: user
    }
});