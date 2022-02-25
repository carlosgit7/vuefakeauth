<template>
<div class="bg-gray-800 px-6">
    <div class="conitainer mx-auto flex justify-between items-center text-white">
        <router-link to="/"><h1 class="tracking-tighter py-6 text-4xl font-light text-green-600 hover:cursor-pointer">
            Basic<span class="font-semibold">Router</span> 
        </h1></router-link>
        <nav>
            <ul class="flex space-x-4 text-gray-400">
                <router-link to="/"><li class="py-8 px-4 hover:cursor-pointer hover:bg-gray-700 hover:text-gray-200">Home</li></router-link>
                <router-link to="/about"><li class="py-8 px-4 hover:cursor-pointer hover:bg-gray-700 hover:text-gray-200">About</li></router-link>
                <router-link to="/contact"><li class="py-8 px-4 hover:cursor-pointer hover:bg-gray-700 hover:text-gray-200">Contact</li></router-link>
            </ul>
        </nav>
    </div>
</div>
</template>