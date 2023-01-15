<template>
    <div class="card card-body div_addmenu">
        <h2 class="menu_h2">Add Table Admin</h2>
        <div class="row">
        <div class="col">
          <div class="form-group">
            <label htmlFor="reserved">Reserved:</label>&nbsp;
            <input type="number" v-model="form.table_form.reserved"/>
            <!-- <input type="text"/> -->
          </div>
          <div class="form-group">
            <label htmlFor="place">Place:</label>&nbsp;
            <input type="text" v-model="form.table_form.place"/>
          </div>
          <div class="form-group">
            <label htmlFor="img">URL IMG:</label>&nbsp;
            <input type="text" v-model="form.table_form.img"/>
          </div>
          <div class="form-group">
              <button type="button" class="btn btn-primary m-1" @click="addTable">ADD</button>
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
export default {
    setup() {
        const store = useStore();
        const router = useRouter();
        
        window.scroll({
            top: 0
        })

        const form = reactive({ 
          table_form : { reserved:"0", place: "", img: "" },
        });

        const addTable = () => {
          console.log(form.table_form)
          store.dispatch("tables/" + Constant.ADD_TABLES, { table_form : form.table_form })
          //this.$toast.show(`Hey! I'm here`);
          router.push({ name:"dashboard" });
        }

        const cancel = () => {
            router.push({ name:"dashboard"});
        }

        return {cancel, addTable, form}
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