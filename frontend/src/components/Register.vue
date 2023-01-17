<template>
    <div class="login-wrap">
        <div class="login-html">
            <input id="tab-1" type="radio" name="tab" class="sign-in"><label for="tab-1" class="tab" v-on:click="go_login()">Sign In</label>
            <input id="tab-2" type="radio" name="tab" class="sign-up" checked><label for="tab-2" class="tab">Sign Up</label>
            <div class="login-form">
                <div class="sign-up-htm">
                    <div class="group">
                        <label for="user" class="label" >
                            <strong>
                                Username
                            </strong>
                        </label>
                        <input id="user" type="text" class="input" v-on:keyup="change_avatar(state.register.username)" v-model="state.register.username"  required>
                        <span style="color:red">{{state.username_error}}</span>
                    </div>
                    <div class="group">
                        <label for="pass" class="label">
                            <strong>
                                Email Address
                            </strong>
                        </label>
                        <input id="pass" type="text" class="input" v-model="state.register.email" v-on:keyup="submit_register()" required>
                        <span style="color:red">{{state.email_error}}</span>
                    </div>
                    <div class="group">
                        <label for="pass" class="label">
                            <strong>
                                Password
                            </strong>
                        </label> 
                        <input id="pass" type="password" class="input" data-type="password" v-model="state.register.password" v-on:keyup="submit_register()" required>
                        <span style="color:red">{{state.password_error}}</span>
                    </div>
                    <div class="group">
                        <label for="pass" class="label">
                            <strong>
                                Confirm Password
                            </strong>
                        </label>
                        <input id="pass" type="password" class="input" data-type="password" v-model="state.confirm.confirm_password" v-on:keyup="submit_register()" required>
                        <span style="color:red">{{state.confirm_password_error}}</span><br>
                    </div>
                    <div class="group">
                        <input type="checkbox" name="default_avatar_check" id="default_avatar_check" v-on:change="change_avatar(state.register.username)" v-model="check_default_avatar"><span>Default Avatar</span>
                        <br>
                        <!-- <img class="w-25" :src="default_avatar" alt="avatar" v-on:change="state.register.avatar=default_avatar"> -->
                        <img class="w-25" :src="state.register.avatar" alt="avatar"/>
                    </div>
                    <div class="group">
                        <input type="button" class="button" value="Sign Up" @click="$emit('registerform',state.register)">
                    </div>
                    <div class="hr"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import { ref} from 'vue';
import { useRouter } from 'vue-router';
import { reactive } from 'vue'; //getCurrentInstance
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';
//import { createToaster } from "@meforma/vue-toaster";
export default {
 
    setup() { 
        
        const router = useRouter();
        const state = reactive({
                register: { username: "", password: "", email: "",  avatar: ""  },
                error_register: { username: "", email: "", password: "", confirm_password: "" },
                confirm: {confirm_password: ""}
                //bounce: props.type,
        })
        const url_avatar_default= "https://api.dicebear.com/5.x/adventurer-neutral/svg?seed=Baby&flip=true&backgroundColor=d1d4f9&eyebrows[]&eyes[]&glasses=variant01&glassesProbability=100&mouth[]"
        state.register.avatar = ref(url_avatar_default)
        const check_default_avatar = ref(false)
        // const toaster = createToaster({
        //  position: "top-right"
        // });
        function change_avatar(username) {
            if (!check_default_avatar.value) {
                state.register.avatar="https://api.dicebear.com/5.x/adventurer-neutral/svg?seed="+username
                
            } else {
                state.register.avatar=url_avatar_default
            }
        }
        function go_login() {
            router.push({ name:"login"});            
        }

        const rules = {
                username: { required, minLength: minLength(5) },
                email: { required, email },
                password: { required, minLength: minLength(6) },
                confirm_password: { required, minLength: minLength(6) },
        }
        state.error_register = useVuelidate(rules, state.register);
        
        function submit_register() {
            console.log(state.error_register.password.$invalid)
            if (state.error_register.email.$invalid == true) {
                    state.email_error = "*Email format is incorrect and requierd";
                    //validate = false;
            } else {
                    state.email_error = "";
            }
            if (state.error_register.password.$invalid != true) {
                state.password_error = ""
                    if (state.error_register.confirm_password.$model == "") {
                        state.confirm_password_error = "*Confirm password please";
                    }else if (state.register.password != state.confirm.confirm_password) {
                        state.confirm_password_error = "*Two passwords there are not the same";
                    }else {
                        state.confirm_password_error = "";
                    }
            } else {
                if (state.error_register.password.$model != "") {
                    state.password_error = "*password is invalid. Please min 6 characters";
                } else {
                    state.password_error = "*password is required";
                }
                //state.password_error = "a";
                // const data = { username: state.register.username, password: state.register.password };
                console.log(state.register);
                //emit('onSubmit', data);
            }
            if (state.error_register.username.$invalid != true) {
                state.username_error = "";
            } 
            else {
                if (state.error_register.username.$model != "") {
                    state.username_error = "*Username is invalid. Please min 5 characters";
                } else {
                    state.username_error = "*Username is required";
                }
            }
        }
        
        return {
            check_default_avatar,
            change_avatar,
            go_login,
            state,
            rules,
            submit_register
        }
    }
}
</script>
<style>
body{
	margin:0;
	color:#000000;
	background:#c8c8c8;
	font:600 16px/18px 'Open Sans',sans-serif;
}
*,:after,:before{box-sizing:border-box}
.clearfix:after,.clearfix:before{content:'';display:table}
.clearfix:after{clear:both;display:block}
a{color:inherit;text-decoration:none}

