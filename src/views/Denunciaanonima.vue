<template>
    <div>
      <h1 style="color: #0c0b05;">Formulario de Denuncia Anónima</h1>
      <form @submit.prevent="enviarDenunciaAnonima" style="max-width: 400px; margin: 0 auto; border: 2px solid #FFD700; padding: 20px; border-radius: 8px; background-color: #000;">
        <div class="form-group">
          <label for="tipoViolencia" style="color: #FFD700;">Tipo de violencia:</label>
          <select v-model="denunciaAnonima.tipoViolencia" class="form-control" required>
            <option value="fisica">Violencia Física</option>
            <option value="psicologica">Violencia Psicológica</option>
            <option value="sexual">Violencia Sexual</option>
            <!-- Agrega más opciones según sea necesario -->
          </select>
        </div>
  
        <div class="form-group">
          <label for="descripcion" style="color: #FFD700;">Descripción de la denuncia:</label>
          <textarea v-model="denunciaAnonima.descripcion" class="form-control" required style="height: 100px;"></textarea>
        </div>
  
        <button type="submit" class="btn-submit" style="background-color: #FFD700; color: #000; border: 2px solid #FFD700; border-radius: 8px; cursor: pointer;">Enviar Denuncia Anónima</button>
      </form>
  
      <!-- Ventana emergente de aviso de denuncia exitosa -->
      <div v-if="mostrarMensajeExito" class="ventana-emergente">
        <p>¡Denuncia enviada con éxito!</p>
        <button @click="cerrarVentanaEmergente">Cerrar</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        denunciaAnonima: {
          tipoViolencia: '',
          descripcion: '',
        },
        mostrarMensajeExito: false,
      };
    },
    methods: {
      enviarDenunciaAnonima() {
        // Aquí puedes realizar acciones como enviar la denuncia al servidor
        // o almacenarla en la base de datos.
        console.log('Denuncia Anónima enviada:', this.denunciaAnonima);
  
        // Mostrar mensaje de éxito
        this.mostrarMensajeExito = true;
  
        // Puedes restablecer el formulario después de enviar la denuncia si es necesario
        this.denunciaAnonima = {
          tipoViolencia: '',
          descripcion: '',
        };
      },
      cerrarVentanaEmergente() {
        this.mostrarMensajeExito = false;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos para el formulario */
  .form-group {
    margin-bottom: 20px;
  }
  
  .form-control {
    width: 100%;
    padding: 15px;
    border: 2px solid #FFD700; /* Borde dorado */
    border-radius: 8px;
    font-size: 16px;
    color: #FFD700; /* Texto dorado */
    background-color: #000; /* Fondo negro */
  }
  
  .btn-submit {
    padding: 15px;
    border: 2px solid #FFD700; /* Borde dorado */
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
  }
  
  /* Estilos para la ventana emergente */
  .ventana-emergente {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    background-color: #fff;
    border: 2px solid #FFD700;
    border-radius: 8px;
  }
  </style>
  