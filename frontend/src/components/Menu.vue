<template>
   <div class="container" v-for="allmenus in state.menuList.menu" :key="allmenus.id" :allmenus="allmenus.id">
        <div class="div1" v-if="allmenus.nombre != 'NOT SPECIFY'">
            <!-- <img class="menu_img" src="../assets/img/traditional_menu.jpg"/> -->
            <img class="menu_img" :src="'/img/' + allmenus.img"/>
            <div class="infor_menu">
                <span>For More Information:</span>
                <p>{{allmenus.nombre}}</p>
            </div>
        </div>
   </div>
</template>

<script>
import Constant from '../Constant';
import { useStore } from 'vuex'
import { reactive, computed } from 'vue'
export default {
    
    setup() {
        const store = useStore();
        const state = reactive({ 
            menuList : computed(() => store.getters["menu/getAllMenus"]) 
        });
        store.dispatch("menu/" + Constant.INITIALIZE_ALLMENUS);
        console.log(state.menuList)

        return { state }
        
    }
}
</script>

<style>
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
        background-image: url("../assets/img/fondo_white.jpg");
    }
    
    .menu_img:hover {
        opacity: 70%;
    }
</style>