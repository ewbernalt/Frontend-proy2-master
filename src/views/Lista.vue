<template>
    <div class="container1-lista">
        <h1>LISTA DE <span>USUARIOS</span></h1>        
    </div>
    <div class="container2-lista">
        <table>
            <thead>
                <tr>
                    <th>idUsuario</th>        
                    <th>Usuario</th>          
                    <th>Correo</th>
                    <th>Foto</th>        
                    <th>Rol</th>        
                    <th>CI</th>
                    <th class="thver"></th>        
                        <th class="theditar"></th>      
                        <th class="theliminar"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="usuario in usuarios">
                    <td>{{usuario.idUsuario}}</td>
                    <td>{{usuario.usuario}}</td>
                    <td>{{usuario.correo}}</td>
                    <td>{{usuario.foto}}</td>
                    <td>{{usuario.rol}}</td>
                    <td>{{usuario.ciPersona}}</td>
                    <td class="thver"><button class="btn0" type="submit">VER</button></td>
                    <td class="theditar"><button class="btn1">EDITAR</button></td>
                    <td class="theliminar"><button class="btn2">ELIMINAR</button></td>
                </tr>

                
                
            </tbody>
        </table>
    </div>
</template>

<script>
    import axios from 'axios'

    export default{
        name:'Lista',
        data(){
            return{
               usuarios:[] 
            }
        },
        methods:{
            deleteUsuarios(){
                axios.delete(`/usuarios/${idUsuario}`)
            .then(data =>{
                console.log(data.data)
            })
            .catch(error =>{
                console.log(error)
            })
            }
        },
        mounted() {       
            axios.get('/usuarios')
            .then(data =>{
                console.log(data.data[0])
                this.usuarios=data.data[0];
            })
            .catch(error =>{
                console.log(error, "xxxxx lista")
            })
            
        },
    }
</script>

<style scoped>

.container1-lista, .container2-lista{
    width: 1330px;
    margin: 10px auto 30px auto;
    /*border: 2px solid rgb(91, 157, 34);*/
    background-color:#121615;
    
    
    
}



.container1-lista h1{
    margin:20px;
    border: 20px;
    padding: 20px
    
}

table{
    width: 100%;
}

table, th, td{
    border-bottom: 2px solid rgb(82, 82, 80);
    border-collapse: collapse;
    /*border:2px solid rgb(91, 157, 34);*/
}



th, td{
    padding: 20px;
    width: 200px;
}

table td img{
    width: 100px;
    margin: 2px auto;
}

td img{
    width: 100%;
    border: 2px solid;
}


.container1-lista h1{
    text-align: center;
}

.container1-lista span{
    color: #05da93;
}

.btn0{
    background-color: #05da93;
    border-radius: 5px;
    width: 100px;
    height: 30px;
}
.btn1{
    background-color: #055ada;
    border-radius: 5px;
    width: 100px;
    height: 30px;
}

.btn2{
    background-color: rgb(226, 157, 8);
    border-radius: 5px;
    width: 100px;
    height: 30px;

    
}

/*.theditar, .theliminar, .thver{
    border:none;
    
}*/
</style>