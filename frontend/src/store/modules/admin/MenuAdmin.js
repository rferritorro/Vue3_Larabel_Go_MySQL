import Constant from '../../../Constant';
import MenuServiceAdmin from '@/services/admin/MenuServiceAdmin';

export const menu = {
    namespaced: true,
    state: {},
    mutations : {
        [Constant.ADD_MENU]: (state) => {
            console.log(state.reservation)
            //state.reservation.push({ ...payload});
        },
        [Constant.UPDATE_MENU]: (state, payload) => {
            let index = state.menu.findIndex(
                (item) => item.menu_id === payload.menu_id
            );
            state.menu[index] = payload;
        },
        [Constant.DELETE_MENU]: (state, payload) => {
            console.log(payload);
            let index = state.menu.findIndex(
                (item) => item.menu_id === payload.id
            );
            state.menu.splice(index, 1);
        },
        [Constant.INITIALIZE_ALLMENUS]: (state, payload) => {
            if (payload) {
                state.menu = payload;
            }
        },
    },
    actions : {
        [Constant.ADD_MENU]: (store, payload) => {
            console.log(payload)
            MenuServiceAdmin.addMenu(payload.menu_form)
                .then(function (result) {
                    console.log(result)
                    store.commit(Constant.ADD_MENU, result.data.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        [Constant.UPDATE_MENU]: (store, payload) => {
            console.log(payload.menuitem.id)
            MenuServiceAdmin.putMenu(payload.menuitem.id, payload.menuitem)
                .then(function (result) {
                    console.log(result)
                    store.commit(Constant.UPDATE_MENU, result.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        [Constant.DELETE_MENU]: (store, payload) => {
            MenuServiceAdmin.deleteMenu(payload.id)
                .then(function (res) {
                    console.log(res)
                    store.commit(Constant.DELETE_MENU, payload);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        [Constant.INITIALIZE_ALLMENUS]: (store) => {
            MenuServiceAdmin.getMenu()
                .then(function (res) {
                    console.log(res)
                    store.commit(Constant.INITIALIZE_ALLMENUS, res.data.data);
                })
                .catch(function (error) {
                    console.log(error)
                })
        },
    },
    getters : {
      getMenus(state) {
        console.log(state.menu)
        return state.menu;
      },
      getAllMenus(state) {
        return state;
      },
    }
};