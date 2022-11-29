<template>
    <nav class="header_nav">
        <router-link class="nav-link" to="/home">
            <span class="name">UsedNapkin Sushi Experience</span>
        </router-link>
        <!-- <button class="navbar-toggler" type="button" @click="changeIsNavShow">
            <span class="navbar-toggler-icon"></span>
        </button> -->
        <router-link class="nav-link" to="/home">
            <span class="span">Home</span>
        </router-link>
        <router-link class="nav-link" to="/about">
            <span class="span">About</span>
        </router-link>
        <router-link class="nav-link" to="/tables">
            <span class="span">Tables</span>
        </router-link>   
    </nav>
</template>
<style>
.span {
    color: rgb(34, 32, 29);
}
.name {
    font-size: 115%;
    color: black;
}
.name:hover, .span:hover {
    color: #ead1b8;
}
.header_nav {
    background-color: #b88d61;
    display: flex;
    flex-direction: row;
    padding: 0.5%;
}
</style>

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


