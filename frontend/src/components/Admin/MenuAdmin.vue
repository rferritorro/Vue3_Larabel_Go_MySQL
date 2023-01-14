<template>
    <Search @searches="menus_search" v-bind:menus_nombres="state.menuList.menu"/>
    <h1 class="h1_menu_admin" title="MENU">Menu:</h1>
    <p class="information1_admin">
        <router-link class="nav-link" to="/dashboard/menu/add">
            <button type="button" title="ADD MENU">
                <font-awesome-icon icon="fa-solid fa-plus" size="2x" />
            </button>
        </router-link>
    </p>
    <div v-if="state.menuSearch.length != 0">
        <div class="containeradmin_search" :key="state.menuSearch.id" :allmenus="state.menuSearch.id">
            <div class="div1admin_search">
                <!-- <img class="menu_img" src="../../assets/img/premium_menu.jpg"/> -->
                <img class="menu_img" :src="state.menuSearch.img" />
                <div class="infor_menuadmin">
                    <span>For More Information:</span>
                 
                    <p>{{ state.menuSearch.nombre }}</p>
                    <p>{{ state.menuSearch.descr }}</p>
                    <span type="button" @click.stop="editMenu(state.menuSearch.id)">
                        <font-awesome-icon icon="fa-solid fa-pen" title="EDIT MENU" size="2x" class="icon1" />
                    </span>&nbsp;&nbsp;
                    <span type="button" @click.stop="deleteMenu(state.menuSearch.id)">
                        <font-awesome-icon icon="fa-solid fa-trash" title="DELETE MENU" size="2x" class="icon1" />
                    </span>
                </div>
            </div>
        </div>
    </div>
    <button @click="passEvent(state.menuList.menu)">Click</button>
    <div v-if="state.menuSearch.length === 0" class="align_menu">
        <div class="containeradmin" v-for="allmenus in state.menuList.menu" :key="allmenus.id" :allmenus="allmenus.id">
            <div class="div1admin" v-if="allmenus.nombre != 'NOT SPECIFY'">
                <!-- <img class="menu_img" src="../../assets/img/traditional_menu.jpg"/> -->
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
    </div>
    
</template>
<script>
import Constant from '../../Constant';
import { useStore } from 'vuex'
import { reactive, computed, defineAsyncComponent } from 'vue'
import { useRouter } from 'vue-router';

export default {
    components: {
        Search: defineAsyncComponent(() =>
        import('../../components/Search')
        )
    },
    //state.menuList.menu.nombre
    methods: {
        passEvent (value){
            this.$emit('name',value)
        },
        
    },
    
    setup() {
        
        
        const store = useStore();
        const router = useRouter();
        const state = reactive({ 
            menuList : computed(() => store.getters["menu/getAllMenus"]),
            menuSearch : ""
        });
        store.dispatch("menu/" + Constant.INITIALIZE_ALLMENUS);
        console.log(state.menuList)
        const editMenu = (id) => {
            router.push({ name: 'updateMenu', params: { id } })
        }
        const deleteMenu = (id) => {
            store.dispatch("menu/" + Constant.DELETE_MENU, { id });
        }
        
        function menus_search (value){
            state.menuSearch = value;
            console.log(state.menuSearch)
        }
  
        
        return { state, deleteMenu, editMenu, menus_search }
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
    
   
    .menu_img {
        width: 20%;
        height: 20%;
    }

    .div1admin_search {
        border: 2px double black;
        border-radius: 2%;
        padding: 1%;
        margin-top: 2%;
        margin: 2%;
        text-align: center;
        width: 20%;
    }
    .containeradmin {
        width: 100%;
        margin-top: 4%;
    }
    .containeradmin {
        width: 100%;
        margin-top: 4%;
    }

    .align_menu {
        display: flex;
        justify-content: center;
        flex-flow: row nowrap;
        align-items: stretch;
   
    }

    .div1admin {
        border: 2px double black;
        border-radius: 2%;
        padding: 1%;
        margin-top: 2%;
        margin: 2%;
        text-align: center;
        width: 90%;
    }
    span {
        color: rgb(0, 0, 0);
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