<template>
    <h1 class="text-center text-3xl tracking-wider font-bold">Psicologos</h1>
    <div class="p-10 flex justify-end">
        <button type="button" @click="mostrarModal"
            class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Agregar
            psicologo</button>
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
                        Ingrese los datos para crear el perfil del psicologo
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
                            <div class="sm:col-span-1">
                                <label for="id_person"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Identificacion</label>
                                <input type="number" name="id_person" id="id_person" v-model="data.id_user"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Identificacion" required="">
                            </div>
                            <div class="sm:col-span-1">
                                <label for="name"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                                <input type="text" name="name" id="name" v-model="data.name"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Ingrese el nombre" required="">
                            </div>
                            <div class="sm:col-span-1">
                                <label for="email"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo</label>
                                <input type="email" name="email" id="email" v-model="data.email"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Ingrese su email" required="">
                            </div>
                            <div class="sm:col-span-1">
                                <label for="password"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                                <input type="password" name="password" id="password" v-model="data.password"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Ingrese la contraseña a asignar" required="">
                            </div>

                        </div>

                    </div>
                    <!-- Modal footer -->
                    <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button data-modal-hide="large-modal" @click="crearPsicologo" id="crear"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hidden">Crear
                            psicologo</button>

                        <button data-modal-hide="large-modal" @click="editarPsicologo(id_pisicolo)" id="editar"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hidden">Editar
                            psicologo</button>

                        <button data-modal-hide="large-modal" type="button" id="close_modal" @click="cerrarModal"
                            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <h5 class="text-lx font-medium text-gray-700">Psicologos registrados</h5>
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
                    Email
                </th>
                <th scope="col" class="px-6 py-3">
                    Opciones
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="psicologo in psicologos" :key="psicologo.id" class="bg-white border-b  hover:bg-lime-100 ">
                <td class="w-4 p-4">
                    {{ psicologo.id }}
                </td>
                <td class="px-6 py-4">
                    {{ psicologo.name }}
                </td>
                <th scope="px-6 py-4">
                    <p>{{ psicologo.email }}</p>
                </th>
                <th scope="px-6 py-4">
                    <div class="flex gap-3">
                        <button type="button"
                            class="block text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-2 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                            @click="eliminar(psicologo.id)">
                            <picture>
                                <img src="../assets/imagenes/delete.png" alt="" class="w-5">
                            </picture>
                        </button>
                        <button type="button"
                            class="block text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-900"
                            @click="editar(psicologo.id)">
                            Editar
                        </button>
                    </div>
                </th>

            </tr>

        </tbody>
    </table>
</template>




<script>
import axios from 'axios'

export default {
    beforeMount() {
        axios.get('https://apigenerator.dronahq.com/api/n9hsjBy5/psicologos?_sort=id&_order=desc')
            .then(response => (
                this.psicologos = response.data
            ))
    },
    data() {
        return {
            psicologos: [],
            id_pisicolo: null,
            data: {
                name: null,
                email: null,
                password: null,
                id_user: null
            }
        }
    },
    methods: {
        eliminar(id) {
            if (confirm('¿Esta seguro que desea eliminar este psicologo?')) {
                axios({
                    method: 'delete',
                    url: 'https://apigenerator.dronahq.com/api/n9hsjBy5/psicologos/' + id,
                    responseType: 'json',
                })
                    .then(response => {
                        if (response.status == 200) {
                            alert("Psicologo eiminado!")
                        }
                        axios.get('https://apigenerator.dronahq.com/api/n9hsjBy5/psicologos?_sort=id&_order=desc')
                            .then(response => (
                                this.psicologos = response.data
                            ))

                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        },
        crearPsicologo() {
            axios({
                method: 'post',
                url: 'https://apigenerator.dronahq.com/api/n9hsjBy5/psicologos',
                data: this.data,
                responseType: 'json',
            })
                .then(response => {

                    this.data.name = null
                    this.data.email = null
                    this.data.password = null
                    this.data.id_user = null

                    if (response.statusText == "Created") {
                        alert("Psicologo registrado")
                        axios.get('https://apigenerator.dronahq.com/api/n9hsjBy5/psicologos?_sort=id&_order=desc')
                            .then(response => (
                                this.psicologos = response.data
                            ))
                    }
                })
                .catch(error => {
                    console.log(error)
                })

        },
        mostrarModal() {
            document.getElementById('large-modal').classList.remove('hidden')
            document.getElementById('crear').classList.remove('hidden')
        },
        cerrarModal() {
            document.getElementById('large-modal').classList.add('hidden')
            document.getElementById('crear').classList.add('hidden')
            document.getElementById('editar').classList.add('hidden')
            this.data.name = null
            this.data.email = null
            this.data.password = null
            this.data.id_user = null
            this.id_pisicolo = null
        },
        editar(id) {
            document.getElementById('large-modal').classList.remove('hidden')
            document.getElementById('editar').classList.remove('hidden')
            axios.get('https://apigenerator.dronahq.com/api/n9hsjBy5/psicologos/' + id)
                .then(response => {
                    this.data = response.data
                    this.id_pisicolo = response.data.id
                })
        },
        editarPsicologo(id) {
            axios({
                method: 'put',
                url: 'https://apigenerator.dronahq.com/api/n9hsjBy5/psicologos/'+id,
                data: this.data,
                responseType: 'json',
            })
                .then(response => {

                    this.data.name = null
                    this.data.email = null
                    this.data.password = null
                    this.data.id_user = null

                    if (response.statusText == "OK") {
                        alert("Psicologo actualizado")
                        document.getElementById('large-modal').classList.add('hidden')
                        axios.get('https://apigenerator.dronahq.com/api/n9hsjBy5/psicologos?_sort=id&_order=desc')
                            .then(response => (
                                this.psicologos = response.data
                            ))
                    }
                })
                .catch(error => {
                    console.log(error)
                })

        }
    }
}
</script>

 