.login-wrap{
	width:100%;
	margin:auto;
	max-width:525px;
	min-height:700px;
	position:relative;
	background:url(https://cdn4.vectorstock.com/i/1000x1000/51/38/sushi-seamless-background-vector-22655138.jpg) no-repeat center;
	box-shadow:0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19);
}
.login-html{
	width:100%;
	height:100%;
	position:absolute;
	padding:90px 70px 50px 70px;
    background:rgba(209, 193, 193, 0.5);
}
.login-html .sign-in-htm,
.login-html .sign-up-htm{
	top:0;
	left:0;
	right:0;
	bottom:0;
	position:absolute;
	transform:rotateY(180deg);
	backface-visibility:hidden;
	transition:all .4s linear;
}
.login-html .sign-in,
.login-html .sign-up,
.login-form .group .check{
	display:none;
}
.login-html .tab,
.login-form .group .label,
.login-form .group .button{
	text-transform:uppercase;
}
.login-html .tab{
	font-size:22px;
	margin-right:15px;
	padding-bottom:5px;
	margin:0 15px 10px 0;
	display:inline-block;
	border-bottom:2px solid transparent;
}
.login-html .sign-in:checked + .tab,
.login-html .sign-up:checked + .tab{
	color:rgb(0, 0, 0);
	border-color:#1161ee;
}
.login-form{
	min-height:345px;
	position:relative;
	perspective:1000px;
	transform-style:preserve-3d;
}
.login-form .group{
	margin-bottom:15px;
}
.login-form .group .label,
.login-form .group .input,
.login-form .group .button{
	width:100%;
	color:rgb(0, 0, 0);
	display:block;
    
}
.login-form .group .input,
.login-form .group .button{
	border:none;
	padding:15px 20px;
	border-radius:25px;
	background:rgba(255,255,255,.1);
}
.login-form .group input[data-type="password"]{
	text-security:circle;
	-webkit-text-security:circle;
}
.login-form .group .label{
	color:rgb(0, 0, 0);
	font-size:12px;
}
.login-form .group .button{
	background:#1161ee;
}
.login-form .group label .icon{
	width:15px;
	height:15px;
	border-radius:2px;
	position:relative;
	display:inline-block;
	background:rgba(255,255,255,.1);
}
.login-form .group label .icon:before,
.login-form .group label .icon:after{
	content:'';
	width:10px;
	height:2px;
	background:#fff;
	position:absolute;
	transition:all .2s ease-in-out 0s;
}
.login-form .group label .icon:before{
	left:3px;
	width:5px;
	bottom:6px;
	transform:scale(0) rotate(0);
}
.login-form .group label .icon:after{
	top:6px;
	right:0;
	transform:scale(0) rotate(0);
}
.login-form .group .check:checked + label{
	color:#fff;
}
.login-form .group .check:checked + label .icon{
	background:#1161ee;
}
.login-form .group .check:checked + label .icon:before{
	transform:scale(1) rotate(45deg);
}
.login-form .group .check:checked + label .icon:after{
	transform:scale(1) rotate(-45deg);
}
.login-html .sign-in:checked + .tab + .sign-up + .tab + .login-form .sign-in-htm{
	transform:rotate(0);
}
.login-html .sign-up:checked + .tab + .login-form .sign-up-htm{
	transform:rotate(0);
}

.hr{
	height:2px;
	margin:60px 0 50px 0;
	background:rgba(255,255,255,.2);
}
.foot-lnk{
	text-align:center;
}
</style>