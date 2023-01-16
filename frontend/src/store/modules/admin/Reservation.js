import Constant from '../../../Constant';
import ReservationService from "@/services/admin/ReservationServiceAdmin"

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
        [Constant.CHECK_RESERVATION]: (state) => {
          console.log(state.reservation)
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
        [Constant.CHECK_RESERVATION]: (store, payload) => {
          console.log(payload)
          console.log(store)
          ReservationService.checkReserved(payload.id, payload.reservation_confirm)
            .then(function (result) {
              console.log(result)
              store.commit(Constant.CHECK_RESERVATION, result.data);
            })
            .catch(function (error) {
              console.log(error);
            });
        },
        [Constant.UPDATE_RESERVATION]: (store, payload) => {
          console.log(payload.reservationitem)
          ReservationService.putReserved(payload.reservationitem.id, payload.reservationitem)
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
        [Constant.INITIALIZE_ALLRESERVATIONS]: (store, payload) => {
          console.log(payload)
          ReservationService.getReserved(payload.reservationid)
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
        console.log(state)
        return state;
      },
      // getMenus(state) {
      //   return state.menus;
      // },
    }
};