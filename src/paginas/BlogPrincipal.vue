<script setup>
import NavPrincipal from '../components/principal/NavPrincipal.vue'
</script>

<template>
    <NavPrincipal v-if="$route.path !== '/DashboardPrincipal'" />
    <div class="text-center py-12 px-6 mt-12">
        <h1 class="font-display font-bold text-5xl mb-6">BIENESTAR EMOCIONAL</h1>
        <p class="max-w-lg mx-auto">un blog de psicología para cuidar tu mente y tus emociones. En este espacio encontrarás
            información y herramientas útiles para gestionar tus emociones, mejorar tu autoestima y disfrutar de una vida
            más plena y feliz.</p>
    </div>

    <hr class="w-8/12 h-8/12 m-auto border-gray-200  dark:border-gray-700 mt-1">



    <!-- <a href="#" class="flex items-center justify-center mt-6 uppercase text-sm text-black font-semibold">
    Crear nuevo articulo
    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 5l7 7-7 7"></path></svg>
</a> -->

    <div class="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 pt-12 pb-24">

        <div>
            <a href="{{ post.url | url }}">
                <img src="https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    class="w-full h-52 md:h-64 lg:h-96 xl:h-64 object-cover" />
            </a>

            <div class="bg-gray-50 p-8">
                <div class="text-xs text-gray-600 uppercase font-semibold">26/04/2023</div>
                <h2 class="mt-3 text-3xl mb-6 font-display text-black leading-tight max-w-sm">
                    Bienestar Emocional
                </h2>

                <p class="mt-4 max-w-md">
                    El bienestar emocional es un estado de equilibrio y armonía en el que una persona es capaz de manejar
                    sus emociones de forma saludable y adaptativa. La psicología tiene un papel fundamental en el cuidado
                    del bienestar emocional, ya que nos ayuda a comprender cómo funcionan nuestras emociones y cómo podemos
                    manejarlas de forma efectiva.
                </p>
                <a href="{{ post.url | url }}" class="flex items-center mt-6 uppercase text-sm text-black font-semibold">
                    LEE EL ARTÍCULO
                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>
        </div>

        <div>
            <a href="{{ post.url | url }}">
                <img src="https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    class="w-full h-52 md:h-64 lg:h-96 xl:h-64 object-cover" />
            </a>

            <div class="bg-gray-50 p-8">
                <div class="text-xs text-gray-600 uppercase font-semibold">26/04/2023</div>
                <h2 class="mt-3 text-3xl mb-6 font-display text-black leading-tight max-w-sm">
                    Bienestar Emocional
                </h2>

                <p class="mt-4 max-w-md">
                    El bienestar emocional es un estado de equilibrio y armonía en el que una persona es capaz de manejar
                    sus emociones de forma saludable y adaptativa. La psicología tiene un papel fundamental en el cuidado
                    del bienestar emocional, ya que nos ayuda a comprender cómo funcionan nuestras emociones y cómo podemos
                    manejarlas de forma efectiva.
                </p>
                <a href="{{ post.url | url }}" class="flex items-center mt-6 uppercase text-sm text-black font-semibold">
                    LEE EL ARTÍCULO
                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>
        </div>

        <div>
            <a href="{{ post.url | url }}">
                <img src="https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    class="w-full h-52 md:h-64 lg:h-96 xl:h-64 object-cover" />
            </a>

            <div class="bg-gray-50 p-8">
                <div class="text-xs text-gray-600 uppercase font-semibold">26/04/2023</div>
                <h2 class="mt-3 text-3xl mb-6 font-display text-black leading-tight max-w-sm">
                    Bienestar Emocional
                </h2>

                <p class="mt-4 max-w-md">
                    El bienestar emocional es un estado de equilibrio y armonía en el que una persona es capaz de manejar
                    sus emociones de forma saludable y adaptativa. La psicología tiene un papel fundamental en el cuidado
                    del bienestar emocional, ya que nos ayuda a comprender cómo funcionan nuestras emociones y cómo podemos
                    manejarlas de forma efectiva.
                </p>
                <a href="{{ post.url | url }}" class="flex items-center mt-6 uppercase text-sm text-black font-semibold">
                    LEE EL ARTÍCULO
                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>
        </div>


        <div>
        <a href="{{ post.url | url }}">
            <img src="https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                class="w-full h-52 md:h-64 lg:h-96 xl:h-64 object-cover" />
        </a>

        <div class="bg-gray-50 p-8">
            <div class="text-xs text-gray-600 uppercase font-semibold">26/04/2023</div>
            <h2 class="mt-3 text-3xl mb-6 font-display text-black leading-tight max-w-sm">
                Bienestar Emocional
            </h2>

            <p class="mt-4 max-w-md">
                El bienestar emocional es un estado de equilibrio y armonía en el que una persona es capaz de manejar
                sus emociones de forma saludable y adaptativa. La psicología tiene un papel fundamental en el cuidado
                del bienestar emocional, ya que nos ayuda a comprender cómo funcionan nuestras emociones y cómo podemos
                manejarlas de forma efectiva.
            </p>
            <a href="{{ post.url | url }}" class="flex items-center mt-6 uppercase text-sm text-black font-semibold">
                LEE EL ARTÍCULO
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 5l7 7-7 7"></path>
                </svg>
            </a>
        </div>
    </div>

</div></template>