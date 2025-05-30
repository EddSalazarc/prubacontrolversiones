<!-- a.router-link-exact-active -->

<template>
  <nav>
    <ul>
      <li><router-link :to="generateRoute('primera')">PRIMERA VENTANA</router-link></li>
      <li><router-link :to="generateRoute('segunda')">SEGUNDA PAGINA</router-link></li>
    </ul>
  </nav>
</template>

<script setup>
/**
 * Devuelve la ruta formateada
 */
function generateRoute(variable) {
  return `/${variable}`
}
</script>

<style scoped>
</style>
