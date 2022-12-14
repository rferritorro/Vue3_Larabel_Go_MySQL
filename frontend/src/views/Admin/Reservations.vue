<template>
    <div class="card card-body reservation">
        <div class="text_reservation">       
            <div class="row">
                <div class="col p-3">
                    <router-link class="btn btn-primary" to="/reserved/add">ADD RESERVATION</router-link>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <ul class="list-group">
                                <table>
                                    <thead>
                                        <th>RESERVATION NAME:</th>
                                        <th>TABLE:</th>
                                        <th>MENU TYPE:</th>
                                        <th>DATE:</th>
                                        <th>HOUR:</th>
                                        <th>N_COMENSALES:</th>
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
import Constant from '../../Constant';
import { reactive, computed } from 'vue'
import { useStore } from 'vuex'
import AllReservations from '../../components/Admin/All_Reservations';
//import { useRouter } from 'vue-router';

export default {
    components : { AllReservations },
    setup() {
        window.scroll({
            top: 0
        })
        const store = useStore();
        const state = reactive({ 
            reservationList : computed(() => store.getters["reservation/getReserved"]) 
        });
        store.dispatch("reservation/" + Constant.INITIALIZE_ALLRESERVATIONS);
        console.log(state.reservationList)
        
        //RUTA GO HOME
        //router.push({ name:"home"});      

        return { state }
    }
}
</script>

<style>
    .reservation {
        background-image: url("../../assets/img/home_minimal.jpg");
    }
    .text_reservation {
        margin-top: 5%;
    }

</style>