import Constant from '../../../Constant';
import MenuServiceAdmin from '@/services/admin/MenuServiceAdmin';

export const menu = {
    namespaced: true,
    state: {},
    mutations : {
        [Constant.INITIALIZE_ALLMENUS]: (state, payload) => {
            if (payload) {
                state.menu = payload;
            }
        },
    },
    actions : {
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