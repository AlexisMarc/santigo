const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');

//Dependencia a la conexion a la base de datos 
const connectdb = require('./config/db') //(Importacion)


//Dependencias a las rutas
const bootcampRoutes = require('./routes/BootcampRoutes')
const UserRoutes = require('./routes/UserRoutes')

//Establecer el archivo de configuración con variables de entorno del proyecto
dotenv.config({
    path: './config_env/config.env'
})

//1 Crear el objetos de app
const app = express()

//Ejecutar (Esto se debe hacer antes de las rutas)
connectdb()

app.use('/api/v1/bootcamps' , bootcampRoutes)
app.use('/api/v1/users' , UserRoutes)

//3 Ejecutar servidor de desarrollo de express 
app.listen(process.env.PORT , ()=>{
    console.log(`Servidor iniciado en puerto:${process.env.PORT}`.bgBlue.white)
})