<script setup>
import NavP from './NavP.vue'
</script>

<template>
    <article class="flex">
        <NavP />

        <div class="w-full max-h-screen overflow-y-scroll overflow-x-hidden">
            <section class="p-20">
                <h1 class="text-center font-extrabold text-3xl border-b border-gray-400 mb-10 pb-5 ">Bienvenido</h1>
            </section>
            <section class="overflow-x-hidden p-40">
            </section>
        </div>
    </article>
</template>


<script>
export default {
    beforeMount() {
        let usuario = JSON.parse(localStorage.getItem('psicologo'));
        if(usuario == null){
            this.$router.push('/LoginPsicologo');
        }
    }
};

</script>