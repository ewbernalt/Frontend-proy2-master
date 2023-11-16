<template>
  <div>
    <h1 style="color: #0c0b05; text-align: center; margin-bottom: 20px;">
      Geolocalización y Envío de Ubicación
    </h1>
    <div id="map" style="height: 400px; border: 2px solid #000; border-radius: 8px;"></div>
    <button @click="sendLocation" class="send-button">Enviar Ubicación</button>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      map: null,
      marker: null,
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          this.map = L.map("map").setView([latitude, longitude], 15);

          L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "&copy; OpenStreetMap contributors",
          }).addTo(this.map);

          this.marker = L.marker([latitude, longitude], { draggable: true }).addTo(
            this.map
          );
          this.marker.bindPopup("Ubicación del incidente").openPopup();

          this.map.on("click", this.onMapClick);
        },
        (error) => {
          console.error(`Error obteniendo la ubicación: ${error.message}`);
        }
      );
    },
    onMapClick(e) {
      const { lat, lng } = e.latlng;
      this.marker.setLatLng([lat, lng]).update();
    },
    sendLocation() {
      const { lat, lng } = this.marker.getLatLng();
      console.log("Ubicación seleccionada:", lat, lng);

      Swal.fire({
        icon: "success",
        title: "Ubicación Enviada Exitosamente",
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          popup: "black-gold-popup",
          content: "black-gold-popup-content",
          closeButton: "black-gold-popup-close",
        },
      });
    },
  },
};
</script>

<style scoped>
#map {
  margin-top: 20px;
  width: 100%;
}

.send-button {
  background-color: #FFD700;
  color: #FF0000;
  border: 2px solid #000;
  border-radius: 8px;
  padding: 10px;
  margin-top: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.send-button:hover {
  background-color: #FF4500;
}

.black-gold-popup {
  background-color: #000 !important;
  border: 2px solid #FFD700 !important;
}

.black-gold-popup-content {
  color: #FFD700 !important;
}

.black-gold-popup-close {
  color: #FFD700 !important;
}
</style>
