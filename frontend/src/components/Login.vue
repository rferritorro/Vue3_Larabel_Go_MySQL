<template>
    <div>
        <form>
            <input type="text" name="name" id="name"><br>
            <input type="password" name="password" id="password"><br>
            <button type="submit">Enviar</button>
        </form>
        <button v-on:click="go_register()">Register</button>
    </div>
</template>
<script>

import { useRouter } from 'vue-router';

export default {
    setup() {        
        const router = useRouter();
        function go_register() {

            router.push({ name:"register"});            

        }
        return {go_register}
    }
}
</script>