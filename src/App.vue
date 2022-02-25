<script setup>
  import Nav from "./components/Nav.vue"; 
</script>

<template>
<div class="min-h-screen">
    <Nav />
    <div class="container grid mx-auto items-center justify-items-center">
     <router-view />
    </div>
</div>
</template>
 


