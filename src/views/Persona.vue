<template>
    <div class="container-persona">
        <h1 class="logo-persona">REGISTRO DE <span>USUARIO</span></h1>

        <div class="contact-wrapper-persona">
            <div class="contact-form-persona">
                <h2 class="logo2-persona">DATOS <span>PERSONALES</span></h2>
                <form v-on:submit.prevent="registrarPersona">
                    <p>
                        <label for="ci">C.I</label>
                        <input type="number" v-model="ci" required>
                    </p>
                    <p>
                        <label for="ci">Expedito</label>
                        <select v-model="expedito">
                            <option disabled >Seleccionar</option>
                            <option value="LP">LP</option>
                            <option value="CB">CB</option>
                            <option value="SC">SC</option>
                            <option value="OR">OR</option>
                            <option value="PT">PT</option>
                            <option value="CH">CH</option>
                            <option value="BE">BE</option>
                            <option value="PD">PD</option>
                            <option value="TJ">TJ</option>
                        </select>
                    </p>
                    <p>
                        <label for="Nombres">Nombres</label>
                        <input type="text" v-model="nombre" required>
                    </p>

                    <p>
                        <label for="paterno">Ap. Paterno</label>
                        <input type="text" v-model="paterno">
                    </p>

                    <p>
                        <label for="materno">Ap. Materno</label>
                        <input type="text" v-model="materno">
                    </p>

                    <p>
                        <label for="date">F. Nacimiento</label>
                        <input type="date" v-model="fecnac" required>
                    </p>

                    <p>
                        <label for="sexo">Sexo</label>

                        <select v-model="sexo">
                            <option disabled >Seleccionar</option>
                            <option value="MASCULINO">Masculino</option>
                            <option value="FEMENINO">Femenino</option>
                            <option value="OTRO">Otro</option>
                        </select>
                    </p>

                    <p>
                        <label for="civil">Estado Civil</label>

                        <select v-model="civil">
                            <option disabled >Seleccionar</option>
                            <option value="SOLTERO">Soltero</option>
                            <option value="CASADO">Casado</option>
                            <option value="DIVORCIADO">Divorciado</option>
                            <option value="VIUDO">Viudo</option>
                        </select>
                    </p>

                    <p>
                        <label>Telf</label>
                        <input type="number" v-model="telf" required>
                    </p>

                    <p>
                        <label>Ocupación</label>
                        <input type="text" v-model="ocupacion" required>
                    </p>

                    <p>
                        <label>Nacionalidad</label>
                        <input type="text" v-model="nacionalidad"  required>
                    </p>
                    <p>
                        <label>Apodo</label>
                        <input type="text" v-model="apodo" required>
                    </p>


                    <p class="block-persona">
                        <button type="submit">SIGUIENTE</button>
                    </p>


                </form>
            </div>
        </div>
    </div>
    <div v-if="registroExitoso" class="modal fade show" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Registro Exitoso</h5>
            <button type="button" class="close" @click="cerrarModal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Tu registro ha sido exitoso.</p>
          </div>
        </div>
      </div>
    </div>
  
</template>

<script>

    export default{
        name:'Persona',
        data() {
            
            return {
                
                ci:"",
                expedito:"",              
                nombre:"",
                paterno:"",
                materno:"",
                fecnac:"",
                sexo:"",
                civil:"",
                telf:"",
                nacionalidad:"",
                ocupacion:"",
                apodo:""
            }
        },
        
        methods:{
            registrarPersona(){
                let jsn={
                    "ci":this.ci+"-"+this.expedito.toUpperCase(),              
                    "nombre":this.nombre.toUpperCase(),
                    "paterno":this.paterno.toUpperCase(),
                    "materno":this.materno.toUpperCase(),
                    "fecnac":this.fecnac,
                    "sexo":this.sexo.toUpperCase(),
                    "civil":this.civil.toUpperCase(),
                    "telf":this.telf,
                    "nacionalidad":this.nacionalidad.toUpperCase(),
                    "ocupacion":this.ocupacion.toUpperCase(),
                    "apodo":this.apodo.toUpperCase()
                };
                this.axios.post('personas', jsn)
                .then(data =>{
                    
                    if(data.status==200){
                        this.$router.push('Usuario');
                    }
                    else{
                        alert("Algo no salió bien");
                    }
                })
                .catch(error =>{
                    alert(error);
                })
            }
        }
    }
    
</script>
<style scoped>
    .container-persona {
        max-width: 1170px;
        margin: 30px auto;
        padding: 1.5em;
        border: 2px solid #FFD700; /* Dorado más intenso */
        background-color: #000; /* Fondo negro */
        text-align: center;
    }

    .logo-persona {
        font-size: 3em;
        padding-bottom: 20px;
        color: #FFD700; /* Dorado más intenso */
    }

    .logo-persona span,
    .logo2-persona span {
        color: #FF4500; /* Guindo más claro */
    }

    .contact-wrapper-persona {
        box-shadow: 0px 0px 15px 5px #FFD700; /* Sombra dorada */
        border: 2px solid #FF4500; /* Guindo más claro */
        background-color: #000; /* Fondo negro */
        padding: 2em;
    }

    .contact-form-persona {
        background-color: #dfaf13; /* Fondo negro */
        padding: 20px; /* Espacio interno mayor */
    }

    .contact-form-persona form p {
        margin: 0;
        padding: 1em;
    }

    .contact-form-persona form {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        max-width: 1050px;
        border: 2px solid #FF4500; /* Guindo más claro */
        gap: 20px; /* Mayor espacio entre los elementos */
        padding: 20px; /* Espacio interno mayor */
    }

    .contact-form-persona form .block-persona {
        grid-column: 2/4;
    }

    .contact-form-persona input, .contact-form-persona select {
        width: 100%;
        padding: 1em;
        border: 2px solid #FFD700; /* Dorado más intenso */
        background: #FF4500; /* Guindo más claro */
        color: #fff; /* Texto blanco */
        font-size: 1.2em; /* Tamaño de letra más grande */
        transition: background-color 0.5s ease;
        font-weight: bold; /* Hace que el texto sea más nítido */
    }

    .contact-form-persona button {
        text-transform: uppercase;
        padding: 1.5em;
        border: none;
        background: none;
        color: #FFD700; /* Dorado más intenso */
    }

    .contact-form-persona button:hover,
    .contact-form-persona button:focus {
        background: #FFD700; /* Cambio a dorado más intenso al pasar el cursor */
        color: #000; /* Texto negro */
    }

    /* Pantallas grandes */
    @media (min-width: 700px) {
        body {
            padding: 0 4rem;
        }

        .contact-wrapper-persona {
            display: grid;
            grid-template-columns: 2fr 1fr;
        }

        .contact-wrapper-persona > * {
            padding: 2em;
        }
    }
</style>

