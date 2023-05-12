<script setup>
import NavPrincipal from '../components/principal/NavPrincipal.vue'
</script>

<template>
    <NavPrincipal />
    <h1 class="text-center text-3xl tracking-wider font-bold pt-5">Participa en nuestros foros</h1>
    <div class="p-10 m-10">

        <div v-for="foro in foros" :key="foro.id" class="border border-solid border-gray-400 p-2 rounded mb-10">
            <div class="flex justify-start items-center p-1">
                <div class="block p-4 bg-lime-600 text-white rounded mr-5">
                    <svg class="w-6 h-6 fill-current inline-block" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"></path>
                        <path
                            d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z">
                        </path>
                    </svg>
                </div>
                <a @click="abrirForo(foro.id)" class="text-2xl font-bold text-lime-600 cursor-pointer">
                    {{ foro.id }} - {{foro.name}}
                </a>
            </div>
            <div class="p-5 text-lg font-normal">
                <p>{{ foro.description }}</p>
                <br>
            </div>
        </div>

    </div>
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
            foros: []
        }
    },
    methods: {
        abrirForo(id){
            this.$router.push({name: 'ResponseForo',
                params: { id: id }
            })
        }
    }
}
</script>

 