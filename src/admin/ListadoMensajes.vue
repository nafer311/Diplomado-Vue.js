<template>
    <h1 class="text-center text-3xl tracking-wider font-bold">Mensajes</h1>
    <table class="w-full text-sm text-left text-gray-500 mt-20 mb-40">
        <thead class="text-xs text-gray-100 uppercase bg-gray-50 bg-green-600">
            <tr>
                <th scope="col" class="p-4">
                    ID
                </th>
                <th scope="col" class="px-6 py-3">
                    Nombres
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
                <th scope="col" class="px-6 py-3">
                    Mensaje
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="mensaje in mensajes" :key="mensaje.id" class="bg-white border-b  hover:bg-lime-100 ">
                <td class="w-4 p-4">
                    {{ mensaje.id }}
                </td>
                <td class="px-6 py-4">
                    {{ mensaje.name }}
                </td>
                <th scope="px-6 py-4">
                    {{ mensaje.email }}
                </th>

                <td class="px-6 py-4">
                    {{ mensaje.mensaje }}
                </td>
            </tr>

        </tbody>
    </table>
</template>



<script>
import axios from 'axios'

export default {
  beforeMount() {
    axios.get('https://apigenerator.dronahq.com/api/8grHZJI7/mensajes?_sort=id&_order=desc')
      .then(response => (
        this.mensajes = response.data
      ))
  },
  data() {
    return {
      mensajes: []
    }
  },
  methods: {
    /* eliminar(id) {
      this.errores = {}
      if (confirm('¿Esta seguro que desea eliminar este usuario?')) {
        axios({
          method: 'delete',
          url: 'https://apigenerator.dronahq.com/api/F8hGXmN1/user/' + id,
          responseType: 'json',
        })
          .then(response => {
            if (response.status == 200) {
              alert("Usuario eliminado!")
            }
            axios.get('https://apigenerator.dronahq.com/api/F8hGXmN1/user')
              .then(response => (
                this.users = response.data
              ))

          })
          .catch(error => {
            console.log(error)
          })
      }
    } */
  }
}
</script>

 