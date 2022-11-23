<template>
  <div class="container">
    <div class="row">
      <div class="col p-3">
        <h2>UPDATE TABLE</h2>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="form-group">
          <label htmlFor="todo">NAME :</label>
          <input type="text" class="form-control" v-model="state.todoitemlocal.todo" />
        </div>
        <div class="form-group">
            <label htmlFor="desc">DESCR :</label>
            <textarea class="form-control" rows="3" id="desc" v-model="state.todoitemlocal.desc"></textarea>  
        </div>
        <div class="form-group">
            <label htmlFor="desc">CHECK : </label>&nbsp;
            <input type="checkbox" v-model="state.todoitemlocal.done" />   
        </div>
        <div class="form-group">
            <button type="button" class="btn btn-primary m-1" @click="updateTodo">UPDATE</button>
            <button type="button" class="btn btn-primary m-1" @click="cancel">CANCEL</button>
        </div>
      </div>
    </div>
  </div> 
</template>

<script>
import Constant from '../Constant';
import { reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router';

export default {
    setup() {
        const store = useStore();
        const router = useRouter();
        const currentRoute = useRoute();

        const todoitem = store.state.todolist.find((item)=> item.id === currentRoute.params.id)
        console.log
        const state = reactive({ 
            todoitemlocal : { ...todoitem } 
        });

        const updateTodo = () => {
            router.push({ name:"todoList" });
            store.dispatch(Constant.UPDATE_TODO, { todoitem: state.todoitemlocal });
        }

        const cancel = () => {
            router.push({ name:"todoList"});
        }

        return { state, updateTodo, cancel };
    }
}
</script>

<style>

</style>