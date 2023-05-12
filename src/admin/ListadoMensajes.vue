<template>
  <h1 class="text-center text-3xl tracking-wider font-bold">Mensajes</h1>
  <div class="flex justify-start items-start gap-4 my-10">
    <!-- Large Modal -->
    <div id="large-modal" tabindex="-1" style="background-color: rgb(0,0,0, .2);"
      class="fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full justify-center items-center flex hidden">
      <div class="relative w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div class="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
            <h3 class="text-xl font-medium text-gray-900 dark:text-white">
              Ingrese los datos para responder el mensaje
            </h3>
            <button type="button" id="close_modal2" @click="cerrarModal"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="large-modal">
              <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <div id="form_update">
            <div class="p-6 space-y-6">

              <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div class="sm:col-span-2">
                  <label for="observations"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mensaje:</label>
                  <textarea id="observations" rows="8" v-model="notificacion.mensaje"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Escribe tu mensaje aqui..."></textarea>
                </div>

              </div>

            </div>
            <!-- Modal footer -->
            <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button data-modal-hide="large-modal" @click="responderMensaje"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Responder</button>
              <button data-modal-hide="large-modal" type="button" id="close_modal" @click="cerrarModal"
                class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Large Modal -->
    <div id="large-modal-2" tabindex="-1" style="background-color: rgb(0,0,0, .2);"
      class="fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full justify-center items-center flex hidden">
      <div class="relative w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div class="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
            <h3 class="text-xl font-medium text-gray-900 dark:text-white">
              Ingrese los datos para agendar la cita
            </h3>
            <button type="button" id="close_modal2" @click="cerrarModal2"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="large-modal">
              <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <div id="form_update">
            <div class="p-6 space-y-6">

              <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div class="sm:col-span-1">
                  <label for="id_person"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha:</label>
                  <input type="date" name="id_person" id="id_person" v-model="cita.fecha"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Identificacion" required="">
                </div>
                <div class="sm:col-span-1">
                  <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hora</label>
                  <input type="time" name="name" id="name" v-model="cita.hora"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Ingrese el nombre" required="">
                </div>
                <div class="sm:col-span-1">
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripcion
                    breve</label>
                  <input type="text" name="email" id="email" v-model="cita.descripcion"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Descripcion" required="">
                </div>
                <div class="sm:col-span-1">
                  <label for="countries"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Psicologo</label>
                  <select id="countries" v-model="cita.id_psicologo"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option v-for="p in psicologos" :key="p.id" :value="p.id_user">{{ p.name }}</option>
                  </select>
                </div>

              </div>

            </div>
            <!-- Modal footer -->
            <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button data-modal-hide="large-modal" id="crear" @click="newCita"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">Crear
                cita</button>

              <button data-modal-hide="large-modal" type="button" id="close_modal" @click="cerrarModal2"
                class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>


    <button data-modal-hide="large-modal" @click="tabla = 2"
      class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Sin
      leer</button>
    <button data-modal-hide="large-modal" @click="tabla = 1"
      class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Leidos</button>
  </div>
  <table v-if="tabla == 2" class="w-full text-sm text-left text-gray-500 mt-20 mb-40">
    <thead class="text-xs text-gray-100 uppercase  bg-green-600">
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
        <th scope="col" class="px-6 py-3">
          Opciones
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="mensaje in mensajes" :key="mensaje.id" class="bg-white border-b  hover:bg-lime-100 ">

        <td v-if="mensaje.leido == 0" class="w-4 p-4">
          {{ mensaje.id }}
        </td>
        <td v-if="mensaje.leido == 0" class="px-6 py-4">
          {{ mensaje.name }}
        </td>
        <th v-if="mensaje.leido == 0" scope="px-6 py-4">
          {{ mensaje.email }}
        </th>

        <td v-if="mensaje.leido == 0" class="px-6 py-4">
          {{ mensaje.mensaje }}
        </td>
        <td v-if="mensaje.leido == 0" class="px-6 py-4">
          <div class="flex gap-3">
            <button type="button"
              class="block text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-2 py-2 text-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-900"
              @click="responder(mensaje.id)">
              Responder
            </button>
            <button type="button"
              class="block text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-900"
              @click="agendarCita(mensaje.id)">
              Agendar cita
            </button>
          </div>
        </td>
      </tr>

    </tbody>
  </table>
  <table v-if="tabla == 1" class="w-full text-sm text-left text-gray-500 mt-20 mb-40">
    <thead class="text-xs text-gray-100 uppercase  bg-green-600">
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

        <td v-if="mensaje.leido == 1" class="w-4 p-4">
          {{ mensaje.id }}
        </td>
        <td v-if="mensaje.leido == 1" class="px-6 py-4">
          {{ mensaje.name }}
        </td>
        <th v-if="mensaje.leido == 1" scope="px-6 py-4">
          {{ mensaje.email }}
        </th>

        <td v-if="mensaje.leido == 1" class="px-6 py-4">
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
    axios.get('https://apigenerator.dronahq.com/api/lzNnYU-E/mensajes?_sort=id&_order=desc')
      .then(response => (
        this.mensajes = response.data
      ))
    axios.get('https://apigenerator.dronahq.com/api/n9hsjBy5/psicologos')
      .then(response => (
        this.psicologos = response.data
      ))
  },
  data() {
    return {
      mensajes: [],
      psicologos: [],
      tabla: 2,
      id_mensaje: null,
      notificacion: {
        visto: 0,
        id_user: null,
        mensaje: null
      },
      cita: {
        visto: 0,
        fecha: null,
        hora: null,
        descripcion: null,
        id_psicologo: null,
        id_user: null,
        nombre_user: null
      }
    }
  },
  methods: {
    responder(id) {
      //alert('Respondiendo al mensaje con id '+id)
      this.id_mensaje = id
      //this.leer(this.id_mensaje)
      document.getElementById('large-modal').classList.remove('hidden')
    },
    agendarCita(id) {
      //alert('Respondiendo al mensaje con id '+id)
      this.id_mensaje = id
      //this.leer(this.id_mensaje)
      document.getElementById('large-modal-2').classList.remove('hidden')
    },
    leer(id) {
      let data = this.mensajes.find(function (ms) {
        return ms.id == id;
      })
      console.log(data)
      data.leido = 1;
      const newObj = Object.assign({}, data);
      newObj.leido = 1;
      console.log(newObj)

      axios({
        method: 'put',
        url: 'https://apigenerator.dronahq.com/api/lzNnYU-E/mensajes/' + id,
        data: newObj,
        responseType: 'json',
      })
        .then(response => {
          console.log(response)
          if (response.statusText == "OK") {
            axios.get('https://apigenerator.dronahq.com/api/lzNnYU-E/mensajes?_sort=id&_order=desc')
              .then(response => (
                this.mensajes = response.data
              ))
          }
        })
        .catch(error => {
          console.log(error)
        })

      return newObj;
    },
    cerrarModal() {
      document.getElementById('large-modal').classList.add('hidden')
    },
    cerrarModal2() {
      document.getElementById('large-modal-2').classList.add('hidden')
    },
    responderMensaje() {
      const data = this.leer(this.id_mensaje)
      this.notificacion.id_user = data.id_user
      axios({
        method: 'post',
        url: 'https://apigenerator.dronahq.com/api/HpPanLMZ/notificaciones',
        data: this.notificacion,
        responseType: 'json',
      })
        .then(response => {

          this.notificacion.mensaje = null
          this.notificacion.id_user = null

          if (response.statusText == "Created") {
            alert("Respuesta enviada")
            axios.get('https://apigenerator.dronahq.com/api/lzNnYU-E/mensajes?_sort=id&_order=desc')
              .then(response => (
                this.mensajes = response.data
              ))
            document.getElementById('large-modal').classList.add('hidden')
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    newCita() {
      const data = this.leer(this.id_mensaje)
      this.notificacion.id_user = data.id_user;
      this.cita.id_user = data.id_user;
      this.cita.nombre_user = data.name;
      let id_ps = this.cita.id_psicologo;
      let data2 = this.psicologos.find(function (p) {
        return p.id_user == id_ps;
      })
      this.notificacion.mensaje = `Se le ha generado una cita el dia ${this.cita.fecha} a las ${this.cita.hora} horas, con el psicologo ${data2.name}`;

      console.log("Info de le la notificacion")

      console.log(this.notificacion)
      axios({
        method: 'post',
        url: 'https://apigenerator.dronahq.com/api/HpPanLMZ/notificaciones',
        data: this.notificacion,
        responseType: 'json',
      })
        .then(response => {

          this.notificacion.mensaje = null
          this.notificacion.id_user = null

          if (response.statusText == "Created") {
            alert('Mensaje enviado')

            console.log("Info de la cita")
            console.log(this.cita)
            axios({
              method: 'post',
              url: 'https://apigenerator.dronahq.com/api/ZMRD3dQw/citas',
              data: this.cita,
              responseType: 'json',
            })
              .then(response => {

                this.cita.descripcion = null
                this.cita.fecha = null
                this.cita.hora = null
                this.cita.id_psicologo = null
                this.cita.id_user = null
                this.cita.nombre_user = null

                if (response.statusText == "Created") {
                  alert("Cita generada")
                }
              })
              .catch(error => {
                console.log(error)
              });


            axios.get('https://apigenerator.dronahq.com/api/lzNnYU-E/mensajes?_sort=id&_order=desc')
              .then(response => (
                this.mensajes = response.data
              ))
            document.getElementById('large-modal-2').classList.add('hidden')
          }
        })
        .catch(error => {
          console.log(error)
        });















    }
  }
}
</script>

 