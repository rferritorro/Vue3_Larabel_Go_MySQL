<template>
    <div class="card card-body tables_div w-100">
        <div class="tables_infor">
            <AllTables :alltables="state.tableList.tablesclient.filter(e=> e.place == list[selected])" class="alltables"></AllTables>
        </div>
        <Pagination v-model="selected"></Pagination>
    </div>
</template>

<script>
import Constant from '../../../Constant';
import { reactive, computed, ref } from 'vue'
import { useStore } from 'vuex'
import Pagination from '../../../components/Pagination'
import AllTables from '../../../components/Client/All_Tables'

export default {
    components: { AllTables, Pagination },
    setup() {
        const selected = ref(0);
        const list = [
            'First Floor',
            'Second Floor',
            'Terrace'
        ];
        
        window.scroll({
            top: 0
        })
        const store = useStore();
        const state = reactive({
            tableList: computed(() => store.getters["tablesclient/getTables"])
        });        
        
        store.dispatch("tablesclient/" + Constant.INITIALIZE_ALLTABLES);
        //console.log(state.tableList)
        return { state, selected, list }
    }

}
</script>

<style>
.tables_div {
    background-color: transparent;
    position: relative;
    top: 15%;
    background-image: url("../../../assets/img/home_minimal.jpg");
}

.tables_infor {
    height: 1000px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.title_Tables {
    margin-top: 5%;
}

.tables_h2 {
    color: beige
}
</style>