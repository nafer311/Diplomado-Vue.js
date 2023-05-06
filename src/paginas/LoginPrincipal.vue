<script setup>
import NavPrincipal from '../components/principal/NavPrincipal.vue'
import PiePagina from '../components/principal/PiePagina.vue'
</script>

<template>
  <NavPrincipal v-if="$route.path !== '/DashboardPrincipal'" />
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-2/4 " src="../assets/imagenes/logo.png" alt="Your Company">
      <h2 class="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 pb-2">Iniciar sesión usuario
      </h2>
    </div>

    <div class="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
      <div class="space-y-6">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Usuario</label>
          <div class="mt-2">
            <input v-model="data.email" id="email" name="email" type="email" autocomplete="email" required
              class="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Contraseña</label>

          </div>
          <div class="mt-2">
            <input v-model="data.password" id="password" name="password" type="password" autocomplete="current-password"
              required
              class="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
          <div class="text-sm">
            <a href="#" class="font-semibold text-lime-800 hover:text-indigo-500">¿Has olvidado tu contraseña?</a>
          </div>
        </div>

        <div>
          <button type="button" @click="validarUser"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Iniciar</button>
        </div>
      </div>

      <p class="mt-10 text-center text-sm text-gray-500">
        ¿No es un miembro?

        <RouterLink to="/RegistrarUsuario" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
          Registrarse</RouterLink>
      </p>
    </div>
  </div>
  <PiePagina v-if="$route.path !== '/DashboardPrincipal'" />
</template>


<script>
import axios from 'axios'

export default {
  data() {
    return {
      data: {
        email: null,
        password: null
      },
    }
  },
  methods: {
    validarUser() {

      axios.get('https://apigenerator.dronahq.com/api/uMKm8Vu6/user?email=' + this.data.email)
        .then(response => {
          if (response.data.length > 0) {
            if(response.data[0].password == this.data.password){
              alert("Acceso conseguido");
              localStorage.setItem("user", 1);
              this.$router.push('/');
            }else{
              alert("Usuario o contraseña incorrectos");
              localStorage.setItem("user", 0)
            }
          }else{
            alert("Usuario o contraseña incorrectos");
            localStorage.setItem("user", 0)
          }
        })
    }
  },
}
</script>