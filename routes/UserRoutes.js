const express = require('express')

const router = express.Router()

//Crear rutas(endpoint, uri) para los usuarioss
//Get: obtener datos Read
router.get('/', (req, res)=>{
    res.status(200).json(
        {
        "message": "aqui se van a mostrar todos los usuarios"
        }
    )
})

//2 Crea una ruta de prueba
router.get('/' , (request , response)=>{
    response.send('Ruta check')
} )


//Obtener recurso por id
router.get('/:id' , (req,res)=>{
    res.status(200).json(
        {
        "message": `aqui va a mostrarse el usuario cuyo id es ${req.params.id}`
        }
    ) 
})

//Post: crear un nuevo recurso
router.post('/', (req, res)=>{
    res.status(201).json({
        "message" : "Aqui se va a crear usuarios"
    })
})

//Put o Patch: Actualizar
router.put('/:id' , (req, res)=>{
    res.status(200).json(
        {
            "message": `Aqui se va a actualizar el usuarios ${req.params.id}`
        }
    )
})

//Delete: Borrar un usuarios
router.delete('/:id' , (req, res)=>{
    res.status(200).json(
        {
            "message": `Aqui se va a eliminar el usuarios ${req.params.id}`
        }
    )
})


module.exports = router