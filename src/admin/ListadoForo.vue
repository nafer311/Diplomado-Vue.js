<template>
    <h1 class="text-center text-3xl tracking-wider font-bold">Foros</h1>
    <div class="p-10 flex justify-end">
        <button type="button" @click="mostrarModal"
            class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Crear
            un nuevo foro</button>
    </div>


    <!-- Large Modal -->
    <div id="large-modal" tabindex="-1" style="background-color: rgb(0,0,0, .2);"
        class="fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full justify-center items-center flex hidden">
        <div class="relative w-full max-w-2xl max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <!-- Modal header -->
                <div class="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                        Ingrese los datos para crear el foro
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
                            <input type="hidden" name="id_person_update" id="id_person_update">
                            <div class="sm:col-span-2">
                                <label for="id_person"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                                <input type="text" name="id_person" id="id_person" v-model="data.name"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Ingrese el nombre del foro" required="">
                            </div>

                            <div class="sm:col-span-2">
                                <label for="observations"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                <textarea id="observations" rows="8" v-model="data.description"
                                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Escribe tu descripcion aqui..."></textarea>
                            </div>

                        </div>

                    </div>
                    <!-- Modal footer -->
                    <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button data-modal-hide="large-modal" @click="crearForo"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Crear foro</button>
                        <button data-modal-hide="large-modal" type="button" id="close_modal" @click="cerrarModal"
                            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <h5 class="text-lx font-medium text-gray-700">Tus foros</h5>
    <table class="w-full text-sm text-left text-gray-500 mt-20 mb-40">
        <thead class="text-xs text-gray-100 uppercase bg-gray-50 bg-green-600">
            <tr>
                <th scope="col" class="p-4">
                    ID
                </th>
                <th scope="col" class="px-6 py-3">
                    Nombre
                </th>
                <th scope="col" class="px-6 py-3">
                    Descripcion
                </th>
                <th scope="col" class="px-6 py-3">
                    Opciones
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="foro in foros" :key="foro.id" class="bg-white border-b  hover:bg-lime-100 ">
                <td class="w-4 p-4">
                    {{ foro.id }}
                </td>
                <td class="px-6 py-4">
                    {{ foro.name }}
                </td>
                <th scope="px-6 py-4">
                    <p>{{ foro.description }}</p>
                </th>
                <th scope="px-6 py-4">
                    <button type="button"
                        class="block text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-2 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                        @click="eliminar(foro.id)">
                        <picture>
                            <img src="../assets/imagenes/delete.png" alt="" class="w-5">
                        </picture>
                    </button>
                </th>

            </tr>

        </tbody>
    </table>
</template>




<script>
import axios from 'axios'

export default {
    beforeMount() {
        axios.get('https://apigenerator.dronahq.com/api/BbjOPUpp/foros?_sort=id&_order=desc')
            .then(response => (
                this.foros = response.data
            ))
    },
    data() {
        return {
            foros: [],
            data: {
                name: null,
                description: null
            }
        }
    },
    methods: {
        eliminar(id) {
            if (confirm('¿Esta seguro que desea eliminar este foro?')) {
                axios({
                    method: 'delete',
                    url: 'https://apigenerator.dronahq.com/api/BbjOPUpp/foros/' + id,
                    responseType: 'json',
                })
                    .then(response => {
                        if (response.status == 200) {
                            alert("Foro eiminado!")
                        }
                        axios.get('https://apigenerator.dronahq.com/api/BbjOPUpp/foros?_sort=id&_order=desc')
                            .then(response => (
                                this.foros = response.data
                            ))

                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        },
        crearForo() {
            axios({
                method: 'post',
                url: 'https://apigenerator.dronahq.com/api/BbjOPUpp/foros',
                data: this.data,
                responseType: 'json',
            })
                .then(response => {

                    this.data.name = null
                    this.data.description = null

                    if (response.statusText == "Created") {
                        alert("Foro registrado")
                        axios.get('https://apigenerator.dronahq.com/api/BbjOPUpp/foros?_sort=id&_order=desc')
                            .then(response => (
                                this.foros = response.data
                            ))
                    }
                })
                .catch(error => {
                    console.log(error)
                })

        },
        mostrarModal() {
            document.getElementById('large-modal').classList.remove('hidden')
        },
        cerrarModal() {
            document.getElementById('large-modal').classList.add('hidden')
        }
    }
}
</script>

 