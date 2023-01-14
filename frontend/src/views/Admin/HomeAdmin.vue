<template>
    <div class="card card-body div_admin2">
        <div class="div_homeadmin">
            <h2 class="homeadmin_h2">HOME ADMIN</h2>
            <div class="form-group">
                <!-- <button type="button" class="btn btn-primary m-1" @click="$router.replace({path: '/dashboard/menu/add'})">ADD_MENU</button> -->
                <button type="button" class="btn btn-primary m-1" @click="$router.replace({path: '/dashboard/reserved'})">RESERVATIONS</button>
                <button type="button" class="btn btn-primary m-1" @click="showMenuFunction()">MENUS</button>
                <button type="button" class="btn btn-primary m-1" @click="$router.replace({path: '/dashboard/tables'})">TABLES</button>
            </div>    
        </div>
       
        <div class="div_homeadmin2">
            <router-view></router-view>
            
            <!-- <font-awesome-icon icon="fa-solid fa-spinner" title="DELETE MENU" size="2x" class="icon1"/> -->
            <Suspense>
                <template #fallback>
                    <img src="../../assets/img/lazyload.gif" style="width: 25%; margin-left: 37.5%;"/>
                </template>
                <template #default>
                    <Menu class="menu_component" @name="onClick" v-if="state.showMenu === true"></Menu>
                </template>
            </Suspense>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent, reactive } from 'vue'
export default {
    components: { 
        Menu: defineAsyncComponent(() =>
            import('../../components/Admin/MenuAdmin')
        ),
       
    },
    methods: {
        onClick (value) {
            console.log(value);
        }
    },
    setup() {
        window.scroll({
            top: 0
        })
        const state = reactive({ 
            showMenu : false 
        });
        function showMenuFunction() {
            state.showMenu = true;
        }
        return {showMenuFunction, state}
    }

}
</script>

<style>
    .div_admin2 {
        background-color: transparent;
        border: none;
    }
    .div_homeadmin {
        background-image: url("../../assets/img/fondo_white_admin.jpg");
    }
    .div_homeadmin2 {
        margin-top: 2%;
    }
    .prueba {
        color: black;
    }
    .homeadmin_h2 {
        margin-top: 5%;
        padding-left: 2%;
        color: black
    }

</style>