import Constant from '../../../Constant';
import OrderServiceAdmin from '@/services/admin/OrderServiceAdmin';

export const order = {
    namespaced: true,
    state: {},
    mutations : {
        [Constant.UPDATE_ORDER]: (state, payload) => {
            let index = state.order.findIndex(
                (item) => item.order_id === payload.order_id
            );
            state.order[index] = payload;
        },
        [Constant.INITIALIZE_ALLORDER]: (state, payload) => {
            if (payload) {
                state.order = payload;
            } else {
                state.order = {
                  id: "",
                  name: "",
                  order: ""
                };
              }
        },
    },
    actions : {
        [Constant.UPDATE_ORDER]: (store, payload) => {
            console.log(store);
            console.log(payload)
            OrderServiceAdmin.putOrder(payload.orderid, payload.infor_order)
                .then(function (result) {
                    console.log(result)
                    //store.commit(Constant.UPDATE_ORDER, result.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        [Constant.INITIALIZE_ALLORDER]: (store) => {
            OrderServiceAdmin.getOrder()
                .then(function (res) {
                    store.commit(Constant.INITIALIZE_ALLORDER, res.data.data);
                })
                .catch(function (error) {
                    console.log(error)
                })
        },
    },
    getters : {
      getOrders(state) {
        console.log(state)
        return state;
      }
    }
};