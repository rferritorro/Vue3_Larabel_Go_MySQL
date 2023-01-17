<template>
    <div class="login-wrap">
        <div class="login-html">
            <input id="tab-1" type="radio" name="tab" class="sign-in" checked><label for="tab-1" class="tab">Sign In</label>
            <input id="tab-2" type="radio" name="tab" class="sign-up"><label for="tab-2" class="tab" v-on:click="go_register()">Sign Up</label>
            <div class="login-form">
                <div class="sign-in-htm">
                    <div class="group">
                        <label for="user" class="label"><strong>Username</strong></label>
                        <input id="user" type="text" class="input" v-model="state.login.username" v-on:keyup="submit_login()" required><br>
                        <span style="color:red">{{state.username_error}}</span><br>
                    </div>
                    <div class="group">
                        <label for="pass" class="label"><strong>Password</strong></label>
                        <input id="pass" type="password" class="input bg-light" data-type="password" v-model="state.login.password" required><br>
                        <span style="color:red">{{state.passwd_error}}</span><br>
                    </div>
                    <div class="group">
                        <input type="button" class="button" value="Sign In" @click="$emit('loginform',state.login)">
                    </div>
                    <div class="hr"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import { useRouter } from 'vue-router';
import { reactive } from 'vue'; //getCurrentInstance
import { useVuelidate } from '@vuelidate/core';
import { required, minLength } from '@vuelidate/validators';

export default {
    setup() {
        const router = useRouter();
        function go_register() {
            router.push({ name: "register" });
        }
        const state = reactive({
            login: { username: "", password: "" },
            error_login: { username: "", password: "" },
            //bounce: props.type,
        })
        const rules = {
            username: { required, minLength: minLength(5) },
            password: { required, minLength: minLength(6) },
        }

        state.error_login = useVuelidate(rules, state.login);


        function submit_login() {
            console.log(state.error_login.password.$invalid)
            if (state.error_login.username.$invalid != true) {
                state.username_error = "";
                if (state.error_login.password.$invalid != true) {
                    state.password_error = ""
					console.log(state.login)
                } else {
                    if (state.error_login.password.$model != "") {
                        state.password_error = "*password is invalid. Please min 6 characters";
                    } else {
                        state.password_error = "*password is required";
                    }
                }
            } else {
                if (state.error_login.username.$model != "") {
                    state.username_error = "*Username is invalid. Please min 5 characters";
                } else {
                    state.username_error = "*Username is required";
                }
            }
        }


        return { go_register, state, rules, submit_login }
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
	min-height:670px;
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