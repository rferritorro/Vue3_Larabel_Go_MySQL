<template>
    <div class="card card-body div_about h-100">
        <h1 class="about_h2 text-center">Nosotros</h1>
        <div class="d-flex">
            <div class="text-white">
                <p> Somos un restaurante japonés tradicional ubicado en el corazón de la ciudad.</p>
                <p> Ofrecemos una amplia variedad de platos auténticos japoneses, desde sushi y sashimi hasta ramen y tempura. </p>
                <p> Nuestros chefs son expertos en la cocina japonesa y utilizan solo ingredientes frescos y de alta calidad. </p>
                <p> Además, ofrecemos un ambiente acogedor y un servicio amable para que pueda disfrutar de una experiencia culinaria única.</p> 
                <p> ¡Esperamos darle la bienvenida pronto en nuestro restaurante!</p>
            </div>
            <div class="w-50">
                <h3 class="text-white text-center">Programadores</h3>
                <div class="d-flex w-100 justify-content-around">
                    <div class="card" style="width: 18rem;">
                        <img src="https://api.dicebear.com/5.x/adventurer-neutral/svg?seed=monchi" class="card-img-top" alt="...">
                        <div class="card-body text-center">
                            <p class="card-text">Rafa Ferri Torró</p>
                        </div>
                    </div>
                    <div class="card" style="width: 18rem;">
                        <img src="https://api.dicebear.com/5.x/adventurer-neutral/svg?seed=mioskin" class="card-img-top" alt="...">
                        <div class="card-body text-center">
                            <p class="card-text">Sergi Biosca Beneyto</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div class="mt-5 w-100 h-auto background-workers">
            <h3 class="text-white text-center">Trabajadores</h3>
            <div class="d-flex justify-content-around mt-4 flex-wrap w-100">
                <img class="w-25 m-4" v-for="(value, index) in data" :src="value.src" v-bind:key="index" alt="avatar"/>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {

    setup() {
        const data = ref([
            {src:"https://api.dicebear.com/5.x/adventurer-neutral/svg?seed=conchi"},
            {src:"https://api.dicebear.com/5.x/adventurer-neutral/svg?seed=paco"},
            {src:"https://api.dicebear.com/5.x/adventurer-neutral/svg?seed=nacho"},
        ])
        const busy = ref(false)
        const count = ref(0);
        const max_screen = ref(300)
        function loadMore() {
            busy.value = true;
            setTimeout(() => {
                for (var i = 0, j = 3; i < j; i++) {
                    data.value.push({ src: "https://api.dicebear.com/5.x/adventurer-neutral/svg?seed=user"+count.value++ });
                }
            busy.value = false;
            }, 1000);
        }

        window.addEventListener('scroll', () => {
            
            let bottomOfWindow = document.documentElement.scrollTop > max_screen.value
            if (bottomOfWindow) {
                max_screen.value=max_screen.value+300
                console.log("entra")
                loadMore()
            }
        });

        
        window.scroll({
            top: 0
        })
        return {loadMore, data}
    }

}
</script>

<style>
    .div_about {
        background-color: transparent;
        position: relative;
        top: 15%;
        background-image: url("../assets/img/home_minimal.jpg");
    }

    .background-workers {
        background-color: transparent;
        background-image: url("../assets/img/home_minimal.jpg");
    }
    .about_h2 {
        margin-top: 5%;
        color: beige
    }

</style>