<template>
    <div class="p-5 d-flex w-100">
        <img class="w-25" :src="usuario.avatar" alt="avatar">
        <div class="pl-5">
            <input type="text" disabled :value="usuario.username"><br>
            <input :type="type1" v-model="password" placeholder="New password"/><button class="btn btn-warning" @click="change_value(1)">See</button><br>
            <input :type="type2" v-model="repassword" placeholder="Confirm password"/><button class="btn btn-warning" @click="change_value(2)">See</button><br>
            <button class="btn btn-danger" @click="change_password(password,repassword,usuario)"> Change Password</button>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { createToaster } from "@meforma/vue-toaster";
import Constant from '../Constant';


    export default {
    props: {
        usuario: Object
    },
    setup() {
        const type1 = ref("password")
        const type2 = ref("password")
        const store = useStore()
        const toaster = createToaster({
         position: "top-right"
      });
        function change_value(button) {
            if (button==1) {
                type1.value  = type1.value  === 'password' ? 'text' : 'password'
            } else {
                type2.value  = type2.value  === 'password' ? 'text' : 'password'
            }
        }
        function change_password(pass,repass,usuario) {
            if ( pass === repass ) {
                var data = {
                    Id: usuario.Id,
                    password: pass
                }
                let check = store.dispatch("user/" + Constant.PROFILE, data);
                if (check) {
                    toaster.error("Se ha cambiado la contraseña")
                } else {
                    toaster.error("La contraseña es la misma")
                }
            } else {
                toaster.error("Contraseñas tienen que ser iguales")
            }
        }
        return {type1,type2,change_value,change_password}
    }
}
</script>

<style>

</style>