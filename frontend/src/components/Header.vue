<template>
    <nav id="header_nav" class="header_nav">
        <img src="../assets/KAIZEN/2.png" @click="changeIsNavShow" />
        <div>
            <router-link class="nav-link" to="/home">
                <span class="span" title="HOME">Home</span>
            </router-link>
            <router-link class="nav-link" to="/about">
                <span class="span" title="ABOUT">About</span>
            </router-link>
            <router-link class="nav-link" to="/tables">
                <span class="span" title="TABLES">Table</span>
            </router-link>
            <router-link class="nav-link" to="/dashboard">
                <font-awesome-icon icon="fa-solid fa-user" title="DASHBOARD" size="2x" class="iconuser" />
            </router-link>
        </div>
    </nav>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
    setup() {
        const state = reactive({
            isNavShow: false
        })
        const navClass = computed(() => state.isNavShow ? "collapse navbar-collapse show" : "collapse navbar-collapse")
        const changeIsNavShow = () => {
            state.isNavShow = !state.isNavShow;
        }
        function menu_scrolled() {
            window.addEventListener('scroll', () => {
                let menu = document.getElementById("header_nav")
                if (window.scrollY > 80) {
                    menu.classList.remove("header_nav")
                    menu.classList.add("header_scroll_nav")
                } else {
                    menu.classList.add("header_nav")
                    menu.classList.remove("header_scroll_nav")
                }
            })
        }

        return { state, changeIsNavShow ,menu_scrolled, navClass };
    }

}

</script>

<style>
@font-face {
    font-family: "Chinese-letter";
    src: url("../assets/letter_style/Tecnojap.ttf");
}

img {
    width: 5.5%;
}

.header_nav {
    height: 100px;
    position: absolute;
    z-index: 101;
    width: 97%;
}

.header_scroll_nav {
    /* background-color: #17191b; */
    background-image: url("../assets/img/footer.jpg");
    border-radius: 50px;
    opacity: 0.5;
    height: 100px;
    position: fixed;
    z-index: 101;
    width: 97%;
}

.header_scroll_nav:hover {
    opacity: 1;
}

.header_scroll_nav img {
    display: inline-block;
    padding: 0.5%;
    border-radius: 50px;
}

.header_scroll_nav div {
    float: right;
    width: 40%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.header_scroll_nav div * {
    padding: 0.5%;
    padding-left: 5.5%;
    color: white;
    font-family: Chinese-letter;
    font-size: 25px;
}

.header_nav img {
    display: inline-block;
    padding: 0.5%;
}

.header_nav div {
    float: right;
    width: 40%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.header_nav div * {
    color: rgb(232, 25, 25);
    font-family: Chinese-letter;
    font-size: 25px;
}
</style>