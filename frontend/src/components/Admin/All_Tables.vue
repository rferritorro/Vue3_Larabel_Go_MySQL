<template>
    <h1 class="h1_menu_admin" title="TABLES">Tables:</h1>
    <p class="information1_admin">
        <router-link class="nav-link" to="/dashboard/tables/add">
            <button type="button" title="ADD TABLE">
                <font-awesome-icon icon="fa-solid fa-plus" size="2x" />
            </button>
        </router-link>
    </p>
    <div class="align_menu">
        <div class="containeradmin" v-for="alltables in listTables" :key="alltables.id" >
            <div class="div1admin">
                <!-- <img class="menu_img" src="../../assets/img/traditional_menu.jpg"/> -->
                <img class="menu_img" :src="alltables.img" />
                <div class="infor_menuadmin">
                    <p>Table {{ alltables.id }}</p>
                    <p>{{ alltables.place }}</p>
                    <p>{{ alltables.reserved }}</p>
                    <span type="button" @click.stop="editMenu(alltables.id)">
                        <font-awesome-icon icon="fa-solid fa-pen" title="EDIT TABLE" size="2x" class="icon1" />
                    </span>&nbsp;&nbsp;
                    <span type="button" @click.stop="deleteMenu(alltables.id)">
                        <font-awesome-icon icon="fa-solid fa-trash" title="DELETE TABLE" size="2x" class="icon1" />
                    </span>
                </div>
            </div>
        </div>
    </div>
    <button type="button" class="btn btn-primary m-1" style="width: 10%; margin-top: 24%;" @click="$router.replace({path: '/dashboard'})">CANCEL</button>
</template>
<script>
import Constant from '../../Constant';
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';

export default {
    components: {
       
    },
    props: {
        listTables: Object
    },
    
    setup() {
        window.scroll({
            top: 0
        })
        const store = useStore();
        const router = useRouter();
       
        const editMenu = (id) => {
            router.push({ name: 'updateTables', params: { id } })
        }
        const deleteMenu = (id) => {
            store.dispatch("tables/" + Constant.DELETE_TABLES, { id });
        }

        
        return { deleteMenu, editMenu }
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