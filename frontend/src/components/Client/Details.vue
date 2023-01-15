<template>
   <div v-if="Object.keys(table).length === 0" class="bg-primary w-50 text-white p-3">
      <h1>Select table</h1>
   </div>
   <div v-else class="bg-primary w-50 text-white p-3">
      <form class="h-100 w-100">
         <!-- <img src="{{ table.img }}" alt=""> -->
         <img class="float-left w-50 p-2" src="https://www.gastroactitud.com/wp-content/uploads/2019/09/nozomi_.jpg" alt="">
         
         <div class="float-right w-50 bg-dark d-flex justify-content-center flex-column">
            <input class="w-50" type="text" name="name" id="name" placeholder="Name">
            <input class="w-50" type="number" v-model="value_comensal" name="comander" id="comander" :max="5" :min="1" >
            <!-- carrousel-menu -->
            <Datepicker
            v-model="event"
            :disabledDates="state.disabledDates"
            v-on="get_data_selected(event,table.id)"
            />
            <v-select class="bg-light text-dark" :options="hour_options" :selectable="hour=> !hour.disabled" label="name"></v-select>
         </div>
      </form>
      <span id="table_id" style="display:none">{{ table }}</span>
   </div>
</template>

<script>
import { ref } from 'vue';
import Constant from '../../Constant';
import { computed, reactive } from 'vue';
import { useStore } from 'vuex'
import Datepicker from "vue3-datepicker";
// import { add } from 'date-fns'

export default {
   props: {
        table: Object,
        date: Date,
   },
    components: {
        Datepicker,
   },
   data() {
      return {
         event: new Date()
      }
   },
   setup() {
      // onUpdated(() => {
      // console.log(document.getElementById('table_id').textContent)
      // })
      const value_comensal = ref(1)
      const hour_options=[
         {
            name: '13:00-14:00',
            disabled: false 
         },
         {
            name: '14:00-15:00',
            disabled: false 
         },
         {
            name: '15:00-16:00',
            disabled: false 
         },
         {
            name: '20:00-21:00',
            disabled: false 
         },
         {
            name: '21:00-22:00',
            disabled: false 
         },
         {
            name: '23:00-24:00',
            disabled: false 
         }]
      var array = []
      for (let i=1;i <= new Date().getDate();i++) {
         array.push(new Date(new Date().getFullYear(),new Date().getMonth(),i))
      }

      const store = useStore();
      // const timebydate = reactive(
      //    computed(() => store.getters['tablesclient/getTables'])      
      // )
      const state = reactive({
            allreservation: computed(() => store.getters['reservationclient/getAllReservation']),
            disabledDates: {
               dates: array
            }
        });

         function transform_data(fulldate) {
            let day=fulldate.getDate() < 10 ? ''+fulldate.getDate() : fulldate.getDate()
            let month= fulldate.getMonth()+1 < 10 ? ''+fulldate.getMonth()+1 : fulldate.getMonth()+1
            let year=fulldate.getFullYear()
            return year+'-'+month+'-'+day
         }
      function get_data_selected(date,table_id) {  
         hour_options.map(i=>i.disabled=false)
         // console.log(transform_data(date))
         // console.log(state.allreservation[1].date.split('T00')[0])
         var current_tables=state.allreservation.filter(i=> i.Table_id == table_id  && transform_data(date)===i.date.split('T00')[0])     
         current_tables.forEach(e => {
            hour_options[e.hour].disabled = true
         });
         console.log(hour_options)
      }  
      store.dispatch("reservationclient/" + Constant.INITIALIZE_ALLRESERVATIONS);

      return {state,hour_options,value_comensal, get_data_selected}
   },

}
</script>

<style>

</style>