<script setup>
    import { ref } from "vue";
    import { useRouter } from "vue-router";
    import userAuth from "../composables/userAuth";
    import loginError from "../composables/loginError";
    


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

const { error, setError } = loginError()

import { useTimeout, promiseTimeout } from "@vueuse/core";

const { ready, start } = useTimeout(3000, { controls: true });

</script>

<template>
<div class="flex flex-col items-center justify-center min-h-screen-nonav space-y-5">
  <h1 class="text-6xl tracking-tighter font-light">Login</h1>
  <div class="shadow-2xl border-1 rounded-md flex items-center justify-center bg-slate-300 overflow-hidden">
  <img src="../assets/loginBG.png" alt="bg-image" class="h-48">
  <form @submit.prevent="logginIn" class="flex flex-col space-y-4 p-3">
      <input type="text" placeholder="Username" v-model="username"
      :class="!ready && error ? 'border-2 border-red-500 p-1 rounded-md' : 'p-1 rounded-md'"
      />
      <input type="password" placeholder="Password" v-model="password"
      :class="!ready && error ? 'border-2 border-red-500 p-1 rounded-md' : 'p-1 rounded-md'"
      />
      <button type="submit" @submit.prevent="logginIn" class="bg-cyan-700 text-black py-1 rounded-md">Login</button>
  </form>
  </div>
  <div v-if="!ready && error" class="absolute w-1/3 px-4 py-3 text-center text-red-800 bg-red-300 rounded-lg bottom-2 right-2 shadow-inner">
      {{ error }}
  </div>
</div>
</template>