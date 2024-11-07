
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'


<template>

    <RouterView></RouterView>



  
  <!-- <RouterView /> -->

</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

router.afterEach((to) => {
  document.title = `${to.meta.title}`; // Ganti 'Vite App' dengan nama aplikasi Anda
});
</script>

<style>
</style>
