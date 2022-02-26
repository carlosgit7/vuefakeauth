<script setup>
import userAuth from "../composables/userAuth"

const { isAuthenticated, logout } = userAuth();

</script>
<template>
<div class="bg-cyan-700 px-6">
    <div class="conitainer mx-auto flex justify-between items-center">
        <router-link to="/"><h1 class="tracking-tighter py-6 text-4xl font-light text-black hover:cursor-pointer">
            Vue<span class="font-semibold">FakeAuth</span> 
        </h1></router-link>
        <nav>
            <ul class="flex space-x-4 text-gray-800">
                <router-link to="/"><li class="py-8 px-4 hover:cursor-pointer hover:bg-cyan-800 hover:text-gray-200">Home</li></router-link>
                <router-link to="/about"><li class="py-8 px-4 hover:cursor-pointer hover:bg-cyan-800 hover:text-gray-200">About</li></router-link>
                <router-link v-if="!isAuthenticated" to="/login"><li class="py-8 px-4 hover:cursor-pointer hover:bg-cyan-800 hover:text-gray-200">Login</li></router-link>
                <div v-else class="flex">
                    <router-link to="/secret"><li class="py-8 px-4 hover:cursor-pointer hover:bg-cyan-800 hover:text-gray-200">Secret</li></router-link>
                    <button @click="logout"><li class="py-8 px-4 hover:cursor-pointer hover:bg-cyan-800 hover:text-gray-200">Logout</li></button>
                </div>
            </ul>
        </nav>
    </div>
</div>
</template>