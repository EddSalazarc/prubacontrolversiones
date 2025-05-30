<template>
  <div>
    <h2>PRIMERA</h2>
    <h3>VENTANA</h3>
        <RouterLink :to="volverInicio()">
        <button>VOLVER</button>
        </RouterLink>
  </div>
</template>

<script setup>
function volverInicio(){
  return `/`
}
</script>
