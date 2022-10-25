const Sequelize  = require ('sequelize')


//Definir objeto seqeulize de conexion 

const sequelize = new Sequelize(
    'devcamp',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql',
        port: '3307'
    }
)

module.exports = sequelize 