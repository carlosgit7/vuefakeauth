<template>
<div class="flex flex-col items-center justify-center min-h-screen-nonav space-y-5">
  <h1 class="text-6xl tracking-tighter font-light">Login</h1>
  <div class="shadow-2xl border-1 rounded-md flex items-center justify-center bg-slate-300 overflow-hidden">
  <img src="../assets/loginBG.png" alt="bg-image" class="h-48">
  <form class="flex flex-col space-y-4 p-3">
      <input type="text" class="border-1 p-1 rounded-md" placeholder="Username"/>
      <input type="password" class="border-1 p-1 rounded-md" placeholder="Password"/>
      <button type="submit" class="bg-rose-500 text-rose-900 py-1 rounded-md">Login</button>
  </form>
  </div>
</div>
</template>