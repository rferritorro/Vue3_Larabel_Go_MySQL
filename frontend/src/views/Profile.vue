<template>
    <div class="card card-body profile_div">
        <Profile :usuario="state.data.user" :reservationUsuario="state.reserved_User"></Profile>
    </div>
</template>

<script>
import Profile from '../components/Profile'
import { reactive, computed } from 'vue'
import { useStore } from 'vuex'
import Constant from '../Constant';
import VueJwtDecode from 'vue-jwt-decode'
export default {
    components: {
        Profile
    },
    setup() {
        const store = useStore();
        const state = reactive({ 
          data: computed(() => store.getters['user/GetUser']),
          token: computed(() => localStorage.getItem("token")),
          reserved_User: computed(() => store.getters['user/GetUserReservations']),
        });
        console.log(state.reserved_User)
        const id = VueJwtDecode.decode(state.token)
        store.dispatch("user/" + Constant.USER_DATA, { id: id.id });
        store.dispatch("user/" + Constant.USER_DATA_RESERVATION, { id: id.id });

        return {store,state}
    }
}
</script>

<style>

.profile_div {
    background-color: transparent;
    position: relative;
    top: 15%;
    width: 50%;
    background-image: url("../assets/img/home_minimal.jpg");
}
</style>