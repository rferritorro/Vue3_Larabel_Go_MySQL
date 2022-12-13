<template>
   <div class="container">
    <!--PROVISIONAL A PILLAR DATOS POR GO-->
        <div class="div1">
            <img class="menu_img" src="../assets/img/children_menu.jpg"/>
        </div>
        <div class="div2">
            <img class="menu_img" src="../assets/img/premium_menu.jpg"/>
        </div>
        <div class="div3">
            <img class="menu_img" src="../assets/img/special_menu.jpg"/>
        </div>
        <div class="div4">
            <img class="menu_img" src="../assets/img/star_menu.jpg"/>
        </div>
        <div class="div5">
            <img class="menu_img" src="../assets/img/traditional_menu.jpg"/>
        </div>
   </div>
</template>

<script>

export default {
    setup() {
        
    }
}
</script>

<style>
    .container {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    .div1, .div2, .div3, .div4, .div5 {
        width: 60%; 
        border: 2px double black;
        border-radius: 2%;
        padding: 1%;
        margin-top: 2%;
    } 
    
</style>