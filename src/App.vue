<template>
  <div class="app">
    <nav class="navbar">
      <div class="nav-links">
        <div class="nav-row">
          <router-link to="/menu" class="nav-button">EVIDENCIAS</router-link>
          <router-link to="/login" class="nav-button">INICIASESIÓN/REGÍSTRATE</router-link>
          <router-link to="/denuncia" class="nav-button">DENUNCIAS</router-link>
          <router-link to="/alerta" class="nav-button">ALERTA</router-link>
        </div>
        <div class="nav-row">
          <router-link to="/denunciaanonima" class="nav-button">DENUNCIAANO</router-link>
          <router-link to="/geolocalizacion" class="nav-button">GEOLOCALIZACIÓN</router-link>
          <router-link to="/informacion" class="nav-button">INFORMACIÓN</router-link>
          <router-link to="/chatboot" class="nav-button">CHATBOT</router-link>
          <router-link to="/eventos" class="nav-button">EVENTOS</router-link>
        </div>
      </div>
    </nav>
    <div class="header">
      <div class="title-logo-container">
        <h1 class="title">DENUNCIA LA VIOLENCIA</h1>
        <div class="logo-container">
          <img src="@/assets/logo.png" alt="Logo" class="logo">
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Login from './views/Login.vue';

export default {
  name: 'App',
  RouterView: Login
}
</script>

<style scoped>
/* Estilos anteriores... */

body {
  background-color: #ffd30d;
  font-family: 'Arial', sans-serif;
  margin: 0;
}

.navbar {
  background-color: #9d8002;
  text-align: center;
  padding: 20px 0;
}

.nav-links {
  display: flex;
  flex-direction: column; /* Cambiado a columna para que las filas estén una encima de la otra */
  align-items: center;
}

.nav-row {
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-button {
  text-decoration: none;
  color: #ebdc07;
  background-color: #292821;
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 5px;
  margin: 0 10px;
  border: 2px solid #181815;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, box-shadow 0.3s;
}

.nav-button:hover {
  background-color: #c50505;
}

.header {
  background-color: #d6bb0b;
  padding: 30px;
  text-align: center;
}

.title-logo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo-container {
  margin-top: 20px;
}

.logo {
  width: 50px;
  height: auto;
}

.title {
  color: #ffd30d;
  font-size: 48px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 10px;
  -webkit-text-stroke: 2px #000000;
  background-color: #dcb30f;
  padding: 10px;
  border: 2px solid #a18a0b;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}
</style>
