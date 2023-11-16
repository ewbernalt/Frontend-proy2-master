<template>
  <div>
    <h1 style="color: #0c0b05 ;">Información sobre Violencias</h1>

    <div v-for="(tipo, index) in tiposViolencia" :key="index" class="info-violencia" :style="{ backgroundColor: tipo.color, color: tipo.textColor }">
      <h2>{{ tipo.nombre }}</h2>
      <p>{{ tipo.descripcion }}</p>
      <p><strong>Consecuencias:</strong> {{ tipo.consecuencias }}</p>
      <p><strong>Leyes y Normativas:</strong> {{ tipo.leyes }}</p>
      <a :href="tipo.enlace" target="_blank">Más información</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tiposViolencia: [
        {
          nombre: 'Violencia Física',
          descripcion: 'La violencia física involucra el uso de la fuerza para causar daño físico o lesiones a otra persona.',
          consecuencias: 'Lesiones físicas, traumatismos emocionales.',
          leyes: 'Ley 1674 sobre violencia física.',
          color: '#FFD700',
          textColor: '#000',
          enlace: 'https://oig.cepal.org/es/laws/1/country/bolivia-6',
        },
        {
          nombre: 'Violencia Psicológica',
          descripcion: 'La violencia psicológica se refiere a tácticas que afectan la salud mental y emocional de una persona.',
          consecuencias: 'Problemas de salud mental, baja autoestima.',
          leyes: 'Normativas LEY Nº 348 que abordan la violencia psicológica.',
          color: '#000',
          textColor: '#FFD700',
          enlace: 'http://www.silep.gob.bo/norma/12781/ley_actualizada',
        },
        // Agrega más tipos según sea necesario
      ],
    };
  },
};
</script>

<style scoped>
.info-violencia {
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 8px;
}

.info-violencia h2 {
  margin-bottom: 10px;
}

.info-violencia a {
  display: block;
  margin-top: 10px;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  border: 2px solid #0c0b05;
  border-radius: 8px;
  cursor: pointer;
}
</style>
