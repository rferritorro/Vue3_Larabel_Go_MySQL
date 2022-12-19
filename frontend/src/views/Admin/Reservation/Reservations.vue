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
                                        <th @click="order(1)">
                                            RESERVATION NAME:
                                            <font-awesome-icon icon="fa-solid fa-arrow-up" v-if="up === true" size="1x" />
                                            <font-awesome-icon icon="fa-solid fa-arrow-down" v-if="down === true" size="1x" />
                                        </th>
                                        <th @click="order(2)">
                                            TABLE:
                                            <font-awesome-icon icon="fa-solid fa-arrow-up" v-if="up === true" size="1x" />
                                            <font-awesome-icon icon="fa-solid fa-arrow-down" v-if="down === true" size="1x" />
                                        </th>
                                        <th @click="order(3)">
                                            MENU TYPE:
                                            <font-awesome-icon icon="fa-solid fa-arrow-up" v-if="up === true" size="1x" />
                                            <font-awesome-icon icon="fa-solid fa-arrow-down" v-if="down === true" size="1x" />
                                        </th>
                                        <th @click="order(4)">
                                            DATE:
                                            <font-awesome-icon icon="fa-solid fa-arrow-up" v-if="up === true" size="1x" />
                                            <font-awesome-icon icon="fa-solid fa-arrow-down" v-if="down === true" size="1x" />
                                        </th>
                                        <th @click="order(5)">
                                            HOUR:
                                            <font-awesome-icon icon="fa-solid fa-arrow-up" v-if="up === true" size="1x" />
                                            <font-awesome-icon icon="fa-solid fa-arrow-down" v-if="down === true" size="1x" />
                                        </th>
                                        <th @click="order(6)">
                                            N_COMENSALES:
                                            <font-awesome-icon icon="fa-solid fa-arrow-up" v-if="up === true" size="1x" />
                                            <font-awesome-icon icon="fa-solid fa-arrow-down" v-if="down === true" size="1x" />
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
        </div>
    </div>
</template>

<script>
import Constant from '../../../Constant';
import { reactive, computed, defineAsyncComponent } from 'vue'
import { useStore } from 'vuex'
//import useFilters from '../../../composables/useFilter';
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
        });
        store.dispatch("reservation/" + Constant.INITIALIZE_ALLRESERVATIONS, { reservationid: 1 });
        console.log(state.reservationList)
        
        const order = (id) => {
            let up = true;
            let down = false;
            console.log(id)
            if (up === true) {
                down = true;
                up = false;
            } else if (up === false) {
                down = false;
                up = true;
            }
            store.dispatch("reservation/" + Constant.INITIALIZE_ALLRESERVATIONS, { reservationid: id });
            console.log("DOWN: " + down)
            console.log("UP: "+ up)
            return { up, down}
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