<template>
    <div class="card card-body div_admin2">       
        <div class="div_homeadmin2">
                       
            <!-- <font-awesome-icon icon="fa-solid fa-spinner" title="DELETE MENU" size="2x" class="icon1"/> -->
            <Suspense>
                <template #fallback>
                    <img src="../../../assets/img/lazyload.gif" style="width: 25%; margin-left: 37.5%;"/>
                </template>
                <template #default>
                    <Menu class="menu_component" :listMenu="state.menuList.menu"></Menu>
                </template>
            </Suspense>
        </div>
        
    </div>
</template>

<script>
import Constant from '../../../Constant';
import { reactive, computed, defineAsyncComponent } from 'vue'
import { useStore } from 'vuex'

export default {
    components: { 
        Menu: defineAsyncComponent(() =>
            import('../../../components/Admin/MenuAdmin')
        ),
       
    },
    setup() {
        window.scroll({
            top: 0
        })
        const store = useStore();
        const state = reactive({ 
            menuList : computed(() => store.getters["menu/getAllMenus"]),
        });
        store.dispatch("menu/" + Constant.INITIALIZE_ALLMENUS);
        console.log(state.menuList)
        return {state}
    }

}
</script>

<style>
    .div_admin2 {
        background-color: transparent;
        border: none;
    }
    .div_homeadmin2 {
        margin-top: 2%;
    }
    .prueba {
        color: black;
    }

</style>