<script setup>
    import { ref } from "vue";
    import { useRouter } from "vue-router";
    import userAuth from "../composables/userAuth";
    const {isAuthenticated, login} = userAuth();

    const username = ref("");
    const password = ref("");

    const router = useRouter();

    const logginIn = () => {
        login(username.value, password.value);
        if (isAuthenticated.value) {
            router.push("/");
      } else {
            setError("Invalid username or password");
            start();
    }
};
</script>

<template>
<div class="flex flex-col items-center justify-center min-h-screen-nonav space-y-5">
  <h1 class="text-6xl tracking-tighter font-light">Login</h1>
  <div class="shadow-2xl border-1 rounded-md flex items-center justify-center bg-slate-300 overflow-hidden">
  <img src="../assets/loginBG.png" alt="bg-image" class="h-48">
  <form @submit.prevent="logginIn" class="flex flex-col space-y-4 p-3">
      <input type="text" class="border-1 p-1 rounded-md" placeholder="Username" v-model="username"/>
      <input type="password" class="border-1 p-1 rounded-md" placeholder="Password" v-model="password"/>
      <button type="submit" @submit.prevent="logginIn" class="bg-cyan-700 text-black py-1 rounded-md">Login</button>
  </form>
  </div>
</div>
</template>