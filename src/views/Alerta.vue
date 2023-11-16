<template>
  <div class="container">
    <h1 style="color: #0c0b05;">Botón de Emergencia</h1>

    <div class="mapa" ref="mapa"></div>

    <div class="location-info">
      <p>Última Ubicación:</p>
      <p>Latitud: {{ latitud }}</p>
      <p>Longitud: {{ longitud }}</p>
    </div>

    <button @click="enviarSenalEmergencia" class="btn-emergencia">
      ¡Emergencia!
    </button>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default {
  data() {
    return {
      latitud: null,
      longitud: null,
      mapa: null,
      marcador: null,
    };
  },
  mounted() {
    this.inicializarMapa();
    this.obtenerUbicacion();
  },
  methods: {
    inicializarMapa() {
      this.mapa = L.map(this.$refs.mapa).setView([0, 0], 15);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(this.mapa);

      this.marcador = L.marker([0, 0]).addTo(this.mapa);
    },
    agregarMarcador() {
      this.marcador.setLatLng([this.latitud, this.longitud]).update();
    },
    obtenerUbicacion() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.latitud = position.coords.latitude;
            this.longitud = position.coords.longitude;
            this.mapa.setView([this.latitud, this.longitud], 15);
            this.agregarMarcador();
          },
          (error) => {
            console.error('Error al obtener la ubicación:', error.message);
          }
        );
      } else {
        console.error('La geolocalización no está soportada en este navegador.');
      }
    },
    enviarSenalEmergencia() {
      Swal.fire({
        title: 'Señal de Emergencia',
        text: '¿Estás seguro de enviar una señal de emergencia?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#FFD700',
        cancelButtonColor: '#FF0000',
        confirmButtonText: 'Sí, enviar señal',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          console.log('¡Señal de emergencia enviada!');
          Swal.fire({
            title: '¡Enviado!',
            text: 'La señal de emergencia ha sido enviada exitosamente.',
            icon: 'success',
            confirmButtonColor: '#FFD700',
          });
        }
      });
    },
  },
};
</script>

<style scoped>
.container {
  text-align: center;
  margin-top: 50px;
}

.mapa {
  height: 200px; /* Ajusta la altura según sea necesario */
  width: 100%;
  margin-bottom: 20px;
}

.location-info {
  margin-bottom: 20px;
}

.btn-emergencia {
  width: 120px;
  height: 120px;
  font-size: 18px;
  background-color: #FFD700;
  color: #000000;
  border: 2px solid #FF0000;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.btn-emergencia:hover {
  background-color: #FF4500;
}
</style>
