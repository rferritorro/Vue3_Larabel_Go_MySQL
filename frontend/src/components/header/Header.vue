<template>
    <nav class="header_nav">
        <router-link class="nav-link" to="/home">
            <span class="navbar-brand">UsedNapkin Restaurant</span>
        </router-link>
        <button class="navbar-toggler" type="button" @click="changeIsNavShow">
            <span class="navbar-toggler-icon"></span>
        </button>
        <router-link class="nav-link" to="/home">Home</router-link>
        <router-link class="nav-link" to="/about">About</router-link>
        <router-link class="nav-link" to="/tables">Tables</router-link>   
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

</style>