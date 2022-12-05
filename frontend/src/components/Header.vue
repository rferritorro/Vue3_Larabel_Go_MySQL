<template>
    <nav class="header_nav">
        <img src="../assets/KAIZEN/2.png" @click="changeIsNavShow"/>
        <router-link class="nav-link" to="/home">
            <span class="span">Home</span>
        </router-link>
        <router-link class="nav-link" to="/about">
            <span class="span">About</span>
        </router-link>
        <router-link class="nav-link" to="/tables/add">
            <span class="span">Reservation</span>
        </router-link>
    </nav>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
    setup() {
        const state = reactive({
            isNavShow: false
        })
        const navClass = computed(() => state.isNavShow ? "collapse navbar-collapse show" : "collapse navbar-collapse")
        const changeIsNavShow = () => {
            state.isNavShow = !state.isNavShow;
        } 
        
        return { state, changeIsNavShow, navClass };
    }
}
</script>

<style>
img {
    width: 10%;
}
.span {
    color: rgb(34, 32, 29);
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 180%;
    margin: 1.5cm; 
}
.span:hover {
    color: #ead1b8;
    
}
.header_nav {
    background-color: #b88d61;
    display: flex;
    flex-direction: row;
    padding: 0.8%;
}
</style>