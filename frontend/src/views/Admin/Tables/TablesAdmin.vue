<template>
    <div class="card card-body reservation">
        <div class="text_reservation">       
            <div class="row">
                <div class="col">
                    <h2>ALL TABLES</h2>
                    <!-- <router-link class="btn btn-primary" to="/reserved/add">ADD RESERVATION</router-link> -->
                    <!-- <img src="../../assets/img/lazyload.gif"  /> -->
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    
                </div>
            </div>
            <button type="button" class="btn btn-primary m-1" @click="$router.replace({path: '/dashboard'})">CANCEL</button>
        </div>
    </div>
</template>

<script>
import Constant from '../../../Constant';
import { reactive, computed } from 'vue'
import { useStore } from 'vuex'
//import useFilters from '../../../composables/useFilters';
//import AllReservations from '../../components/Admin/All_Reservations';
//import { useRouter } from 'vue-router';

export default {
    components : { 
        
    },
    setup() {
        window.scroll({
            top: 0
        })
        const store = useStore();
        const state = reactive({ 
            reservationList : computed(() => store.getters["reservation/getReserved"]),
            orderList : computed(() => store.getters["order/getOrders"]),
            //orderID: useFilters(1)
        });
        //state.orderID = useFilters(1);
        
        store.dispatch("reservation/" + Constant.INITIALIZE_ALLRESERVATIONS, { reservationid: 2 });
        store.dispatch("order/" + Constant.INITIALIZE_ALLORDER);

        
        const order = (id) => {
            let infor_order = {
                "order_": 1,
                "order_old": 1,
                "order_old2": -1,
                "order_new": 0
            }
            store.dispatch("reservation/" + Constant.INITIALIZE_ALLRESERVATIONS, { reservationid: id });
            store.dispatch("order/" + Constant.UPDATE_ORDER, { orderid: id,  infor_order: infor_order  });
            console.log(state.orderList.order)
        }    
        // console.log("DOWN: " + down)
        // console.log("UP: "+ up)
        //RUTA GO HOME
        //router.push({ name:"home"});      
       
        return { state, order }
    }
}
</script>

<style>
    .reservation {
        background-image: url("../../../assets/img/fondo_white_admin.jpg");
    }
    .text_reservation {
        margin-top: 5%;
    }

</style>