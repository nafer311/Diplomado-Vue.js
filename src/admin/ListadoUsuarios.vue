
<template>
  <div class="Cont">

    <h1 class="text-center text-3xl tracking-wider font-bold">Usuarios</h1>

    <ul role="list" class="divide-y divide-gray-100">
      <li class="flex justify-between gap-x-6 py-5" v-for="user in users" :key="user.id">
        <div class="flex gap-x-4">
          <img class="h-12 w-22 flex-none rounded-full bg-gray-50" src="../assets/imagenes/anonimo2.png" alt="">
          <div class="min-w-0 flex-auto">
            <p class="text-sm font-semibold leading-6 text-gray-900">{{ user.name }}</p>
            <p class="mt-1 truncate text-xs leading-5 text-gray-500">{{ user.email }}</p>
          </div>
        </div>
        <div class="hidden sm:flex sm:flex-col sm:items-end">
          <p class="text-sm leading-6 text-gray-900">ID: {{ user.id_user }}</p>
          <button type="button"
            class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
            @click="eliminar(user.id)">
            <picture>
              <img src="../assets/imagenes/delete.png" alt="" class="w-5">
            </picture>
          </button>
        </div>
      </li>


    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  beforeMount() {
    axios.get('https://apigenerator.dronahq.com/api/uMKm8Vu6/user')
      .then(response => (
        this.users = response.data
      ))
  },
  data() {
    return {
      users: []
    }
  },
  methods: {
    eliminar(id) {
      this.errores = {}
      if (confirm('¿Esta seguro que desea eliminar este usuario?')) {
        axios({
          method: 'delete',
          url: 'https://apigenerator.dronahq.com/api/uMKm8Vu6/user/' + id,
          responseType: 'json',
        })
          .then(response => {
            if (response.status == 200) {
              alert("Usuario eliminado!")
            }
            axios.get('https://apigenerator.dronahq.com/api/uMKm8Vu6/user')
              .then(response => (
                this.users = response.data
              ))

          })
          .catch(error => {
            console.log(error)
          })
      }
    }
  }
}
</script>

 