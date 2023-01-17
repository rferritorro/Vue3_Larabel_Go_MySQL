<template>
    <div class="p-5 d-flex w-100">
        <img class="w-25" :src="usuario.avatar" alt="avatar">
        <div class="pl-5 mr-5 w-100">
            <input type="text" disabled :value="usuario.username"><br>
            <input type="text" disabled :value="usuario.email"><br>
            <input :type="type1" v-model="password" placeholder="New password"/><button class="btn btn-warning" @click="change_value(1)" required>See</button><br>
            <input :type="type2" v-model="repassword" placeholder="Confirm password"/><button class="btn btn-warning" @click="change_value(2)" required>See</button><br>
            <button class="btn btn-danger" @click="change_password(password,repassword,usuario)"> Change Password</button>
        </div>
        <div class="pl-5">
            <h2 style="color: white;">Reservations</h2><br>
            <div v-if="reservationUsuario != 0">
                <table class="table_profile">
                    <thead class="table_profile">
                        <th class="table_profile">
                            <h5>Table</h5>
                        </th>
                        <th class="table_profile">
                            <h5>Date</h5>
                        </th>
                        <th class="table_profile">
                            <h5>Hour</h5>
                        </th>
                        <th class="table_profile">
                            <h5>N_Diners</h5>
                        </th>
                        <th class="table_profile">
                            <h5>State</h5>
                        </th>
                    </thead>
                    <tbody class="table_profile" v-for="reservations in reservationUsuario" v-bind:key="reservations.Id">
                        <td class="table_profile">
                            <h5>{{reservations.Table_id}}</h5> 
                        </td>
                        <td class="table_profile">
                            <h5>{{reservations.date.split('T00')[0]}}</h5>
                        </td>
                        <td class="table_profile">
                            <h5>{{hour_options[reservations.hour]}}</h5>
                        </td>
                        <td class="table_profile">
                            <h5>{{reservations.n_comensales}}</h5>
                        </td>
                        <td class="table_profile">
                            <div v-if="reservations.reserved && Date.parse(reservations.date.split('T00')[0]) > Date.parse(dateFormat)" style="background-color: green; text-align: center;">
                                Confirmed!
                            </div>
                            <div v-if="!reservations.reserved && Date.parse(reservations.date.split('T00')[0]) > Date.parse(dateFormat)" style="background-color: yellow; text-align: center;">
                                <span style="color: black;">Pending confirm</span>
                            </div>
                            <div v-if="Date.parse(reservations.date.split('T00')[0]) < Date.parse(dateFormat)" style="background-color: red; text-align: center;">
                                Expired
                            </div>
                        </td>
                    </tbody>
                </table>
            </div>
            <div v-if="reservationUsuario == 0">
                <h5 style="color: white;">Nothing Reservations</h5>
            </div>
        </div>
    </div>
</template>

<script>
import { ref,reactive,computed } from 'vue';
import { useStore } from 'vuex';
import { createToaster } from "@meforma/vue-toaster";
import Constant from '../Constant';


    export default {
    props: {
        usuario: Object,
        reservationUsuario: Object
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
        const hour_options=['13:00-14:00', '14:00-15:00', '15:00-16:00', '20:00-21:00', '21:00-22:00', '23:00-24:00'];
        const newDate = new Date();
        const formato = 'yyyy-mm-dd'
        const dateFormat = formato.replace('mm', newDate.getMonth() + "" +1)
        .replace('yyyy', newDate.getFullYear())
        .replace('dd', newDate.getDate())

        // function format(newDate, formato) {
        //     console.log(newDate,formato)
        // }
        //const dateFormat = "2023-01-20"
        
        
        async function change_password(pass,repass,usuario) {
            if ( pass === repass ) {
                var data = {
                    Id: usuario.Id,
                    password: pass
                }
                store.dispatch("user/" + Constant.PROFILE, data);
                const state = reactive({ 
                    checked : computed(() => store.getters["user/GetState"]) 
                });
                console.log(state.checked)
                if (state.checked) {
                    toaster.success("Se ha cambiado la contraseña")
                } else {
                    toaster.error("La contraseña es la misma")
                }
            } else {
                toaster.error("Contraseñas tienen que ser iguales")
            }
        }
        return {type1,type2,change_value,change_password, hour_options, dateFormat}
    }
}
</script>

<style>

.table_profile {
    border: 1px solid white;
    text-align: center;
    color: white;
}

</style>