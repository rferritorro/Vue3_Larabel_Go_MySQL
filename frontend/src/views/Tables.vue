<template>
    <div class="card card-body tables_div">
        <div class="title_Tables">
            <h2 class="tables_h2">Tables</h2>
            <span class="tables_h2">FILTERS</span>
        </div>
        <div class="tables_infor">
            <AllTables v-for="alltables in state.tableList.tables" :key="alltables.id" :alltables="alltables" class="alltables"></AllTables>
        </div>
    </div>
</template>

<script>
import Constant from '../Constant';
import { reactive, computed } from 'vue'
import { useStore } from 'vuex'
import AllTables from '../components/All_Tables'
export default {
    components: { AllTables },
    setup() {
        window.scroll({
            top: 0
        })
        const store = useStore();
        const state = reactive({ 
            tableList : computed(() => store.getters["tables/getTables"]) 
        });
        store.dispatch("tables/" + Constant.INITIALIZE_ALLTABLES);
        console.log(state.tableList)

        return { state }
    }

}
</script>

<style>
    .tables_div {
        background-image: url("../assets/img/home_minimal.jpg");
    }
    .tables_infor, .title_Tables {
        margin-top: 5%;
    }
    .tables_h2 {
        color: beige
    }

</style>