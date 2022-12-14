<template>
    <Carousel></Carousel>
    <div class="card card-body div_menu">
        <div id="menu_ids" class="menus">
            <h1 class="h1_menu" title="MENU">Menu:</h1>
            <span class="information">
                Buffet Menu: 
            </span><p></p>
            <span class="information">
                From 1:00 p.m. to 4:30 p.m. / From 8:00 p.m. to 12:00 a.m.
            </span>
            <Menu class="menu_component"></Menu>
        </div>
    </div>
    
    
</template>

<script>
import Carousel from '../components/Carousel'
import Menu from '../components/Menu'
//import Constant from '../Constant';
// import { reactive, computed } from 'vue'
// import { useStore } from 'vuex'
export default {
    components: { 
        Carousel,
        Menu
     },
     setup() {
        window.scroll({
            top: 0
        })
        // const store = useStore();
        // const state = reactive({ 
        //     menuList : computed(() => store.getters["menu/getAllMenus"]) 
        // });
        // store.dispatch("menu/" + Constant.INITIALIZE_ALLMENUS);
        // console.log(state.menuList)

        // return { state }

     }
}
</script>

<style>
    .card {
        margin: 0;
    }
    .information {
        color: beige;
        text-align: center;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    .h1_menu {
        color: beige;
        text-align: center;
        font-family: "Chinese-letter";
        src: url("../assets/letter_style/Tecnojap.ttf");
    }
    .div_menu {
        width: 100%;
        background-image: url("../assets/img/home_minimal.jpg");
        margin-top: 5%;
        margin-bottom: 5%;
    }
    .card img {
        width: 100%;
    }

    .menu_component {
        margin-top: 2%;
    }

</style>