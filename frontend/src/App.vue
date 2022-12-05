<template>
  <!-- <img class="background" src="./assets/img/backend.jpg"/> -->
  <img class="background" src="./assets/img/backend1.jpg"/>
  <div class="body_div">
    <Header />
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';


export default {
  components  : { Header, Footer }
}
</script>

<style>
  div.body_div {
    margin: 0% 1.5%;
    height: 1500px;
    z-index: 100;
  } 
  img.background {
    width: 100%;
    height: 100%;
    margin: 0%;
    opacity: 1;
    z-index: 0;
    position: fixed;
  }
</style>