<template>
    <Carousel class="carousel" :autoplay="4000" :wrap-around="true">
    <Slide class="" style="margin-top:100px" v-for="img in carrousel" :key="img">
        <div class="carousel__item">
            <img class="" style="width:800px" :src="img" alt="" />
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
    props: {
        carrousel: Array
    },
    setup() {

    }
}
</script>