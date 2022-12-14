<template>
  <div class="card card-body update_div">
    <div class="update_text">
      <div class="row">
        <div class="col p-3">
          <h2>UPDATE TABLE</h2>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-group">
            <label htmlFor="todo">NAME :</label>
            <input type="text" class="form-control" v-model="state.thisReservations.username" />
          </div>
          <div class="form-group">
              <label htmlFor="desc">DESCR :</label>
              <textarea class="form-control" rows="3" id="desc" v-model="state.thisReservations.desc"></textarea>  
          </div>
          <div class="form-group">
              <label htmlFor="hour">HOUR : </label>&nbsp;
              <input type="text" v-model="state.thisReservations.hour" />   
          </div>
          <div class="form-group">
              <label htmlFor="comen">N_COMENSALES : </label>&nbsp;
              <input type="number" v-model="state.thisReservations.n_comensales" />   
          </div>
          <div class="form-group">
              <label htmlFor="desc">CHECK : </label>&nbsp;
              <input type="checkbox" v-model="state.thisReservations.done" />   
          </div>
          <div class="form-group">
              <button type="button" class="btn btn-primary m-1" @click="updateReservation">UPDATE</button>
              <button type="button" class="btn btn-primary m-1" @click="cancel">CANCEL</button>
          </div>
        </div>
      </div>
    </div>
  </div> 
</template>

<script>
import Constant from '../../Constant';
import { reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router';

export default {
   
    setup() {
        //const prueba = [];
        const store = useStore();
        const router = useRouter();
        const currentRoute = useRoute();
        console.log(store.state.reservation.reservation)
        //store.state.reservation.reservation = prueba;
        const todoitem = store.state.reservation.reservation.find((item) => item.id.toString() === currentRoute.params.id)

        const state = reactive({ 
            thisReservations : { ...todoitem } 
        });
        const updateReservation = () => {
            //router.push({ name:"tables" });
            store.dispatch("reservation/" +  Constant.UPDATE_RESERVATION, { reservationitem: state.thisReservations });
        }

        const cancel = () => {
            router.push({ name:"Reservations"});
        }
        return { state, updateReservation, cancel };
    }
}
</script>

<style>

  .update_div {
    background-image: url("../../assets/img/home_minimal.jpg");
  }
  .update_text {
    margin-top: 5%;
    color: white;
  }

</style>