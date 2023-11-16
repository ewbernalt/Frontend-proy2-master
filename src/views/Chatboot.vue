<template>
  <div>
    <div v-for="message in chatMessages" :key="message.id" :class="{ 'user-message': message.isUser, 'bot-message': !message.isUser }">
      {{ message.text }}
    </div>

    <div v-if="showSurvey" class="survey-container">
      <p class="survey-header">¡Bienvenido/a! Para proporcionarte la mejor ayuda, necesitamos algunas respuestas.</p>
      <div v-for="(question, index) in surveyQuestions" :key="index" class="survey-question">
        <p class="question-text">{{ question.text }}</p>
        <select v-model="selectedOptions[index]" class="answer-select">
          <option v-for="(option, optionIndex) in question.options" :key="optionIndex" :value="option">
            {{ option }}
          </option>
        </select>
      </div>

      <button @click="submitSurvey" class="survey-button">Enviar Respuestas</button>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      chatMessages: [],
      showSurvey: true,
      surveyQuestions: [
        {
          text: "1. ¿Cuál es tu género?",
          options: ["Mujer", "Hombre", "Otro"],
        },
        {
          text: "2. ¿Cómo describirías tu relación con el agresor?",
          options: ["Familiar", "Amigo/a", "Pareja", "Conocido/a", "Desconocido/a"],
        },
        {
          text: "3. ¿Has experimentado violencia física?",
          options: ["Sí", "No"],
        },
        {
          text: "4. ¿Has buscado ayuda profesional anteriormente?",
          options: ["Sí", "No"],
        },
        {
          text: "5. ¿En qué ubicación estás experimentando la violencia?",
          options: ["Casa", "Trabajo", "Espacio público", "Otro"],
        },
        {
          text: "6. ¿Te sientes en peligro inmediato?",
          options: ["Sí", "No"],
        },
        {
          text: "7. ¿Has informado previamente incidentes de violencia?",
          options: ["Sí", "No"],
        },
        {
          text: "8. ¿Cómo te sientes emocionalmente en este momento?",
          options: ["Triste", "Asustado/a", "Enojado/a", "Confundido/a", "Otro"],
        },
      ],
      selectedOptions: Array(8).fill(null),
    };
  },
  methods: {
    submitSurvey() {
      if (this.selectedOptions.includes(null)) {
        this.showAlert("Por favor, responde todas las preguntas.");
        return;
      }

      const victimData = {
        genero: this.selectedOptions[0],
        relacionConAgresor: this.selectedOptions[1],
        violenciaFisica: this.selectedOptions[2],
        ayudaProfesionalAnterior: this.selectedOptions[3],
        ubicacionViolencia: this.selectedOptions[4],
        peligroInmediato: this.selectedOptions[5],
        informePrevio: this.selectedOptions[6],
        estadoEmocional: this.selectedOptions[7],
      };

      console.log("Datos de la víctima almacenados:", victimData);

      this.showSurvey = false;
      this.showAlert("¡Gracias por completar la encuesta!");
      this.chatMessages.push({ id: Date.now(), text: "¡Gracias por completar la encuesta!", isUser: false });
    },
    showAlert(message) {
      Swal.fire({
        icon: 'success',
        title: '¡Éxito!',
        text: message,
        confirmButtonColor: '#FFD700',
      });
    },
  },
};
</script>

<style scoped>
.user-message {
  text-align: right;
  background-color: #000;
  color: #FFD700;
}

.bot-message {
  text-align: left;
  background-color: #000;
  color: #FFD700;
}

.survey-container {
  background-color: #000;
  color: #FFD700;
  padding: 20px;
  border-radius: 10px;
  margin: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.survey-header {
  font-weight: bold;
  font-size: 18px;
}

.survey-question {
  margin-bottom: 15px;
  border-bottom: 1px solid #FFD700;
  padding-bottom: 10px;
}

.question-text {
  font-size: 16px;
  font-weight: bold;
}

.answer-select {
  margin-top: 10px;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #FFD700;
  border-radius: 5px;
}

.survey-button {
  margin-top: 20px;
  background-color: #FF4500;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.survey-button:hover {
  background-color: #8B0000;
}

/* Estilo adicional para alertas de SweetAlert2 */
.swal2-popup {
  border-radius: 10px;
  font-size: 16px;
}
</style>

