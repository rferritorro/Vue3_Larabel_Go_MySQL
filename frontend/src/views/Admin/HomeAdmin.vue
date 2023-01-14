<template>
    <div class="card card-body div_admin2">
        <div class="div_homeadmin" >
            <h2 class="homeadmin_h2">HOME ADMIN</h2>
            <div class="form-group">
                <!-- <button type="button" class="btn btn-primary m-1" @click="$router.replace({path: '/dashboard/menu/add'})">ADD_MENU</button> -->
                <button type="button" class="btn btn-primary m-1" @click="$router.replace({path: '/dashboard/reserved'})">RESERVATIONS</button>
                <button type="button" class="btn btn-primary m-1" @click="$router.replace({path: '/dashboard/menu/list'})">MENUS</button>
                <button type="button" class="btn btn-primary m-1" @click="$router.replace({path: '/dashboard/tables'})">TABLES</button>
            </div>    
        </div>
        <router-view></router-view>
    </div>
</template>

<script>

export default {
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