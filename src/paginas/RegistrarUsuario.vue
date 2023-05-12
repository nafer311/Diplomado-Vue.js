<script setup>
import NavPrincipal from '../components/principal/NavPrincipal.vue'
import PiePagina from '../components/principal/PiePagina.vue'
</script>

<template>
  <NavPrincipal v-if="$route.path !== '/DashboardPrincipal'" />
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-2/4 " src="../assets/imagenes/logo.png" alt="Your Company">
      <h2 class="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 pb-2">Registrar nuevo usuario
      </h2>
    </div>

    <div class="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
      <div class="space-y-6" method="post">
        <div>
          <label for="id" class="block text-sm font-medium leading-6 text-gray-900">Identificación</label>
          <div class="mt-2">
            <input id="id" name="id" type="number" required v-model="user.id_user"
              class=" pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>
        <div>
          <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Nombres</label>
          <div class="mt-2">
            <input id="name" name="name" type="text" required v-model="user.name"
              class=" pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Correo</label>
          <div class="mt-2">
            <input id="email" name="email" type="email" autocomplete="email" required v-model="user.email"
              class="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Contraseña</label>

          </div>
          <div class="mt-2">
            <input id="password" name="password" type="password" autocomplete="current-password" required v-model="user.password"
              class="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div>
          <button @click="crearUser"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Registrarse</button>
        </div>
      </div>

      <p class="mt-10 text-center text-sm text-gray-500">
        ¿Ya eres un miembro?
        <RouterLink to="/LoginPrincipal" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Inicia
          sesión</RouterLink>
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
      user: {
        email: null,
        password: null,
        name: null,
        id_user: null
      }
    }
  },
  methods: {
    crearUser() {
      axios({
        method: 'post',
        url: 'https://apigenerator.dronahq.com/api/uMKm8Vu6/user',
        data: this.user,
        responseType: 'json',
      })
        .then(response => {

          this.user.id_user = null
          this.user.name = null
          this.user.email = null
          this.user.password = null

          if (response.statusText == "Created") {
            alert("Usuario registrado")
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
}
</script>