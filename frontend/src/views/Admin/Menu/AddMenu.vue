<template>
    <div class="card card-body div_addmenu">
        <h2 class="menu_h2">Add Menu Admin</h2>
        <div class="row">
        <div class="col">
          <div class="form-group">
            <label htmlFor="nombre">NAME:</label>&nbsp;
            <input type="text" v-model="form.menu_form.nombre"/>
            <!-- <input type="text"/> -->
          </div>
          <div class="form-group">
              <label htmlFor="descr">DESCRIPTION:</label><p></p>
              <!-- <textarea rows="2" id="desc"></textarea> -->
              <textarea rows="2" id="desc" v-model="form.menu_form.descr"></textarea> 
          </div>
          <div class="form-group">
            <label htmlFor="img">URL IMG:</label>&nbsp;
            <!-- <input type="text"/> -->
            <input type="text" v-model="form.menu_form.img"/>
          </div>
          <div class="form-group">
              <button type="button" class="btn btn-primary m-1" @click="addMenu">ADD</button>
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
import { useRouter } from 'vue-router';
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({
    position: "top-right"
});
export default {
    setup() {
        const store = useStore();
        const router = useRouter();
        
        window.scroll({
            top: 0
        })

        const form = reactive({ 
          menu_form : { nombre:"", descr: "", img: "" },
        });

        const addMenu = () => {
          console.log(form.menu_form)
          store.dispatch("menu/" + Constant.ADD_MENU, { menu_form : form.menu_form })
          toaster.success(`Menu created!`);
          
          router.push({ name:"dashboard" });
        }

        const cancel = () => {
            router.push({ name:"dashboard"});
        }

        return {cancel, addMenu, form}
    }

}
</script>

<style>
    .div_addmenu {
        background-image: url("../../../assets/img/fondo_white_admin.jpg");
    }
    .menu_h2 {
        margin-top: 5%;
        color: black
    }

</style>