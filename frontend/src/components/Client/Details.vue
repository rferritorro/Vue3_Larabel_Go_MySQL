<template>
   <div v-if="Object.keys(table).length === 0" class="w-75 text-white p-3">
      <Carousel :carrousel="carrousel"></Carousel>
   </div>
   <div v-else class="w-75 text-white p-3">
      <div class="h-100 w-100">
         <!-- <img src="{{ table.img }}" alt=""> -->
         <img class="float-left w-75 p-2" src="https://www.gastroactitud.com/wp-content/uploads/2019/09/nozomi_.jpg" alt="">
         
         <div class="float-right w-25 h-100 d-flex justify-content-center align-items-center flex-column flex-wrap">
            <h3 style="color: aliceblue;">MESA: {{ table.Id }}</h3><hr>
            <label for="comander">NºComensales</label>
            <input class="w-25 m-3 rounded" type="number" v-model="value_comensal" name="comander" id="comander" :max="5" :min="1" >
            <!-- carrousel-menu -->
            <Datepicker
            class="w-100 m-3 rounded"
            v-model="event"
            :disabledDates="state.disabledDates"
            v-on="get_data_selected(event,table.Id)"
            />
            <v-select class="bg-light text-dark w-75 m-3 rounded" placeholder="Horas a reservar" v-model="select" :options="hour_options" :selectable="hour=> !hour.disabled" label="name" />
            <v-select class="bg-light text-dark w-75 m-3 rounded" placeholder="Elige Menu" v-model="menu" :options="state.menuList.menu" label="nombre" />
            <button class="btn btn-dark w-75 m-3 rounded" v-on:click="action_reserved(table,event,select,menu)">Reserved</button>
         </div>
      </div>
      <span id="table_id" style="display:none">{{ table }}</span>
   </div>
</template>

<script>
import Carousel from '../Carousel'
import { ref } from 'vue';
import Constant from '../../Constant';
import { computed, reactive } from 'vue';
import { useStore } from 'vuex'
import Datepicker from "vue3-datepicker";
import { createToaster } from "@meforma/vue-toaster";
import router from '../../router';
import VueJwtDecode from 'vue-jwt-decode'
// import { useRoute } from 'vue-router';
// import { add } from 'date-fns'

export default {
   props: {
        table: Object,
        date: Date,
   },
    components: {
        Datepicker,
        Carousel
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
      const carrousel = [
            "https://7televalencia.com/wp-content/uploads/2019/04/sushi-e1556275361391.jpg",
            "https://cdn.vox-cdn.com/thumbor/zSwlAVYnzQBO8hTx6ZE6C-7u6io=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22213168/134301527_150986323476283_8160139784797337975_o.jpg",
            "https://media-cdn.tripadvisor.com/media/photo-s/24/f3/98/d5/caption.jpg"
        ]
      const value_comensal = ref(1)
      const toaster = createToaster({
         position: "top-right"
      });
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
      const store = useStore();
      var array = []
      for (let i=1;i <= new Date().getDate();i++) {
         array.push(new Date(new Date().getFullYear(),new Date().getMonth(),i))
      }
      // const timebydate = reactive(
      //    computed(() => store.getters['tablesclient/getTables'])      
      // )
      const state = reactive({
            allreservation: computed(() => store.getters['reservationclient/getAllReservation']),
            disabledDates: {
               dates: array
            },
            menuList: computed(() => store.getters['menuclient/getAllMenusClient']),
            token: computed(() => localStorage.getItem("token"))
         });
      
      store.dispatch("menuclient/" + Constant.INITIALIZE_ALLMENUS);
      function action_reserved(table,event,option,menu) {
         if (!state.token) {
            router.push({name: "login"})
            toaster.error("Debes iniciar sesion para reservar una mesa")
            return 0
         }
         var msg = ""

         if (!menu) {
            msg = "Selecione menu o deje la opción de no especificar"
         }

         if (option) {
            var position = (() => {
               for (let i=0; i < hour_options.length;i++) {
                  if (hour_options[i].name === option.name) {
                     return i
                  }
               }
            })()
         } else {
            msg = "Selecione hora para hacer la reserva"
         }

         if (!msg) {
            const id = VueJwtDecode.decode(state.token)
            console.log(id)
            var reserva = {
               user_id: id.id,
               table_id: table.Id,
               menu_id: menu.Id,
               date: transform_data(event),
               hour: position,
               n_comensales: value_comensal.value
            }
            router.push({name: "home"})
            toaster.success("Mesa "+ reserva.table_id + " reservada correctamente" )
            toaster.warning("Pendiente de confirmar el Admin")
            store.dispatch("reservationclient/" + Constant.ADD_RESERVATION, reserva);
         } else {
            toaster.error(msg)
         }
      }

      function transform_data(fulldate) {
         let day=fulldate.getDate() < 10 ? ''+fulldate.getDate() : fulldate.getDate()
         let month= fulldate.getMonth()+1 < 10 ? ''+fulldate.getMonth()+1 : fulldate.getMonth()+1
         let year=fulldate.getFullYear()
         return year+'-'+month+'-'+day
      }
      function get_data_selected(date,table_id) {  
         hour_options.map(i=>i.disabled=false)
         // console.log(transform_data(date))   
         // console.log(state.allreservation[6].date.split('T00')[0])
         var current_tables=state.allreservation.filter(i=> i.Table_id == table_id  && transform_data(date)===i.date.split('T00')[0])
         // console.log(current_tables)
         current_tables.forEach(e => {
            hour_options[e.hour].disabled = true
         });
         console.log(hour_options)
      }

      store.dispatch("reservationclient/" + Constant.INITIALIZE_ALLRESERVATIONS);
      return {state,hour_options,value_comensal,carrousel, get_data_selected, action_reserved}
   },

}
</script>

<style>

</style>