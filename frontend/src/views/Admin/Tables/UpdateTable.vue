<template>
    <div class="card card-body div_updatemenu">
        <h2 class="menu_h2">Update Table Admin</h2>
        <div class="row">
        <div class="col">
            <h4>TABLE: {{ state.thisTables.id }}</h4>
          <div class="form-group">
            <label htmlFor="reserved">RESERVED:</label>&nbsp;
            <input type="number" v-model="state.thisTables.reserved"/>
          </div>
          <div class="form-group">
              <label htmlFor="place">PLACE:</label>&nbsp;
              <!-- <input type="text" v-model="state.thisTables.place"/> -->
              <v-select class="bg-light text-dark" style="width: 10%;"  v-model="state.thisTables.place" :options="place_options" label="name"></v-select>
          </div>
          <div class="form-group">
            <label htmlFor="img">URL IMG:</label>&nbsp;
            <input type="text" v-model="state.thisTables.img"/>
          </div>
          <div class="form-group">
              <button type="button" class="btn btn-primary m-1" @click="editMenu">UPDATE</button>
              <button type="button" class="btn btn-primary m-1" @click="cancel">CANCEL</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { reactive } from 'vue'
import { useStore } from 'vuex'
import Constant from '../../../Constant';
import { useRouter, useRoute } from 'vue-router';
export default {
    setup() {
        const store = useStore();
        const router = useRouter();
        const currentRoute = useRoute();
        
        window.scroll({
            top: 0
        })

        const place_options=["First Floor", "Second Floor","Terrace"]

        console.log(currentRoute.params.id)
        const todoitem = store.state.tables.tables.find((item) => item.id.toString() === currentRoute.params.id)

        const state = reactive({ 
            thisTables : { ...todoitem } 
        });
        console.log(state.thisTables)
        const editMenu = () => {
            store.dispatch("tables/" +  Constant.UPDATE_TABLES, { tablesitem: state.thisTables });
            router.push({ name:"dashboard" });
        }

        const cancel = () => {
            router.push({ name:"dashboard"});
        }

        return {cancel, editMenu , place_options, state}
    }

}
</script>

<style>
    .div_updatemenu {
        background-image: url("../../../assets/img/fondo_white_admin.jpg");
    }
    .menu_h2 {
        margin-top: 5%;
        color: black
    }

</style>