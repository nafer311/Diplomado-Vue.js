<script setup>
import NavPrincipal from '../components/principal/NavPrincipal.vue'
import PiePagina from '../components/principal/PiePagina.vue'

</script>

<template>
  <NavPrincipal v-if="$route.path !== '/DashboardPrincipal'" />
     <div class="text-center py-12 px-6 mt-12">
      <h1 class="font-display font-bold text-5xl mb-6">COMUNICATE</h1>
      <p class="max-w-lg mx-auto"></p>
    </div>
    
    <div class="container mx-auto px-6 mb-12">
    
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
    
        <div>
          
          <a href="tel:{{ contact.tel }}" class="flex items-center my-2">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            3002362340
          </a>
          <a href="mailto:{{ contact.address }}" class="flex items-center my-2">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            tecuidamosunicor@gmail.com
          </a>
          <div class="flex items-center my-2">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            LUN-SAB, 8-5 | SAB, 8-12
          </div>
          <a href="https://goo.gl/maps/3CWVHKY4pBS96pSx9?coh=178572&entry=tt" target="_blank" class="flex items-center my-2">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            65VR H6, Lorica, Cordoba
          </a>
    
        </div>
    
        <div>
          <div  name="contact" netlify>
            <div>
              <label class="block text-base tracking-tight text-gray-600">Nombre</label>
              <input v-model="mensajes.name" name="Nombre" type="text" placeholder="Nombre" required class="mt-2 w-full border-none text-sm p-4 bg-gray-100 text-gray-700" />
            </div>
            <div class="mt-6">
              <label class="block text-base tracking-tight text-gray-600">Email</label>
              <input v-model="mensajes.email" name="email" type="email" placeholder="tecuidamosunicor@email.com" required class="mt-2 w-full border-none text-sm p-4 bg-gray-100 text-gray-700" />
            </div>
            <div class="mt-6">
              <label class="block text-base tracking-tight text-gray-600">Mensaje</label>
              <textarea v-model="mensajes.mensaje" name="message" placeholder="Escriba su mensaje" required class="mt-2 w-full border-none text-sm p-4 bg-gray-100 text-gray-700"></textarea>
            </div>
            <button @click="enviarMensaje" class="inline-block bg-lime-800 text-white uppercase text-sm tracking-widest font-heading px-8 py-4 mt-6">
              Enviar mensaje
            </button>
          </div>
        </div>
      </div>
    </div>
    <PiePagina v-if="$route.path !== '/DashboardPrincipal'" />
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      mensajes: {
        name: null,
        email: null,
        mensaje: null
      }
    }
  },
  methods: {
    enviarMensaje() {
      axios({
        method: 'post',
        url: 'https://apigenerator.dronahq.com/api/8grHZJI7/mensajes',
        data: this.mensajes,
        responseType: 'json',
      })
        .then(response => {
          this.mensajes.name = null
          this.mensajes.email = null
          this.mensajes.mensaje = null

          if (response.statusText == "Created") {
            alert("Mensaje enviado registrado")
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
}
</script>