<template>
  <nav class="bg-white" id="nav">
    <div class="container py-2 mx-auto px-10 flex flex-wrap items-center justify-between">

      <!-- BEGIN logo -->
      <div class="flex items-center">
        <img src="@/assets/imagenes/logo.png" class="h-14" />
      </div>
      <!-- END logo -->


      <!-- ENG Botón responsive -->
      <button id="bntResponsive"
        class="p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-white"
        data-collapse-toggle="mobile-menu" type="button" aria-controls="mobile-menu" aria-expanded="false">
        <svg id="iconOpen" class="text-black w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"></path>
        </svg>
        <svg id="iconClose" class="text-black hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"></path>
        </svg>
      </button>
      <!-- END Botón responsive -->


      <!-- BEGIN items adicionales -->
      <div class="hidden md:block md:w-auto w-full " id="mobile-menu">
        <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <li>
            <RouterLink to="/InicioPrincipal"
              class="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-lime-400 md:p-0 ">
              Inicio
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/BlogPrincipal"
              class="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-lime-400 md:p-0 ">
              Blog
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/ComunicatePrincipal"
              class="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-lime-400 md:p-0 ">
              COMUNICATE
            </RouterLink>
          </li>
          <li>
            <RouterLink  to="/ForosPrincipal"
              class="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-lime-400 md:p-0 ">
              FOROS
            </RouterLink>
          </li>

          <li>
            <div class="relative inline-block text-left">
              <button v-on:click="showOptions = !showOptions" type="button"
                class="flex w-full justify-center rounded-md bg-lime-800 px-3 py-1.0 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                id="menu-button" aria-expanded="true" aria-haspopup="true">
                Login
              </button>
              <div v-if="showOptions"
                class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
                role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div class="py-1" role="none">
                  <RouterLink to="/LoginPrincipal" v-if="user == 0" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem"
                    tabindex="-1" id="menu-item-0">Usuario</RouterLink>
                  <RouterLink to="/LoginAdmin" v-if="user == 0" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem"
                    tabindex="-1" id="menu-item-1">Admin</RouterLink>
                  <a  v-if="user" @click="cerrarSesion" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem"
                    tabindex="-1" id="menu-item-1">Cerrar sesion</a>
                </div>
              </div>
            </div>

          </li>
        </ul>
      </div>
      <!-- END items adicionales -->

    </div>
  </nav>
</template>


<script>
export default {
  beforeMount() {
    if (localStorage.getItem("user") == 1) {
      this.user = 1
    } 
  },
  data() {
    return {
      menuResponsive: null,
      btnOpen: null,
      btnClose: null,
      showOptions: false,
      user: 0
    };
  },
  mounted() {
    this.menuResponsive = document.getElementById("mobile-menu");
    this.btnOpen = document.getElementById("iconOpen");
    this.btnClose = document.getElementById("iconClose");

    const btnResponsive = document.getElementById("bntResponsive");
    btnResponsive.addEventListener("click", this.hideShow);
  },
  methods: {
    hideShow() {
      if (this.menuResponsive.classList.contains("hidden")) {
        this.menuResponsive.classList.remove("hidden");
        this.btnOpen.classList.add("hidden");
        this.btnClose.classList.remove("hidden");
      } else {
        this.menuResponsive.classList.add("hidden");
        this.btnClose.classList.add("hidden");
        this.btnOpen.classList.remove("hidden");
      }
    },
    cerrarSesion(){
      localStorage.setItem("user", 0)
      this.user = 0;
      this.$router.push('/');
    }
  }
};
</script>



 
