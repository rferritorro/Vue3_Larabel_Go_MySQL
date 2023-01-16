<template>
    <div>
        <input type="text" class="search" v-model="input_search" placeholder="Search different menus..." v-on:keyup="search_submit()"/>
        <button @click="$emit('searches',state.menu)">
            <font-awesome-icon icon="fa-solid fa-search" size="2x" />
        </button>
        <div class="item complete_menu" v-for="complete_menu in filteredList()" :key="complete_menu">
            <ul class="search" @click="click_menu()" v-if="input_search != ''" role="listbox">{{ complete_menu }}</ul>
        </div>
        <div class="item error" v-if="input && !filteredList().length">
            <p>No results found!</p>
        </div>
    </div>
</template>

<script>
import { ref, reactive,defineComponent } from 'vue'
import {useSearch} from '../composables/useSearch'
import { useRouter } from 'vue-router';

export default defineComponent({
    props: ['menus_nombres']
    ,
    setup(props) {
        window.scroll({
            top: 0
        })
        
        // const route = useRoute();
        const router = useRouter();

        const state = reactive({
            menu: useSearch(),
            prop: props
        })

        let input_search = ref("");
        const complete_menus = ["TRADITIONAL", "CHILDREN", "PREMIUM", "STAR", "SPECIAL"];
        //const complete_menus = 
        function filteredList() {
            return complete_menus.filter((complete_menu) =>
                complete_menu.toLowerCase().includes(input_search.value.toLowerCase())
            );
        }
        
        function search_submit(){
            state.menu = useSearch(input_search.value);
            console.log(input_search.value)
            const search_url = btoa(JSON.stringify(input_search.value));
            router.push({ path: `/dashboard/menu/${search_url}` });
            // setTimeout(() => {
            // }, 9000);
        } 

        function click_menu() {

        }
    
       
        return {state, complete_menus, filteredList, input_search, search_submit, click_menu}
    }
    
})


</script>

<style>
    .search {
        width: 20%;
        text-align: center;
        margin-left: 40%;
        border-radius: 2px;
    }

</style>