<template>
    <nav id="header_nav" class="header_nav">
        <img src="../assets/KAIZEN/2.png" @click="changeIsNavShow" />
        <div>
            <router-link class="nav-link" to="/home">
                <span class="span" title="HOME">Home</span>
            </router-link>
            <router-link class="nav-link" to="/about">
                <span class="span" title="ABOUT">About</span>
            </router-link>
            <router-link class="nav-link" to="/tables">
                <span class="span" title="TABLES">Table</span>
            </router-link>
            <router-link class="nav-link" to="/dashboard" v-if="state.isAdminStorage">
                <span class="span"  title="ADMIN">Admin</span>
            </router-link>
            <router-link class="nav-link" to="/profile" v-if="state.isToken">
                <!-- <span class="span"  title="Profile">Profile</span> -->
                <img :src="state.data.user.avatar" v-if="state.isToken" class="w-25" style="width: 20%;"/>
            </router-link>
            <router-link class="nav-link" to="/login" v-if="!state.isToken" >
                <font-awesome-icon  icon="fa-solid fa-user" title="Login" size="2x" class="iconuser" />
            </router-link>
            <button class="logout" @click="logout" v-if="state.isToken">
                <font-awesome-icon  icon="fa-solid fa-right-from-bracket" title="DASHBOARD" size="2x" class="iconuser" />
            </button>
        </div>
    </nav>
</template>

<script>
import { reactive, computed } from 'vue';
import Constant from "../Constant";
import { useStore } from 'vuex';
import VueJwtDecode from 'vue-jwt-decode'
export default {
    setup() {
        const store = useStore();
        const state = reactive({
            isNavShow: false,
            isAuth: computed(() => store.getters['user/GetIsLogin']),
            isToken: computed(() => store.getters['user/GetIsLoginStorage']),
            isAdmin: computed(() => store.getters['user/GetIsAdmin']),
            isAdminStorage: computed(() => store.getters['user/GetIsAdminStorage']),
            data: computed(() => store.getters['user/GetUser']),
            token: computed(() => localStorage.getItem("token")),
        })
        //const token = ref(localStorage.getItem('isAuth'))
        if (state.token) {
            const id = VueJwtDecode.decode(state.token)
            store.dispatch("user/" + Constant.USER_DATA, { id: id.id });
        }
        
        
        const navClass = computed(() => state.isNavShow ? "collapse navbar-collapse show" : "collapse navbar-collapse")
        const changeIsNavShow = () => {
            state.isNavShow = !state.isNavShow;
        }
        window.addEventListener('scroll', () => {
            let menu = document.getElementById("header_nav")
            if (window.scrollY > 80) {
                menu.classList.remove("header_nav")
                menu.classList.add("header_scroll_nav")
            } else {
                menu.classList.add("header_nav")
                menu.classList.remove("header_scroll_nav")
            }
        })
        function logout() {
            store.dispatch("user/" + Constant.LOGOUT );
        }

        return { state, changeIsNavShow, navClass, store, logout };
    }

}

</script>

<style>
@font-face {
    font-family: "Chinese-letter";
    src: url("../assets/letter_style/Tecnojap.ttf");
}

img {
    width: 5.5%;
}

.header_nav {
    height: 100px;
    position: absolute;
    z-index: 101;
    width: 97%;
}

.logout {
    background-color: transparent; 
    border: none;
}

.header_scroll_nav {
    background-color: #17191b;
    /* background-image: url("../assets/img/footer.jpg"); */
    border-radius: 50px;
    opacity: 0.5;
    height: 100px;
    position: fixed;
    z-index: 101;
    width: 97%;
}

.header_scroll_nav:hover {
    opacity: 1;
}

.header_scroll_nav img {
    display: inline-block;
    padding: 0.5%;
    border-radius: 50px;
}

.header_scroll_nav div {
    float: right;
    width: 40%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.header_scroll_nav div * {
    padding: 0.5%;
    padding-left: 5.5%;
    color: white;
    font-family: Chinese-letter;
    font-size: 25px;
}

.header_nav img {
    display: inline-block;
    padding: 0.5%;
}

.header_nav div {
    float: right;
    width: 40%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.header_nav div * {
    color: rgb(232, 25, 25);
    font-family: Chinese-letter;
    font-size: 25px;
}
</style>