import Vuex from "vuex";
import {reservation}  from "./modules/Reservation"

export default Vuex.createStore({
    modules: {
        reservation: reservation
    }
});