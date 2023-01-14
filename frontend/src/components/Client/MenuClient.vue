<template>
    <h1 class="h1_menu" title="MENU">Menu:</h1>
    <p class="information">
        Buffet Menus:
    </p>
    <p class="information">
        From 1:00 p.m. to 4:30 p.m. / From 8:00 p.m. to 12:00 a.m.
    </p>
   <div class="container" v-for="allmenus in state.menuList.menu" :key="allmenus.id" :allmenus="allmenus.id">
        <div class="div1" v-if="allmenus.nombre != 'NOT SPECIFY'">
            <!-- <img class="menu_img" src="../../assets/img/star_menu.jpg"/> -->
            <img class="menu_img" :src="allmenus.img"/>
            <div class="infor_menu">
                <span>For More Information:</span>
                <p>{{allmenus.nombre}}</p>
                <p>{{allmenus.descr}}</p>
            </div>
        </div>
   </div>
</template>

<script>
import Constant from '../../Constant';
import { useStore } from 'vuex'
import { reactive, computed } from 'vue'
export default {
    components: {},
    setup() {
        const store = useStore();
        const state = reactive({ 
            menuList : computed(() => store.getters["menuclient/getAllMenusClient"]) 
        });
        console.log(state.menuList)
        store.dispatch("menuclient/" + Constant.INITIALIZE_ALLMENUS);

        return { state }
        
    }
}
</script>

<style>

    .information {
        color: beige;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    .h1_menu {
        color: beige;
        text-align: center;
        font-family: "Chinese-letter";
        src: url("../../assets/letter_style/Tecnojap.ttf");
    }
    
    .card img {
        width: 100%;
    }

    .container {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    span {
        color: rgb(0, 0, 0);
    }

    .div1 {
        width: 60%; 
        border: 2px double black;
        border-radius: 2%;
        padding: 1%;
        margin-top: 2%;
        display: flex;
        flex-direction: row;
    }

    .infor_menu {
        padding: 5%;
        margin-left: 15%;
        width: 100%;
        background-image: url("../../assets/img/fondo_white.jpg");
    }

    .menu_img:hover {
        opacity: 70%;
    }
</style>