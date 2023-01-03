<template v-if="table">
   <div class="bg-primary w-50 text-white p-3">
      <div class="h-100 w-100">
         <!-- <img src="{{ table.img }}" alt=""> -->
         <img class="float-left w-50 p-2" src="https://thumbs.dreamstime.com/b/el-demersus-africano-del-spheniscus-ping%C3%BCino-de-la-colonia-en-los-cantos-rodados-vara-cerca-cape-town-sur%C3%A1frica-que-se-vue-139731054.jpg" alt="">
         
         <div class="float-right w-50 bg-dark d-flex justify-content-center flex-column">
            <input class="w-50" type="text" name="name" id="name" placeholder="Name">
            <input class="w-50" type="number" name="comander" id="comander">
            <!-- carrousel-menu -->
            <Datepicker
            v-model="event"
            :disabledDates="state.disabledDates"
            v-on="get_data_selected(event)"
            />
            <v-select class="bg-light text-dark" :options="hour_options"></v-select>
         </div>
      </div>
      <span id="table_id" style="display:none">{{ table }}</span>
   </div>
</template>

<script>
// import { onUpdated } from 'vue';
import { computed, reactive } from 'vue';
import { useStore } from 'vuex'
import Datepicker from "vue3-datepicker";
// import { add } from 'date-fns'

export default {
   props: {
        table: Object,
        date: Date
   },
    components: {
        Datepicker,
   },
   data() {
      return {
         hour_options: [
            '13:00-14:00', 
            '14:00-15:00',
            '14:00-15:00',
            '15:00-16:00',
            '20:00-21:00',
            '21:00-22:00',
            '22:00-23:00',
            '23:00-24:00'
         ],
         event: new Date()
      }
   },
   setup() {
      // onUpdated(() => {
      // console.log(document.getElementById('table_id').textContent)
      // })
      var array = []
      for (let i=0;i <= new Date().getDay();i++) {
         array.push(new Date(new Date().getFullYear(),new Date().getMonth(),i))
      }
      var state = {
         disabledDates: {
            dates: array
         }
      }
      console.log(array)
      const store = useStore();
      const timebydate = reactive(
         computed(() => store.getters['tablesclient/getTables'])      
      )
      function get_data_selected(date) {
         let fulldate=[date.getDate(),(date.getMonth()+1),date.getFullYear()]
         console.log(fulldate)
      }
      return {state, timebydate, get_data_selected}
   },

}
</script>

<style>

</style>