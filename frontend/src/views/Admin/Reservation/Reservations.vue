<template>
    <div class="card card-body reservation">
        <div class="text_reservation">       
            <div class="row">
                <div class="col">
                    <h2>ALL RESERVATIONS</h2>
                    <!-- <router-link class="btn btn-primary" to="/reserved/add">ADD RESERVATION</router-link> -->
                    <!-- <img src="../../assets/img/lazyload.gif"  /> -->
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <ul class="list-group">
                                <table>
                                    <thead>
                                        <th @click="order(1)" >
                                            RESERVATION NAME:
                                            <div v-for="order_ in state.orderList.order" :key="order_.id">
                                                <!-- <font-awesome-icon icon="fa-solid fa-arrow-up" v-if="order_.order_ === 1 && order_.id === 1" size="1x" /> -->
                                                <!-- <font-awesome-icon icon="fa-solid fa-arrow-down" v-if="order_.order_ === -1 && order_.id === 1" size="1x" /> -->
                                            </div>
                                        </th>
                                        <th @click="order(2)">
                                            TABLE:
                                            <div v-for="order_ in state.orderList.order" :key="order_.id">
                                                <!-- <font-awesome-icon icon="fa-solid fa-arrow-up" v-if="order_.order_ === 1 && order_.id === 2" size="1x" /> -->
                                                <!-- <font-awesome-icon icon="fa-solid fa-arrow-down" v-if="order_.order_ === -1 && order_.id === 2" size="1x" /> -->
                                            </div>
                                        </th>
                                        <th @click="order(3)">
                                            MENU TYPE:
                                            <div v-for="order_ in state.orderList.order" :key="order_.id">
                                                <!-- <font-awesome-icon icon="fa-solid fa-arrow-up" v-if="order_.order_ === 1 && order_.id === 3" size="1x" /> -->
                                                <!-- <font-awesome-icon icon="fa-solid fa-arrow-down" v-if="order_.order_ === -1 && order_.id === 3" size="1x" /> -->
                                            </div>
                                        </th>
                                        <th @click="order(4)">
                                            DATE:
                                            <div v-for="order_ in state.orderList.order" :key="order_.id">
                                                <!-- <font-awesome-icon icon="fa-solid fa-arrow-up" v-if="order_.order_ === 1 && order_.id === 4" size="1x" /> -->
                                                <!-- <font-awesome-icon icon="fa-solid fa-arrow-down" v-if="order_.order_ === -1 && order_.id === 4" size="1x" /> -->
                                            </div>
                                        </th>
                                        <th @click="order(5)">
                                            HOUR:
                                            <div v-for="order_ in state.orderList.order" :key="order_.id">
                                                <!-- <font-awesome-icon icon="fa-solid fa-arrow-up" v-if="order_.order_ === 1 && order_.id === 5" size="1x" /> -->
                                                <!-- <font-awesome-icon icon="fa-solid fa-arrow-down" v-if="order_.order_ === -1 && order_.id === 5" size="1x" /> -->
                                            </div>
                                        </th>
                                        <th @click="order(6)">
                                            N_COMENSALES:
                                            <div v-for="order_ in state.orderList.order" :key="order_.id">
                                                <!-- <font-awesome-icon icon="fa-solid fa-arrow-up" v-if="order_.order_ === 1 && order_.id === 6" size="1x" /> -->
                                                <!-- <font-awesome-icon icon="fa-solid fa-arrow-down" v-if="order_.order_ === -1 && order_.id === 6" size="1x" /> -->
                                            </div>
                                        </th>
                                        <th @click="order(6)">
                                            CHECK RESERVATION:
                                            <div v-for="order_ in state.orderList.order" :key="order_.id">
                                                <!-- <font-awesome-icon icon="fa-solid fa-arrow-up" v-if="order_.order_ === 1 && order_.id === 6" size="1x" /> -->
                                                <!-- <font-awesome-icon icon="fa-solid fa-arrow-down" v-if="order_.order_ === -1 && order_.id === 6" size="1x" /> -->
                                            </div>
                                        </th>
                                        <th>OPERATIONS:</th>
                                    </thead>
                                    <AllReservations v-for="allreservation in state.reservationList.reservation" :key="allreservation.id" :allreservation="allreservation" />
                                </table>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <button type="button" class="btn btn-primary m-1" @click="$router.replace({path: '/dashboard'})">CANCEL</button>
        </div>
    </div>
</template>

<script>
import Constant from '../../../Constant';
import { reactive, computed, defineAsyncComponent } from 'vue'
import { useStore } from 'vuex'
//import useFilters from '../../../composables/useFilters';
//import AllReservations from '../../components/Admin/All_Reservations';
//import { useRouter } from 'vue-router';

export default {
    components : { 
        AllReservations: defineAsyncComponent(()  =>
            import('../../../components/Admin/All_Reservations')
        ),
    },
    setup() {
        window.scroll({
            top: 0
        })
        const store = useStore();
        const state = reactive({ 
            reservationList : computed(() => store.getters["reservation/getReserved"]),
            orderList : computed(() => store.getters["order/getOrders"]),
            menuList: computed(() => store.getters["menu/getAllMenus"]),
            //orderID: useFilters(1)
        });
        //state.orderID = useFilters(1);
        console.log(state.menuList)
        store.dispatch("reservation/" + Constant.INITIALIZE_ALLRESERVATIONS, { reservationid: 2 });
        store.dispatch("order/" + Constant.INITIALIZE_ALLORDER);
        store.dispatch("menu/" + Constant.INITIALIZE_ALLMENUS);
        
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