import Constant from '../../Constant';
import Vuex from "vuex";
import ReservationService from "@/services/admin/ReservationServiceAdmin"

//export const reservation = {
export default Vuex.createStore({
    namespaced: true,
    state: {},
    mutations : {
        [Constant.GET_RESERVATION]: (state, payload) => {
            console.log(payload);
            state.tablelist.push({ ...payload });
        },
        
    },
    actions : {
        [Constant.GET_RESERVATION]: (store) => {
            console.log(store)
            ReservationService.getReserved()
              .then(function (result) {
                //store.commit(Constant.ADD_TABLE, res.data.data);
                console.log(result)
              })
              .catch(function (error) {
                console.log(error);
              });
        }
    },
    getters : {
        
    }
});