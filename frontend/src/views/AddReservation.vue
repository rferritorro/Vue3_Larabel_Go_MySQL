<template>
  <div class="container">
    <div class="row">
      <div class="col p-3">
        <h2>ADD RESERVATION</h2>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="form-group">
          <label htmlFor="name">NAME:</label>
          <input type="text" class="form-control" v-model="form.reservation_form.name" />
        </div>
        <div class="form-group">
            <label htmlFor="desc">DESCRIPTION:</label>
            <textarea class="form-control" rows="3" id="desc" v-model="form.reservation_form.desc"></textarea>  
        </div>
        <div class="form-group">
            <label htmlFor="hour">HOUR: </label>
            <input type="text" v-model="form.reservation_form.hour"/>
        </div>
        <div>
            <select>
              <option>Menu</option>
            </select>
        </div>
        <Datepicker v-model="date" 
          :clearable="true" 
          :typeable="true" 
          :disabledDates="{dates: [disabledDate]}"/><br>
        <div class="form-group">
            <button type="button" class="btn btn-primary m-1" @click="addReservation">ADD</button>
            <button type="button" class="btn btn-primary m-1" @click="cancel">CANCEL</button>
        </div>
      </div>
    </div>
  </div> 
</template>

<script>
import { reactive } from 'vue'
//import { useStore } from 'vuex'
import Datepicker from "vue3-datepicker";
import { useRouter } from 'vue-router';
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
        //const store = useStore();
        const router = useRouter();
        const form = reactive({ 
            reservation_form : { no:"", name:"", desc:"", dat:"",  done:false } 
        });

        const addReservation = () => {
          console.log(form.reservation_form)
          // if (state.reservation_form.todo.trim().length >= 2) {
          //   store.dispatch(Constant.ADD_TODO, { todoitem : state.reservation_form })
          //   router.push({ name:"todoList" });
          // } else {
          //   alert('ERROR');
          // }
        }
        const cancel = () => {
            router.push({ name:"home"});
        }
        //
        const disabledDate = reactive(add(new Date(), {days : -1 }))
        return { form, addReservation, cancel, disabledDate}
    }
}
</script>

<style>

</style>