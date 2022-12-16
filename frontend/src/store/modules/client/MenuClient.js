import Constant from '../../../Constant';
import MenuServiceClient from '@/services/client/MenuServiceClient';

export const menuclient = {
    namespaced: true,
    state: {},
    mutations : {
        [Constant.INITIALIZE_ALLMENUS]: (state, payload) => {
            console.log(payload)
            if (payload) {
                state.menu = payload;
            }
        },
    },
    actions : {
        [Constant.INITIALIZE_ALLMENUS]: (store) => {
            MenuServiceClient.getMenu()
                .then(function (res) {
                    console.log(res)
                    store.commit(Constant.INITIALIZE_ALLMENUS, res.data);
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
      getAllMenusClient(state) {
        console.log(state)
        return state;
      },
    }
};