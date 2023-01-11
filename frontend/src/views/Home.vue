<template>
    <Carousel></Carousel>
    <div class="card card-body div_menu">
        <div id="menu_ids" class="menus">
            <Menu class="menu_component"></Menu>
        </div>
    </div> 
</template>

<script>
import Carousel from '../components/Carousel'
import Menu from '../components/Client/MenuClient'
export default {
    components: { 
        Carousel,
        Menu
     },
     setup() {
        window.scroll({
            top: 0
        })
     }
}
</script>

<style>
    .card {
        margin: 0;
    }
    .menu_component {
        margin-top: 2%;
    }
    .div_menu {
        width: 100%;
        background-image: url("../assets/img/home_minimal.jpg");
        margin-top: 5%;
        margin-bottom: 5%;
    }

</style>