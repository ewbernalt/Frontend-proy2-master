<template>
    <div class="container-login">
        <div class="content0-login">
            <H3>LA MEJOR AVENTURA QUE PUEDAS TENER, ES VIVIR LA VIDA DE TUS SUEÑOS</H3>
        </div>
        <div class="content1-login">
            <img src="@/assets/lema.png" >
        </div>

        <div class="content2-login">
            <header>
                <h1>¡BIENVENIDO!</h1>
                
            </header>
            <form v-on:submit-login.prevent="iniciarSesion">
                <div class="input-box-login">
                    <label  >USUARIO</label>
                    <input type="text" v-model="usuario" required>
                    <i class='bx bxs-user'></i>
                </div>
                <div class="input-box-login">
                    <label >CONTRASEÑA</label>
                    <input type="password" v-model="contrasenia" required>
                    <i class='bx bxs-lock'></i>
                </div>
                <div class="check-login">
                    <input type="checkbox">Recuérdame
                </div>
                         
                <div class="submit-login">
                    <button type="submit">INGRESAR</button>
                </div>
                <div class="enlaces-login">
                    <a v-on:click="registrarUsuario">Registrarse</a>
                    <br>
                    <a href="#">¿Olvido su contraseña?</a>
                </div>
            </form>
        </div>

    </div>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
</template>

<script>
    import axios from 'axios'
    

    export default{
        name:'Login',
        data() {
            return {                
                usuario:"",
                contrasenia:"",
                error:false,
                error_msg:""
            }

        },
        methods: {
            iniciarSesion(){
                console.log(this.usuario, this.contrasenia,"aaaavvvvv");
                let jsn={
                    "usuario":this.usuario,
                    "contrasenia":this.contrasenia
                };
                 axios.post('/login', jsn)
                .then(data => {
                    console.log("frontend", data);
                    if(data.status==200){
                        alert("Welcome to Date Fuerza")
                        this.$router.push('Lista');
                    }
                    else{
                        alert("Usuario no encontrado")
                    }
                }).catch(error => {
                    alert("Usuario no encontrado");
                    
                })
                
                /*
                await this.axios.post('/login', jsn)
                .then(response => {
                    console.log(response)
                })
                .catch(error =>{
                    var data = error.response.data
                })*/
            },

            registrarUsuario(){
                this.$router.push('Persona');
            }
        },
    }
</script>
<style scoped>
.container-login {
  max-width: 800px;
  border: 2px solid #c4af0b; /* Guinda */
  margin: 90px auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  box-shadow: 0px 0px 15px 5px #FFD700; /* Dorado */
}

.content0-login {
  grid-column: 1/-1;
  color: rgb(197, 169, 12);
  text-align: center;
}

.content1-login {
  grid-column: 1/2;
}

.content2-login {
  grid-column: 2/3;
  background-color: #e3b70a; /* Negro */
}

.content1-login, .content2-login {
  border: 0.5px solid #caaa09d6; /* Guinda */
}

.content2-login h1 {
  text-align: center;
  color: white;
  margin: 20px 0;
  font: italic bold 120% cursive;
}

.content1-login img {
  width: 100%;
  height: 100%;
}

.input-box-login input {
  width: 85%;
  padding: 10px 10px;
  background: transparent;
  border: none;
  border-bottom: 1px solid #FFD700; /* Dorado */
  margin: 5px 5px;
  color: rgba(239, 3, 3, 0.435);
  outline: 0;
}

.input-box-login label {
  color: rgb(165, 6, 6);
  font: italic bold 120% cursive;
}

.submit-login button {
  background: #FFD700; /* Dorado */
  width: 100%;
  border-radius: 10px;
  height: 50px;
  color: #333; /* Negro */
  font: italic bold 120% cursive;
  border: none;
  cursor: pointer;
}

.submit-login button:hover {
  background-color: #FFCC00; /* Dorado más claro al pasar el cursor */
  transition: background-color 0.3s;
}

.check-login {
  text-align: end;
  padding: 5px;
  margin-right: 25px;
  color: rgb(168, 0, 0);
}

.enlaces-login {
  text-align: center;
  padding: 12px 0;
  color: #ff1111; /* Guinda */
}

.enlaces-login a {
  color: #f60505ce; /* Guinda */
  text-decoration: none;
  margin: 0 10px;
}

.enlaces-login a:hover {
  color: rgba(255, 0, 0, 0.637);
}

.input-box-login i {
  position: absolute;
  font-size: 30px;
}
</style>