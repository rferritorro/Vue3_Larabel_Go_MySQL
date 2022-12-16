<template>
  <div class="card card-body div_reservation">
    <div class="add_reservationclass">
      <div class="row">
        <div class="col p-3">
          <h2>ADD RESERVATION</h2>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-group">
            <label htmlFor="user_id">NAME:</label>
            <input type="text" v-model="form.reservation_form.user_id" />
          </div>
          <!-- <div class="form-group">
              <label htmlFor="desc">DESCRIPTION:</label>
              <textarea class="form-control" rows="3" id="desc" v-model="form.reservation_form.desc"></textarea>  
          </div> -->
          <div class="form-group">
              <label htmlFor="n_comensales">N_COMENSALES:</label>
              <input type="number" v-model="form.reservation_form.n_comensales" />
          </div>
          <div class="form-group">
              <label htmlFor="hour">HOUR: </label>
              <input type="text" v-model="form.reservation_form.hour"/>
          </div>
          <div class="form-group">
            <label>Choose a Date:</label>
            <Datepicker v-model="form.reservation_form.date"
            :clearable="true" 
            :typeable="true" 
            :disabledDates="{dates: [disabledDate]}"/><br>
          </div>
          <div class="form-group">
            <label>Choose a menu:</label>
            <select v-model="form.reservation_form.menu_id">
              <option disabled value="" selected>MENU: </option>
              <option v-for="forms in form.menu" :key="forms.id" :value="forms.id">
                {{forms.nombre}}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label>Choose a table:</label>
            <select v-model="form.reservation_form.table_id">
              <option :value="1">1</option>
              <option :value="2">2</option>
              <option :value="3">3</option>
            </select>
          </div>
          <div class="form-group">
              <button type="button" class="btn btn-primary m-1" @click="addReservation">ADD</button>
              <button type="button" class="btn btn-primary m-1" @click="cancel">CANCEL</button>
          </div>
        </div>
      </div>
    </div>
  </div> 
</template>

<script>
import { computed, reactive } from 'vue'
import { useStore } from 'vuex'
import Constant from '../../../Constant';
import { useRouter } from 'vue-router';
import Datepicker from "vue3-datepicker";
import { add } from 'date-fns'
export default {
    data() {
      return {
        isFocused: false,
        date: new Date()
      };
    },
    components: {
        Datepicker,
    },
    setup() {
        const store = useStore();
        const router = useRouter();

        window.scroll({
            top: 0
        })

        const form = reactive({ 
          reservation_form : { user_id:"1", table_id:"", menu_id:"", date:"", hour: "", n_comensales: "" },
          menu: computed(() => store.getters['menu/getMenus'])
        });

        if (!form.menu){
          store.dispatch("menu/" +  Constant.INITIALIZE_ALLMENUS);
        }
        console.log(form)
        const addReservation = () => {
          console.log(form.reservation_form)
          store.dispatch("reservation/" + Constant.ADD_RESERVATION, { reservation_form : form.reservation_form })
          //this.$toast.show(`Hey! I'm here`);
          router.push({ name:"home" });
        }
        const cancel = () => {
            router.push({ name:"home"});
        }
        const disabledDate = reactive(add(new Date(), {days : -1 }))
        return { form, addReservation, cancel, disabledDate}
    }
}
</script>

<style>
  .div_reservation {
    background-image: url("../../../assets/img/home_minimal.jpg");
  }
  .add_reservationclass {
    margin-top: 5%;
    color: white;
  }


</style>