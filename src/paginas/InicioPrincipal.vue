<script setup>
import NavPrincipal from '../components/principal/NavPrincipal.vue'
import PiePagina from '../components/principal/PiePagina.vue'
</script>
<template>
  <NavPrincipal v-if="$route.path !== '/DashboardPrincipal'" />
  <div  class="w-screen h-screen flex justify-center">
    <div id="slider" class="w-4/5 h-screen">
      <figure >
        <img src="https://pixabay.com/static/uploads/photo/2014/11/22/00/51/camera-541213_960_720.jpg" alt="">
        <img src="https://pixabay.com/static/uploads/photo/2016/03/10/16/13/camera-1248682_960_720.jpg" alt="">
        <img src="https://pixabay.com/static/uploads/photo/2015/04/07/14/27/camera-711025_960_720.jpg" alt="">
        <img src="https://pixabay.com/static/uploads/photo/2014/09/23/20/13/photography-458050_960_720.jpg" alt="">
        <img src="https://pixabay.com/static/uploads/photo/2014/09/23/20/13/photography-458050_960_720.jpg" alt="">
      </figure>
    </div>
  </div>
  <hr class="w-8/12 h-8/12 m-auto border-gray-200  dark:border-gray-700 mt-5 mb-10">
  <PiePagina v-if="$route.path !== '/DashboardPrincipal'" />
</template>

<style>
body {
  margin: 0;
}

div#slider {
  overflow: hidden;
}

/* las imágenes no van a salir del márgen de la pantalla*/
div#slider figure img {
  width: 30%;
  float: left;
}

div#slider figure {
  position: relative;
  width: 500%;
  display: flex;
  margin: 0;
  left: 0;
  text-align: left;
  font-size: 0;
  animation: 30s slidy infinite;
  /*el movimiento se va a mantener de forma indefinida -infinito-*/
}


/*esta parte del código define el movimiento de las imágenes a la izquierda*/
@keyframes slidy {
  0% {
    left: 0%;
  }

  20% {
    left: 0%;
  }

  25% {
    left: -100%;
  }

  45% {
    left: -100%;
  }

  50% {
    left: -200%;
  }

  70% {
    left: -200%;
  }

  75% {
    left: -300%;
  }

  95% {
    left: -300%;
  }

  100% {
    left: -400%;
  }
}</style>



