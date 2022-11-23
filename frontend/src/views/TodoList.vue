<template>
    <div style="mt-2">
        <div class="row">
            <div class="col p-3">
                <router-link class="btn btn-primary" to="/tables/add">ADD TABLES</router-link>
            </div>
        </div>
        <div class="card card-default card-borderless">
        <div class="card-body">
            <div class="row">
                <div class="col">
                    <ul class="list-group">
                        <TodoItem v-for="todoitem in state.todolist" :key="todoitem.id" :todoitem="todoitem" />
                    </ul>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import Constant from '../Constant';
import TodoItem from '../components/TodoItem';
import { reactive, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';
import CategoryService from "@/services/CategoryService"

export default {
    components : { TodoItem },
    setup() {
        console.log(CategoryService.getAll())
        const store = useStore();
        const router = useRouter();

        const state = reactive({ 
            todolist : computed(()=>store.state.todolist ) 
        });

        const goAddTodo = () => {
            store.dispatch(Constant.INITIALIZE_TODOITEM);
            router.push({ name:"addTodo" });
        }

        return { state, goAddTodo }
    }
}
</script>

<style>

</style>