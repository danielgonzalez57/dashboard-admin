<script setup lang="ts">
// import { useRouter } from ''
</script>

<template>
  <div class="min-h-[100vh] flex flex-col justify-center items-center text-center flex-1 rounded-xl md:min-h-min p-8 border border-zinc-200 dark:border-zinc-800">
    <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-6xl lg:text-7xl">
      Dashboard <span class="text-transparent bg-clip-text bg-gradient-to-r to-[#3a0ca3] from-[#f72585]">StockWiz™</span> 
    </h1>
    <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
      ¡Bienvenido a StockWiz Desde este dashboard podrás gestionar productos, analizar inventario y optimizar operaciones con herramientas intuitivas.
    </p>
  </div>
  <div class="grid auto-rows-min gap-4 md:grid-cols-3">
    <div class="bg-muted/50 aspect-video rounded-xl" />
    <div class="bg-muted/50 aspect-video rounded-xl" />
    <div class="bg-muted/50 aspect-video rounded-xl" /> 
  </div>
</template>
