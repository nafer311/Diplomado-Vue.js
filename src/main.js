import { createApp } from 'vue'

// Importa el componente principal
import App from './App.vue'

// Importa el maneojo de las rutas
import router from './router'

// Importa los estilos CSS
import './assets/estilos.css'

// Crea una aplicación VUE
const app = createApp(App)

app.use(router)

app.mount('#app')
