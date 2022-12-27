<template>
    <div class="card card-body div_admin2">
        <div class="div_homeadmin">
            <h2 class="homeadmin_h2">HOME ADMIN</h2>
            <div class="form-group">
                <button type="button" class="btn btn-primary m-1" @click="$router.replace({path: '/dashboard/menu/add'})">ADD_MENU</button>
                <button type="button" class="btn btn-primary m-1" @click="$router.replace({path: '/dashboard/reserved'})">RESERVATIONS</button>
            </div>    
        </div>
        <div class="div_homeadmin2">
            <router-view></router-view>
            <!-- <font-awesome-icon icon="fa-solid fa-spinner" title="DELETE MENU" size="2x" class="icon1"/> -->
            <Suspense>
                <template #fallback>
                    <!-- <h1 class="prueba">LOADING...</h1> -->
                    <img src="../../assets/img/lazyload.gif" style="width: 25%; margin-left: 37.5%;"/>
                </template>
                <template #default>
                    <Menu class="menu_component"></Menu>
                </template>
            </Suspense>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
//import Menu from '../../components/Admin/MenuAdmin'
export default {
    components: { 
        Menu: defineAsyncComponent(() =>
            import('../../components/Admin/MenuAdmin')
        )
     },
    setup() {
        window.scroll({
            top: 0
        })
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