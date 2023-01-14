<template>
    <div class="card card-body div_admin2">
        <div class="div_homeadmin2">
            <Suspense>
                <template #fallback>
                    <img src="../../../assets/img/lazyload.gif" style="width: 25%; margin-left: 37.5%;" />
                </template>
                <template #default>
                    <Tables class="tables_component" :listTables="state.tablesList.tables.filter(e=> e.place == list[selected])"></Tables>
                </template>
            </Suspense>
        </div>        
        <Pagination v-model="selected"></Pagination>
    </div>
</template>

<script>
import Constant from '../../../Constant';
import { reactive, computed, defineAsyncComponent, ref } from 'vue'
import { useStore } from 'vuex'

export default {
    components : { 
        Tables: defineAsyncComponent(() =>
            import('../../../components/Admin/All_Tables')
        ),
        Pagination: defineAsyncComponent(() =>
            import('../../../components/Pagination')
        ),
    },
    setup() {
        window.scroll({
            top: 0
        })
        const selected = ref(0);
        const list = [
            'First Floor',
            'Second Floor',
            'Terrace'
        ];
        const store = useStore();
        const state = reactive({ 
            tablesList : computed(() => store.getters["tables/getTables"]),
            
        });
        console.log(state.tablesList)
        
        store.dispatch("tables/" + Constant.INITIALIZE_ALLTABLES);   
       
        return { state, selected, list }
    }
}
</script>

<style>
    .reservation {
        background-image: url("../../../assets/img/fondo_white_admin.jpg");
    }
    .text_reservation {
        margin-top: 5%;
    }

</style>