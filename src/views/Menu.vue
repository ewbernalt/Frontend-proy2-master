<template>
    <div class="dashboard">
      <h1 class="dashboard-title">¡Sube la foto de tu evidencia!</h1>
      <form v-on:submit.prevent="subirImg" class="image-upload-form">
        <label for="image" class="file-label">Enianos tu Evidencia</label>
        <input type="file" name="image" class="file-input">
        <button type="submit" class="submit-button">Subir</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        imagenes: [],
        imagen: null,
      };
    },
    methods: {
      subirImg(e) {
        this.imagen = e.target.files[0];
        console.log(this.imagen);
      },
    },
  };
  </script>
  
  <style scoped>
  .dashboard {
    background-color: #000000a3; /* Fondo gris oscuro */
    padding: 20px;
    text-align: center;
  }
  
  .dashboard-title {
    color: #dfd106; /* Texto naranja */
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .image-upload-form {
    margin: 0 auto;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .file-label {
    color: #dfb615e0; /* Texto blanco */
    margin-bottom: 10px;
    font-size: 16px;
  }
  
  .file-input {
    padding: 10px;
    font-size: 14px;
  }
  
  .submit-button {
    background-color: #e2d012; /* Botón naranja */
    color: #0c0a01dc; /* Texto gris oscuro */
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
  }
  
  .submit-button:hover {
    background-color: #ffcc00; /* Cambio a naranja más claro al pasar el cursor */
  }
  </style>
  