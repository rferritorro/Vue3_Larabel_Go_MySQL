<template>
    <div class="filter_border">
        <h2>Filters</h2>
        <input type="checkbox" v-model="input_filter_1" @click="checkbox_submit(1, 'reserved')"/>
        Tables Reserved
        <input type="checkbox" v-model="input_filter_2" @click="checkbox_submit(0, 'not_reserved')"/>
        Tables Not Reserved
        <p></p>
        <button @click="$emit('filters',state.tables)">
            <font-awesome-icon icon="fa-solid fa-search" size="2x" />
        </button>&nbsp;
        <button @click="$emit('closefilters')">
            <font-awesome-icon icon="fa-solid fa-xmark" size="2x" />
        </button>
        
        <!-- <button @click="$emit('searches',state.menu)">
            <font-awesome-icon icon="fa-solid fa-search" size="2x" />
        </button> -->
        
    </div>
</template>

<script>
import { ref, reactive,defineComponent } from 'vue'
import {useFilter} from '../composables/useFilters'
import { useRouter } from 'vue-router';

export default defineComponent({
    props: ['tables_reserved']
    ,
    setup(props) {
        window.scroll({
            top: 0
        })
        
        // const route = useRoute();
        const router = useRouter();

        const state = reactive({
            tables: useFilter(),
            prop: props
        })

        let input_filter_1 = ref("");
        let input_filter_2 = ref("");
        //const complete_menus = 
       console.log(state.prop)
        
        function checkbox_submit(value, value2){
            console.log(value)
            state.tables = useFilter(value);

            const filter_url = btoa(JSON.stringify(value2));
            router.push({ path: `/dashboard/tables/${filter_url}` });
            
            // console.log(input_search.value)
            // console.log(state.menu);
        } 

        function click_menu() {

        }
    
       
        return {state, input_filter_1, input_filter_2, checkbox_submit, click_menu}
    }
    
})


</script>

<style>
    .filter_border {
        width: 20%;
        text-align: center;
        margin-left: 10%;
        padding: 5px;
        border-radius: 2px;
        background-color: aliceblue;
    }

</style>