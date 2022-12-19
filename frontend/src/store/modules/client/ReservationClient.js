import Constant from '../../../Constant';
import ReservationService from "@/services/client/ReservationServiceClient"

export const reservation = {
    namespaced: true,
    state: {
      //menus: []
    },
    mutations : {
        [Constant.ADD_RESERVATION]: (state) => {
          console.log(state.reservation)
          //state.reservation.push({ ...payload});
        },
        [Constant.DELETE_RESERVATION]: (state, payload) => {
          console.log(payload);
          let index = state.reservation.findIndex(
            (item) => item.table_id === payload.id
          );
          state.reservation.splice(index, 1);
        },
    },
    actions : {
        [Constant.ADD_RESERVATION]: (store, payload) => {
          ReservationService.addReserved(payload.reservation_form)
            .then(function (result) {
              console.log(result)
              store.commit(Constant.ADD_RESERVATION, result.data.data);
            })
            .catch(function (error) {
              console.log(error);
            });
        },
        [Constant.DELETE_RESERVATION]: (store, payload) => {
          ReservationService.deleteReserved(payload.id)
            .then(function (res) {
              console.log(res)
              store.commit(Constant.DELETE_RESERVATION, payload);
            })
            .catch(function (error) {
              console.log(error);
            });
        },

    },
    getters : {
    }
};