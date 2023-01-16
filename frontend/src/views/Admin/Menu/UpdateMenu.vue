<template>
    <div class="card card-body div_updatemenu">
        <h2 class="menu_h2">Update Menu Admin</h2>
        <div class="row">
        <div class="col">
          <div class="form-group">
            <label htmlFor="nombre">NAME:</label>&nbsp;
            <input type="text" v-model="state.thisMenu.nombre"/>
            <!-- <input type="text"/> -->
          </div>
          <div class="form-group">
              <label htmlFor="descr">DESCRIPTION:</label><p></p>
              <!-- <textarea rows="2" id="desc"></textarea> -->
              <textarea rows="2" id="desc" v-model="state.thisMenu.descr"></textarea> 
          </div>
          <div class="form-group">
            <label htmlFor="img">URL IMG:</label>&nbsp;
            <!-- <input type="text"/> -->
            <input type="text" v-model="state.thisMenu.img"/>
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
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({
    position: "top-right"
});
export default {
    setup() {
        const store = useStore();
        const router = useRouter();
        const currentRoute = useRoute();
        
        window.scroll({
            top: 0
        })

        console.log(currentRoute.params.id)
        const todoitem = store.state.menu.menu.find((item) => item.id.toString() === currentRoute.params.id)

        const state = reactive({ 
            thisMenu : { ...todoitem } 
        });
        console.log(state.thisMenu)
        const editMenu = () => {
            store.dispatch("menu/" +  Constant.UPDATE_MENU, { menuitem: state.thisMenu });
            toaster.success(`Menu Updated!`);
            router.push({ name:"dashboard" });
        }

        const cancel = () => {
            router.push({ name:"dashboard"});
        }

        return {cancel, editMenu , state}
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