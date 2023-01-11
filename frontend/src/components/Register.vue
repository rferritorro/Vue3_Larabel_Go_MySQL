<template>
    <div>
        <form>
            <input type="text" name="name" id="name" placeholder="username" v-on:keyup="change_avatar(username)" v-model="username"><br>
            <input type="email" name="email" id="email" placeholder="email"><br>
            <input type="password" name="password" id="password" placeholder="password"><br>
            <input type="password" name="confirm_password" id="confirm_password" placeholder="confirm password"><br>
            <input type="checkbox" name="default_avatar_check" id="default_avatar_check" v-on:change="change_avatar(username)" v-model="check_default_avatar"><span>Default Avatar</span>
            <img class="w-25" :src="default_avatar" alt="avatar">
            <button type="submit">Enviar</button>
        </form>
        <button v-on:click="go_login()">Login</button>
    </div>
</template>
<script>

import { ref} from 'vue';
import { useRouter } from 'vue-router';

export default {
 
    setup() { 
        
        const router = useRouter();
        const url_avatar_default= "https://api.dicebear.com/5.x/adventurer-neutral/svg?seed=Baby&flip=true&backgroundColor=d1d4f9&eyebrows[]&eyes[]&glasses=variant01&glassesProbability=100&mouth[]"
        const default_avatar = ref(url_avatar_default)
        const check_default_avatar = ref(false)
        function change_avatar(username) {
            if (!check_default_avatar.value) {
                default_avatar.value="https://api.dicebear.com/5.x/adventurer-neutral/svg?seed="+username
            } else {
                default_avatar.value=url_avatar_default
            }
            }
        function go_login() {
            router.push({ name:"login"});            
        }
        return {default_avatar,check_default_avatar,change_avatar,go_login}
    }
}
</script>