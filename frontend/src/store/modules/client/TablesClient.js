import Constant from '../../../Constant';
import TablesService from "@/services/client/TablesServiceClient"

export const tablesclient = {
  namespaced: true,
    state: {},
    mutations : {
      [Constant.INITIALIZE_ALLTABLES]: (state, payload) => {
        if (payload) {
          state.tablesclient = payload;
        } else {
          state.tablesclient = {
            reserved: "",
            place: "",
            img: ""
          };
        }
      },
    },
    actions : {
      [Constant.INITIALIZE_ALLTABLES]: (store) => {
        TablesService.getTable()
        .then(function (result) {
          store.commit(Constant.INITIALIZE_ALLTABLES, result.data);
        })
        .catch(function (error) {
          console.log(error);
        });
      },
    },
    getters : {
      getTables(state) {
        return state;
      },
      // getMenus(state) {
        //   return state.menus;
        // },
      }
    };
