<script setup lang="ts">
    import { RouterView } from 'vue-router';
</script>

<template>
    <!-- <div class="flex h-screen items-center justify-center px-">
        <RouterView class="w-full"/>
    </div> -->
    <div class="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
    <div class="w-full max-w-sm md:max-w-3xl">
        <RouterView />
    </div>
  </div>
</template>