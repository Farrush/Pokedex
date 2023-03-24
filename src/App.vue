<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/other">Other</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
