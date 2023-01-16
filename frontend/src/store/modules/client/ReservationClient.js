import Constant from '../../../Constant';
import ReservationService from "@/services/client/ReservationServiceClient"

export const reservationclient = {
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
        [Constant.INITIALIZE_ALLRESERVATIONS]: (state, payload) => {
          if (payload) {
            state.allreservation = payload;
          } 
        },
    },
    actions : {
        [Constant.ADD_RESERVATION]: (store, payload) => {
          console.log(payload)
          ReservationService.addReserved(payload)
            .then(function (result) {
              console.log("dale")
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
        [Constant.GET_RESERVATION]: (store, payload) => {
          ReservationService.getReserved(payload.table_id)
            .then(function (result) {
              store.commit(Constant.INITIALIZE_ALLRESERVATIONS, result.data);
            })
            .catch(function (error) {
              console.log(error);
            });
        },
        [Constant.INITIALIZE_ALLRESERVATIONS]: (store) => {
          ReservationService.getReservation()
            .then(function (result) {
              store.commit(Constant.INITIALIZE_ALLRESERVATIONS, result.data);
            })
            .catch(function (error) {
              console.log(error);
            });
        },
    },
    getters : {
      getReserved(state) {
        return state;
      },
      getAllReservation(state) {
        return state.allreservation
      }
    }
};