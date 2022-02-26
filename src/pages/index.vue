<script setup>
import useAuth from "../composables/userAuth";
const { isAuthenticated, user } = useAuth();
</script>

<template>
<div class="flex flex-col space-y-10 items-center justify-center min-h-screen-nonav">
   <h1 v-if="!isAuthenticated" class="text-6xl tracking-tighter font-extralight">Welcome</h1>
   <h1 v-else class="text-6xl tracking-tighter font-extralight">Welcome {{ user }}</h1>
  <img src="../assets/indexBG.png" alt="bg-image" class="w-2/3 ">
</div>
</template>