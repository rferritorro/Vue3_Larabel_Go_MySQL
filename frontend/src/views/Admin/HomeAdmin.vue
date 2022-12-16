<template>
    <div class="card card-body div_homeadmin">
        <h2 class="homeadmin_h2">HOME ADMIN</h2>
        <div class="form-group">
            <button type="button" class="btn btn-primary m-1" @click="$router.replace({path: '/dashboard/menu/add'})">ADD_MENU</button>
            <button type="button" class="btn btn-primary m-1" @click="$router.replace({path: '/dashboard/reserved'})">RESERVATIONS</button>
        </div>
        <router-view></router-view>
        <Menu class="menu_component"></Menu>
    </div>
</template>

<script>
import Menu from '../../components/Admin/MenuAdmin'
export default {
    components: { 
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
    .div_homeadmin {
        background-image: url("../../assets/img/fondo_white_admin.jpg");
    }
    .homeadmin_h2 {
        margin-top: 5%;
        color: black
    }

</style>