<template>
    <section>
      <h2>SEGUNDA</h2>
      <h3>VENTANA</h3>
   
    <h2>Formulario</h2>
    <form @submit.prevent="handleSubmit">
      <label for="email">Correo electrónico:</label>
      <input
        id="email"
        v-model="email"
        type="text"
        @input="validateEmail"
      />
      <p v-if="emailError" style="color: red">{{ emailError }}</p>

      <button type="submit">Enviar</button>
    </form>

    </section>
    <RouterLink :to="volverInicio()">
        <button>VOLVER(segundo boton)</button>
    </RouterLink>
     <el-alert v-show="showAlert" title="asdfadswfads" type="error" show-icon   :closable="false"
 />
</template>

<script setup>
function volverInicio(){
  return `/`
}

import { ref } from 'vue'

const email = ref('')
const emailError = ref('')
const showAlert = ref(false);

const validateEmail = () => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!regex.test(email.value)) {
    emailError.value = 'Correo electrónico inválido use arroba'
    showAlert.value=true;
  } else {
    emailError.value = ''
    showAlert.value=false;

  }
}

const handleSubmit = () => {
  validateEmail()
  if (!emailError.value) {
    alert('Formulario enviado correctamente')
  }
}



</script>

<style scoped>
section{
  height: 500px;
  background-color: rgba(204, 175, 255, 0.251);
}
.alerta{
  width: 100px;
}
</style>