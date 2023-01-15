import Constant from '../../../Constant';
import TablesService from "@/services/admin/TablesServiceAdmin"

export const tables = {
    namespaced: true,
    state: {},
    mutations : {
        [Constant.ADD_TABLES]: (state) => {
          console.log(state.tables)
          //state.TABLES.push({ ...payload});
        },
        [Constant.UPDATE_TABLES]: (state, payload) => {
          let index = state.tables.findIndex(
            (item) => item.table_id === payload.table_id
          );
          state.tables[index] = payload;
        },
        [Constant.DELETE_TABLES]: (state, payload) => {
          console.log(payload);
          let index = state.tables.findIndex(
            (item) => item.table_id === payload.id
          );
          state.tables.splice(index, 1);
        },
        [Constant.INITIALIZE_ALLTABLES]: (state, payload) => {
          if (payload) {
            state.tables = payload;
          } else {
            state.tables = {
              reserved: "",
              place: "",
              img: ""
            };
          }
        },
    },
    actions : {
        [Constant.ADD_TABLES]: (store, payload) => {
          TablesService.addTable(payload.table_form)
            .then(function (result) {
              console.log(result)
              store.commit(Constant.ADD_TABLES, result.data.data);
            })
            .catch(function (error) {
              console.log(error);
            });
        },
        [Constant.UPDATE_TABLES]: (store, payload) => {
          TablesService.putTable(payload.tablesitem.id, payload.tablesitem)
            .then(function (result) {
              console.log(result)
              store.commit(Constant.UPDATE_TABLES, result.data);
            })
            .catch(function (error) {
              console.log(error);
            });
        },
        [Constant.DELETE_TABLES]: (store, payload) => {
          TablesService.deleteTable(payload.id)
            .then(function (res) {
              console.log(res)
              store.commit(Constant.DELETE_TABLES, payload);
            })
            .catch(function (error) {
              console.log(error);
            });
        },
        [Constant.INITIALIZE_ALLTABLES]: (store) => {
          TablesService.getTable()
            .then(function (result) {
              store.commit(Constant.INITIALIZE_ALLTABLES, result.data.data);
            })
            .catch(function (error) {
              console.log(error);
            });
        },
    },
    getters : {
      getTables(state) {
        //console.log(state)
        return state;
      },
      // getMenus(state) {
      //   return state.menus;
      // },
    }
};