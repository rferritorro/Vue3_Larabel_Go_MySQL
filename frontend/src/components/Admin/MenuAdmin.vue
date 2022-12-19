<template>
    <h1 class="h1_menu_admin" title="MENU">Menu:</h1>
    <p class="information1_admin">
        <router-link class="nav-link" to="/dashboard/menu/add">
            <button type="button" title="ADD MENU">
                <font-awesome-icon icon="fa-solid fa-plus" size="2x" />
            </button>
        </router-link>
    </p>
    <div class="containeradmin" v-for="allmenus in state.menuList.menu" :key="allmenus.id" :allmenus="allmenus.id">
        <div class="div1admin" v-if="allmenus.nombre != 'NOT SPECIFY'">
            <!-- <img class="menu_img" src="../../assets/img/premium_menu.jpg"/> -->
            <img class="menu_img" :src="allmenus.img" />
            <div class="infor_menuadmin">
                <span>For More Information:</span>
                <p>{{ allmenus.nombre }}</p>
                <p>{{ allmenus.descr }}</p>
                <span type="button" @click.stop="editMenu(allmenus.id)">
                    <font-awesome-icon icon="fa-solid fa-pen" title="EDIT MENU" size="2x" class="icon1" />
                </span>&nbsp;&nbsp;
                <span type="button" @click.stop="deleteMenu(allmenus.id)">
                    <font-awesome-icon icon="fa-solid fa-trash" title="DELETE MENU" size="2x" class="icon1" />
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import Constant from '../../Constant';
import { useStore } from 'vuex'
import { reactive, computed } from 'vue'
import { useRouter } from 'vue-router';
export default {
    components: {},
    setup() {
        const store = useStore();
        const router = useRouter();
        const state = reactive({ 
            menuList : computed(() => store.getters["menu/getAllMenus"]) 
        });
        store.dispatch("menu/" + Constant.INITIALIZE_ALLMENUS);
        console.log(state.menuList)
        const editMenu = (id) => {
            router.push({ name: 'updateMenu', params: { id } })
        }
        const deleteMenu = (id) => {
            store.dispatch("menu/" + Constant.DELETE_MENU, { id });
        }

        return { state, deleteMenu, editMenu }
    }
}
</script>

<style>
    .information1_admin {
        text-align: center;
    }
    .informationadmin {
        color: black;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    .h1_menu_admin {
        color: black;
        text-align: center;
        font-family: "Chinese-letter";
        src: url("../../assets/letter_style/Tecnojap.ttf");
    }
    
    .card img {
        width: 100%;
    }

    .containeradmin {
        width: 50%;
    }
    span {
        color: rgb(0, 0, 0);
    }

    .div1admin {
        width: 23%; 
        border: 2px double black;
        border-radius: 2%;
        padding: 1%;
        margin-top: 2%;
    }

    .infor_menuadmin {
        padding: 5%;
        margin-top: 2%;
        width: 100%;
        background-image: url("../../assets/img/fondo_white.jpg");
    }

    .menu_img:hover {
        opacity: 70%;
    }
</style>