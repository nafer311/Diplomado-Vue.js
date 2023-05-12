<script setup>
import NavP from './NavP.vue'
</script>

<template>
    <article class="flex">
        <NavP />

        <div class="w-full max-h-screen overflow-y-scroll overflow-x-hidden">
            <section class="sm:px-20 sm:pt-10 p-5">
                <h1 class="text-center font-extrabold text-3xl border-b border-gray-400 mb-10 pb-5 ">Citas Hoy</h1>
            </section>
            <section class="overflow-x-hidden sm:px-20 sm:pt-10 p-5">
                <table class="w-full text-sm text-left text-gray-500 mb-40">
                    <thead class="text-xs text-gray-100 uppercase bg-gray-50 bg-green-600">
                        <tr>
                            <th scope="col" class="p-4">
                                ID
                            </th>
                            <th scope="col" class="p-4">
                                Paciente (ID)
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Descripcion
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Fecha - hora
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Opciones
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="cita in citas" :key="cita.id"  class="bg-white border-b  hover:bg-lime-100 ">
                            <td v-if="fechaHoy == cita.fecha" class="w-4 p-4">
                                {{ cita.id }}
                            </td>
                            <td v-if="fechaHoy == cita.fecha" class="p-4">
                                {{ cita.nombre_user + ' (' + cita.id_user + ')' }}
                            </td>
                            <td v-if="fechaHoy == cita.fecha" class="px-6 py-4">
                                {{ cita.descripcion }}
                            </td>
                            <th v-if="fechaHoy == cita.fecha" scope="px-6 py-4">
                                {{ cita.fecha + ' - ' + cita.hora }}
                            </th>
                            <th v-if="fechaHoy == cita.fecha" scope="px-6 py-4">
                                <div class="flex gap-3">
                                    <button type="button"
                                        class="block text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-2 py-2 text-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-900"
                                        @click="anotacion(cita.id)">
                                        Notas
                                    </button>
                                    <!-- <button type="button"
                            class="block text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-900"
                            @click="marcar(cita.id)">
                            Marcar como vista
                        </button> -->
                                </div>
                            </th>

                        </tr>

                    </tbody>
                </table>
            </section>
        </div>
    </article>
    <!-- Large Modal -->
    <div id="large-modal" tabindex="-1" style="background-color: rgb(0,0,0, .2);"
        class="fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full justify-center items-center flex hidden">
        <div class="relative w-full max-w-2xl max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <!-- Modal header -->
                <div class="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                        Notas
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
                        <div id="error" class="dark:text-gray-50">
                            <h1>Esta cita aun no tiene notas, agrega una!</h1>
                        </div>
                        <div v-for="respuesta in respuesta_respuesta_foro" :key="respuesta.id">
                            <div
                                class="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <p class="font-normal text-gray-700 dark:text-gray-400">{{ respuesta.nota }}</p>
                            </div>
                        </div>


                        <div class="mt-5 mb-10" v-if="mostrarComponente2 == 1">

                            <label for="descripcion" class="block text-sm font-medium leading-6 text-gray-900">Nota</label>
                            <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 ">
                                <div class="flex items-center justify-between px-3 py-2 border-b ">
                                    <div class="flex flex-wrap items-center divide-gray-200 sm:divide-x ">
                                        <div class="flex items-center space-x-1 sm:pr-4">
                                            <button type="button"
                                                class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 ">
                                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor"
                                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd"
                                                        d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                                        clip-rule="evenodd"></path>
                                                </svg>
                                                <span class="sr-only">Attach file</span>
                                            </button>
                                            <button type="button"
                                                class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
                                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor"
                                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd"
                                                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                        clip-rule="evenodd"></path>
                                                </svg>
                                                <span class="sr-only">Embed map</span>
                                            </button>
                                            <button type="button"
                                                class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 ">
                                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor"
                                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd"
                                                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                                        clip-rule="evenodd"></path>
                                                </svg>
                                                <span class="sr-only">Upload image</span>
                                            </button>
                                            <button type="button"
                                                class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 ">
                                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor"
                                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd"
                                                        d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                                                        clip-rule="evenodd"></path>
                                                </svg>
                                                <span class="sr-only">Format code</span>
                                            </button>
                                            <button type="button"
                                                class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 ">
                                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor"
                                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                                                        clip-rule="evenodd"></path>
                                                </svg>
                                                <span class="sr-only">Add emoji</span>
                                            </button>
                                        </div>
                                        <div class="flex flex-wrap items-center space-x-1 sm:pl-4">
                                            <button type="button"
                                                class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 ">
                                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor"
                                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd"
                                                        d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                                        clip-rule="evenodd"></path>
                                                </svg>
                                                <span class="sr-only">Add list</span>
                                            </button>
                                            <button type="button"
                                                class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 ">
                                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor"
                                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd"
                                                        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                                        clip-rule="evenodd"></path>
                                                </svg>
                                                <span class="sr-only">Settings</span>
                                            </button>
                                            <button type="button"
                                                class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
                                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor"
                                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd"
                                                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                        clip-rule="evenodd"></path>
                                                </svg>
                                                <span class="sr-only">Timeline</span>
                                            </button>
                                            <button type="button"
                                                class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 ">
                                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor"
                                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd"
                                                        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                                        clip-rule="evenodd"></path>
                                                </svg>
                                                <span class="sr-only">Download</span>
                                            </button>
                                        </div>
                                    </div>
                                    <button type="button" data-tooltip-target="tooltip-fullscreen"
                                        class="p-2 text-gray-500 rounded cursor-pointer sm:ml-auto hover:text-gray-900 hover:bg-gray-100">
                                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                        <span class="sr-only">Full screen</span>
                                    </button>
                                    <div id="tooltip-fullscreen" role="tooltip"
                                        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                        Show full screen
                                        <div class="tooltip-arrow" data-popper-arrow></div>
                                    </div>
                                </div>
                                <div class="px-4 py-2 bg-white rounded-b-lg">
                                    <label for="editor" class="sr-only">Publish post</label>
                                    <textarea v-model="data2.nota" id="descripcion" rows="8"
                                        class="block w-full px-0 text-sm text-gray-800 bg-white border-0  focus:ring-0"
                                        placeholder="Escribe tu nota" required></textarea>
                                </div>
                            </div>
                            <button type="button" @click="nota"
                                class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-green-600 rounded-lg focus:ring-4 focus:ring-gree-200 dark:focus:ring-green-900 hover:bg-green-800">
                                Guardar
                            </button>
                            <button type="button" @click="mostrarComponente2 = 0"
                                class="ml-5 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-gray-600 rounded-lg focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-900 hover:bg-gray-800">
                                Cerrar
                            </button>
                        </div>

                    </div>
                    <!-- Modal footer -->
                    <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button data-modal-hide="large-modal" @click="mostrarComponente2 = 1"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Agregar
                            nota</button>

                        <button data-modal-hide="large-modal" type="button" id="close_modal" @click="cerrarModal"
                            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    beforeMount() {
        let usuario = JSON.parse(localStorage.getItem('psicologo'));
        if (usuario == null) {
            this.$router.push('/LoginPsicologo');
        }
        this.fechaHoy = this.fechaActual();
        axios.get('https://apigenerator.dronahq.com/api/ZMRD3dQw/citas?id_psicologo=' + usuario.id_user)
            .then(response => (
                this.citas = response.data
            ))
    },
    data() {
        return {
            citas: [],
            mostrarComponente2: 0,
            respuesta_respuesta_foro: [],
            id_cita: null,
            data2: {
                nota: null,
                id_cita: null
            },
            fechaHoy: null
        }
    },
    methods: {
        marcar(id) {
            alert(id)
        },
        anotacion(id) {
            this.mostrarModal()
            this.id_cita = id
            axios.get('https://apigenerator.dronahq.com/api/J8mGWq4I/notas?id_cita=' + id + '&_sort=id&_order=desc')
                .then(response => {
                    this.respuesta_respuesta_foro = response.data
                    if (this.respuesta_respuesta_foro.length > 0) {
                        document.getElementById("error").classList.add('hidden')
                    } else {
                        document.getElementById("error").classList.remove('hidden')
                    }
                });
        },
        mostrarModal() {
            document.getElementById('large-modal').classList.remove('hidden')
        },
        cerrarModal() {
            document.getElementById('large-modal').classList.add('hidden')
        },
        nota() {
            this.data2.id_cita = this.id_cita
            axios({
                method: 'post',
                url: 'https://apigenerator.dronahq.com/api/J8mGWq4I/notas',
                data: this.data2,
                responseType: 'json',
            })
                .then(response => {
                    if (response.statusText == "Created") {
                        alert("Nota registrada con exito")
                        this.anotacion(this.data2.id_cita)
                        this.data2.nota = null
                        this.data2.id_cita = null
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        },
        fechaActual() {
            //Obtenemos la fecha actual
            var now = new Date();
            var day = ("0" + now.getDate()).slice(-2);
            var month = ("0" + (now.getMonth() + 1)).slice(-2);
            var today = now.getFullYear() + "-" + (month) + "-" + (day);
            return today;
        }
    }
}
</script>