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
            <label htmlFor="todo">NAME :</label>&nbsp;
            {{ state.thisReservations.username }}
            <input type="text" v-model="state.thisReservations.user_id" />
          </div>
          <div class="form-group">
              <label htmlFor="table">TABLE : </label>&nbsp;
              <input type="text" v-model="state.thisReservations.Table_id" />   
          </div>
          <div class="form-group">
            <label htmlFor="menu">Menu : </label>&nbsp;
            <v-select class="bg-light text-dark" style="width: 10%;" v-model="state.thisReservations.menu_id" :options="menu_options" label="name"></v-select>
          </div>
          <div class="form-group">
              <label htmlFor="hour">Tourn : </label>&nbsp;
              <input type="text" v-model="state.thisReservations.hour" />   
          </div>
          <div class="form-group">
              <label htmlFor="comen">N_COMENSALES : </label>&nbsp;
              <input type="number" v-model="state.thisReservations.n_comensales" />   
          </div>
          <!-- <div class="form-group">
              <label htmlFor="desc">CHECK : </label>&nbsp;
              <input type="checkbox" v-model="state.thisReservations.done" />   
          </div> -->
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
import Constant from '../../../Constant';
import { reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router';

export default {
   
    setup() {
        //const prueba = [];
        const store = useStore();
        const router = useRouter();
        const currentRoute = useRoute();
        const menu_options=["CHILDREN", "SPECIAL", "PREMIUM", "STAR", "TRADITIONAL", "NOT SPECIFY"]
        
        //store.state.reservation.reservation = prueba;
        const todoitem = store.state.reservation.reservation.find((item) => item.id.toString() === currentRoute.params.id)
        const todomenu = store.state.menu;
        console.log(todoitem)

        const state = reactive({ 
            thisReservations : { ...todoitem },
            thisMenus : { ...todomenu } 
        });
        const updateReservation = () => {
            store.dispatch("reservation/" +  Constant.UPDATE_RESERVATION, { reservationitem: state.thisReservations });
            router.push({ name:"dashboard" });
        }

        const cancel = () => {
            router.push({ name:"Reservations"});
        }
        return { state, updateReservation, cancel, menu_options };
    }
}
</script>

<style>

  .update_div {
    background-image: url("../../../assets/img/home_minimal.jpg");
  }
  .update_text {
    margin-top: 5%;
    color: white;
  }

</style>