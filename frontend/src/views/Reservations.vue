<template>
    <div style="mt-2">
        <div class="row">
            <div class="col p-3">
                <router-link class="btn btn-primary" to="/tables/add">ADD RESERVATION</router-link>
            </div>
        </div>
        <div class="card card-default card-borderless">
            <div class="card-body">
                <div class="row">
                    <div class="col">
                        <ul class="list-group">
                            <AllReservations v-for="allreservation in state.reservationList" :key="allreservation.id" :allreservation="allreservation" />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import Constant from '../Constant';
import AllReservations from '../components/All_Reservations';
import { reactive, computed } from 'vue'
import { useStore } from 'vuex'
//import { useRouter } from 'vue-router';
//import Reservation_All from "@/services/admin/ReservationServiceAdmin"

export default {
    components : { AllReservations },
    setup() {
        //const data = Reservation_All.getReserved()
        const store = useStore();

        //const router = useRouter();
        // data.then(function(result) {
        //     return result.data.data; })
        const state = reactive({ 
            reservationList : computed(()=> store.getters["reservation/getTable"]) 
        });
        const goAddReservation = () => {
            store.dispatch("reservation/"+ Constant.INITIALIZE_ALLRESERVATIONS);
            //router.push({ name:"addReservation" });
        }
       

        return { state, goAddReservation }
    }
}
</script>

<style>

</style>