<template>
    <div class="container-usuario">
        <h1 class="logo-usuario">REGISTRO DE <span>USUARIO</span></h1>

        <div class="contact-wrapper-usuario">
            <div class="contact-form-usuario">
                <h2 class="logo2-usuario">DATOS <span>ADICIONALES</span></h2>
                <form v-on:submit.prevent="registrarUsuario">
                    <p>
                        <label for="usuario">Usuario</label>
                        <input type="text" v-model="usuario" required>
                    </p>
                    
                    <p>
                        <label for="correo">Correo</label>
                        <input type="email" v-model="correo" required>
                    </p>

                    <p>
                        <label for="zona">Zona</label>
                        <input type="text" v-model="zona">
                    </p>

                    <p>
                        <label for="via">Calle/Avenida</label>
                        <input type="text" v-model="via">
                    </p>

                    <p>
                        <label>Contraseña</label>
                        <input type="password" v-model="contrasenia" pattern="[A-Za-z][A-Za-z0-9]*[0-9][A-Za-z0-9]*" title="Una contraseña válida consiste de una letra mayúscula, minúscula y un dígito. La contraseña debe empezar con una letra." required>
                    </p>

                    <p>
                        <label>Confirmar Contraseña</label>
                        <input type="password"  required>
                    </p>

                    <p>
                        <label>Nro de Puerta</label>
                        <input type="number" v-model="nroPuerta"  required>
                    </p>
                    
                    <p>
                        <label>Rol</label>
                        <input type="text" v-model="rolPersona"  required>
                    </p>
                    <p>
                        <label>Ci</label>
                        <input type="text" v-model="ciPersona"  required>
                    </p>
                    
                    <p class="block-usuario">
                        <button type="submit">REGISTRAR</button>
                    </p>


                </form>
            </div>
        </div>
    </div>
</template>

<script>
    /*import ciPersona from './Persona.vue';*/
    export default{
        name:'Usuario',
        data() {
            return {
                rolPersona:"",
                ciPersona:"",
                zona:"",
                via:"",
                nroPuerta:"",

                usuario:"",
                correo:"",
                contrasenia:""

            }
        },
        methods:{
            registrarUsuario(){
                let jsn={
                    'zona':this.zona.toUpperCase(),
                    'via':this.via.toUpperCase(),
                    'nroPuerta':this.nroPuerta,
                    'rol':this.rolPersona.toUpperCase(),
                    'ciPersona':this.ciPersona.toUpperCase(),
                    'usuario':this.usuario,
                    'correo':this.correo,
                    'contrasenia':this.contrasenia
                };
                this.axios.post('usuarios', jsn)
                .then(data =>{
                    if(data.status==200){
                        this.$router.push('Login');
                    }
                    else{
                        alert("Algo no salió bien en usuarios");
                    }
                })
                .catch(error =>{
                    alert("Algo no salió bien usuarios");
                })
            }
        }
    }
</script>
<style scoped>
    * {
        box-sizing: border-box;
    }

    body {
        font-family: Arial, sans-serif;
        background-color: black;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    .container-usuario {
        max-width: 1170px;
        background-color: black;
        padding: 1.5em;
        border: 2px solid #d3d3d3;
        text-align: center;
    }

    .logo-usuario {
        font-size: 2em; /* Reduce el tamaño de fuente para evitar desbordamiento */
        padding-bottom: 20px;
        color: #d3af00;
    }

    .logo-usuario span,
    .logo2-usuario span {
        color: #ff0000;
    }

    .contact-wrapper-usuario {
        box-shadow: 0px 0px 15px 5px #d3af00;
        border: 2px solid #ff0000;
        background-color: black;
    }

    .contact-wrapper-usuario > * {
        padding: 2em;
    }

    .contact-form-usuario {
        background-color: rgb(174, 133, 0);
    }

    .contact-form-usuario form p {
        margin: 0;
        padding: 1em;
    }

    .contact-form-usuario form {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        max-width: 100%; /* Evita que el formulario se desborde del contenedor */
        border: 2px solid #ff0000;
        gap: 10px;
    }

    .contact-form-usuario form .block-usuario {
        grid-column: 2/4;
    }

    .contact-form-usuario button,
    .contact-form-usuario input {
        width: 100%;
        padding: 1em;
        border: 2px solid #0c0a02a7;
        background: #ff0000;
        color: white;
        transition: background-color 0.5s ease;
    }

    .contact-form-usuario button {
        text-transform: uppercase;
        padding: 1.5em;
        border: none;
        background: none;
        color: #332b02;
    }

    .contact-form-usuario button:hover,
    .contact-form-usuario button:focus {
        background: #d3af00;
        color: black;
    }
</style>