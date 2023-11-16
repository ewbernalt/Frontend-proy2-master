<template>
  <div>
    <h1 style="color: #0c0b05; text-align: center;">Formulario de Denuncia</h1>
    <form @submit.prevent="submitDenuncia" style="max-width: 400px; margin: 0 auto; background-color: #000; padding: 20px; border: 2px solid #FFD700; border-radius: 8px;">
      <div class="form-group">
        <label for="nombre" style="color: #FFD700;">Nombre del denunciante:</label>
        <input type="text" v-model="denuncia.nombre" class="form-control" required>
      </div>

      <div class="form-group">
        <label for="email" style="color: #FFD700;">Correo electrónico del denunciante:</label>
        <input type="email" v-model="denuncia.email" class="form-control" required>
      </div>

      <div class="form-group">
        <label for="tipoViolencia" style="color: #FFD700;">Tipo de violencia:</label>
        <select v-model="denuncia.tipoViolencia" class="form-control" required>
          <option value="fisica">Violencia Física</option>
          <option value="psicologica">Violencia Psicológica</option>
          <option value="sexual">Violencia Sexual</option>
          <!-- Agrega más opciones según sea necesario -->
        </select>
      </div>

      <div class="form-group">
        <label for="descripcion" style="color: #FFD700;">Descripción de la denuncia:</label>
        <textarea v-model="denuncia.descripcion" class="form-control" required></textarea>
      </div>

      <button type="submit" class="btn-submit" style="background-color: #FFD700; color: #FF0000; border: 2px solid #000; border-radius: 8px; cursor: pointer;">Enviar Denuncia</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      denuncia: {
        nombre: '',
        email: '',
        tipoViolencia: '',
        descripcion: '',
      },
    };
  },
  methods: {
    submitDenuncia() {
      // Aquí puedes realizar acciones como enviar la denuncia al servidor
      // o almacenarla en la base de datos.
      console.log('Denuncia enviada:', this.denuncia);

      // Puedes restablecer el formulario después de enviar la denuncia si es necesario
      this.denuncia = {
        nombre: '',
        email: '',
        tipoViolencia: '',
        descripcion: '',
      };
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
  padding: 15px; /* Aumentado el tamaño del padding */
  border: 2px solid #FFD700; /* Borde dorado */
  border-radius: 8px; /* Borde redondeado */
  font-size: 16px; /* Aumentado el tamaño de la fuente */
  color: #FFD700; /* Texto dorado */
  background-color: #000; /* Fondo negro */
}

.btn-submit {
  padding: 15px; /* Aumentado el tamaño del padding */
  border: 2px solid #000; /* Borde negro */
  border-radius: 8px; /* Borde redondeado */
  cursor: pointer;
  font-size: 16px; /* Aumentado el tamaño de la fuente */
}
</style>
