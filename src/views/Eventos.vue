<template>
  <div class="calendario-container">
    <div class="calendario">
      <h1 style="color: #0c0b05;">Calendario de Eventos</h1>

      <div v-for="(evento, index) in eventos" :key="index" class="evento">
        <h2>{{ evento.titulo }}</h2>
        <p><strong>Fecha:</strong> {{ formatearFecha(evento.fecha) }}</p>
        <p><strong>Lugar:</strong> {{ evento.lugar }}</p>
        <p>{{ evento.descripcion }}</p>
        <button @click="mostrarVentanaEmergente(index)">Asistir</button>
      </div>
    </div>

    <calendar-heatmap
      :data="marcadores"
      :start="startDate"
      :color-range="['#eee', '#FFD700']"
    />

    <!-- Ventana emergente para confirmar asistencia -->
    <div v-if="mostrarVentana">
      <div class="ventana-emergente">
        <p>¿Confirmar asistencia al evento?</p>
        <button @click="confirmarAsistencia">Sí</button>
        <button @click="cerrarVentanaEmergente">Cancelar</button>
      </div>
    </div>
  </div>
</template>

<script>
import CalendarHeatmap from 'vue-calendar-heatmap';

export default {
  components: {
    CalendarHeatmap,
  },
  data() {
    return {
      eventos: [
        {
          titulo: 'Conferencia: Prevención de la Violencia',
          fecha: '2023-11-15',
          lugar: 'Online',
          descripcion: 'Edwin Bernal hablará sobre cómo prevenir la violencia.',
        },
        {
          titulo: 'Taller de Empoderamiento',
          fecha: '2023-11-20',
          lugar: 'Centro Comunitario',
          descripcion: 'Aprende técnicas para empoderarte y fortalecer tu autoestima.',
        },
        {
          titulo: 'Charla: Construyendo Relaciones Saludables',
          fecha: '2023-12-05',
          lugar: 'Salón de Eventos',
          descripcion: 'Expertos compartirán consejos para construir relaciones saludables y respetuosas.',
        },
        {
          titulo: 'Curso de Autodefensa Personal',
          fecha: '2023-12-12',
          lugar: 'Gimnasio Municipal',
          descripcion: 'Participa en un curso práctico de autodefensa personal.',
        },
        {
          titulo: 'Seminario: Salud Mental y Bienestar',
          fecha: '2023-12-18',
          lugar: 'Universidad Local',
          descripcion: 'Explora temas relacionados con la salud mental y el bienestar emocional.',
        },
        {
          titulo: 'Encuentro Comunitario: Diálogo Abierto',
          fecha: '2024-01-05',
          lugar: 'Plaza Principal',
          descripcion: 'Participa en un diálogo abierto sobre temas de interés comunitario.',
        },
        {
          titulo: 'Conversatorio: Resolución de Conflictos',
          fecha: '2024-01-15',
          lugar: 'Centro Cívico',
          descripcion: 'Expertos compartirán estrategias para la resolución pacífica de conflictos.',
        },
        {
          titulo: 'Taller de Comunicación Asertiva',
          fecha: '2024-02-02',
          lugar: 'Biblioteca Municipal',
          descripcion: 'Mejora tus habilidades de comunicación para relaciones más saludables.',
        },
        {
          titulo: 'Foro: Igualdad de Género en el Trabajo',
          fecha: '2024-02-20',
          lugar: 'Centro de Convenciones',
          descripcion: 'Analiza la igualdad de género en el ámbito laboral con profesionales destacados.',
        },
        {
          titulo: 'Evento Cultural: Celebración de la Diversidad',
          fecha: '2024-03-10',
          lugar: 'Teatro Municipal',
          descripcion: 'Disfruta de actuaciones culturales que celebran la diversidad y la inclusión.',
        },
      ],
      mostrarVentana: false,
      eventoSeleccionado: null,
      startDate: '2023-11-01',
      marcadores: [],
    };
  },
  methods: {
    formatearFecha(fecha) {
      const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(fecha).toLocaleDateString('es-ES', opciones);
    },
    mostrarVentanaEmergente(index) {
      this.eventoSeleccionado = index;
      this.mostrarVentana = true;
    },
    cerrarVentanaEmergente() {
      this.mostrarVentana = false;
    },
    confirmarAsistencia() {
      console.log(`Confirmada asistencia al evento: ${this.eventos[this.eventoSeleccionado].titulo}`);
      this.cerrarVentanaEmergente();
    },
  },
};
</script>

<style scoped>
.calendario-container {
  display: flex;
}

.calendario {
  max-width: 800px;
  margin: 0 auto;
  background-color: #1a1a1a;
  color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 20px rgba(255, 215, 0, 0.5);
}

.evento {
  margin-bottom: 30px;
  padding: 20px;
  border-radius: 8px;
  background-color: #333;
  box-shadow: 0px 0px 10px rgba(255, 215, 0, 0.3);
}

.evento h2 {
  margin-bottom: 15px;
}

.evento p {
  margin-bottom: 10px;
}

.evento button {
  display: inline-block;
  padding: 10px;
  background-color: #FFD700;
  color: #000;
  text-align: center;
  text-decoration: none;
  border: 2px solid #FFD700;
  border-radius: 8px;
  cursor: pointer;
}

.calendar-heatmap {
  flex-grow: 1;
}

.ventana-emergente {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  z-index: 999;
}
</style>
