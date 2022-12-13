import Constant from '../../../Constant';
import ReservationService from "@/services/admin/ReservationServiceAdmin"

export const reservation = {
    namespaced: true,
    state: {
      //menus: []
    },
    mutations : {
        // [Constant.GET_RESERVATION]: (state, payload) => {
        //     console.log(state);
        //     state.reservation.push({ ...payload });
        // },
        [Constant.ADD_RESERVATION]: (state) => {
          console.log(state.reservation)
          //state.reservation.push({ ...payload});
        },
        [Constant.UPDATE_RESERVATION]: (state, payload) => {
          let index = state.reservation.findIndex(
            (item) => item.table_id === payload.table_id
          );
          state.reservation[index] = payload;
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
            state.reservation = payload;
          } else {
            state.reservation = {
              user_id: "",
              table_id: "",
              menu_id: "",
              date: ""
            };
          }
        },
    },
    actions : {
        // [Constant.GET_RESERVATION]: (store) => {
        //     console.log(store)
        //     ReservationService.getReserved()
        //       .then(function (result) {
        //         store.commit(Constant.GET_RESERVATION, result.data);
        //       })
        //       .catch(function (error) {
        //         console.log(error);
        //       });
        // },
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
        [Constant.UPDATE_RESERVATION]: (store, payload) => {
          ReservationService.putReserved(payload.reservationitem.id)
            .then(function (result) {
              console.log(result)
              store.commit(Constant.UPDATE_RESERVATION, result.data);
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
        [Constant.INITIALIZE_ALLRESERVATIONS]: (store) => {
          ReservationService.getReserved()
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
      // getMenus(state) {
      //   return state.menus;
      // },
    }
};