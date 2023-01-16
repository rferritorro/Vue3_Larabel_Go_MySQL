<template>
    <Carousel :carrousel="carrousel"></Carousel>
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
        const carrousel = [
            "http://cdn.shopify.com/s/files/1/0425/2699/8690/articles/Mesmerizing_Sushi_Gifs_Are_Making_Us_Hungry_7.gif?v=1652817877",
            "https://media.tenor.com/c5phRBtBTncAAAAC/sushiroll-shrimp.gif",
            "https://media.istockphoto.com/id/1053854126/es/foto/todo-lo-que-pueden-comer-sushi.jpg?s=612x612&w=0&k=20&c=PRQrCCl3bez_Pp_XmK1YJl4aq71VFe1EmaEmt2_kbLQ="
        ]
        window.scroll({
            top: 0
        })
        return {carrousel}
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