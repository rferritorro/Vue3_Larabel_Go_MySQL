<template>
    <Carousel class="carousel" :autoplay="4000" :wrap-around="true">
    <Slide v-for="img in imgs" :key="img">
        <div class="carousel__item">
            <img :src="img" alt="" class="img_carousel"/>
            <!-- <img src="../assets/img/banner.jpg" alt="" class="img_carousel"/> -->
        </div>
    </Slide>

    <!-- <template #addons>
      <Pagination />
    </template> -->
  </Carousel>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
export default {
    name: 'Autoplay',
    components: {
        Carousel,
        Slide,
        //Pagination,
    },
    setup() {
        //let imgs = ["/img/banner.b0a2d167.jpg", "/img/banner1.604aaf9e.jpg", "/img/banner22.7dd417e3.jpg", "/img/banner2.2c15c70a.jpg"];
        let imgs = ["http://cdn.shopify.com/s/files/1/0425/2699/8690/articles/Mesmerizing_Sushi_Gifs_Are_Making_Us_Hungry_7.gif?v=1652817877",
            "https://media.tenor.com/c5phRBtBTncAAAAC/sushiroll-shrimp.gif",
            
        "https://media.istockphoto.com/id/1053854126/es/foto/todo-lo-que-pueden-comer-sushi.jpg?s=612x612&w=0&k=20&c=PRQrCCl3bez_Pp_XmK1YJl4aq71VFe1EmaEmt2_kbLQ="
        ]
        
        return {imgs}
    }
}
</script>

<style>
    .img_carousel {
        width: 100%;
    }
</style>