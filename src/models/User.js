const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('usuario', {
        Usu_Id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4, // Para que se genere automáticamente
        },
        Rol_Id: {
            type: DataTypes.ENUM("1", "2"), // 1= Administrador y 2= Usuarios
            defaultValue: "2",
            // type: DataTypes.INTEGER, // o el tipo de datos correspondiente a la columna en la tabla "Rol"
            // allowNull: false,
          },
        Usu_Nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Usu_Apellido:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        Usu_Telefono: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Usu_Correo:{
            type: DataTypes.STRING,
            unique: true,
        },
        Usu_Contraseña: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Usu_Genero: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Usu_Estado: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {timestamps: false} // Para que no agregue campos de fecha y hora de creación por defecto
    )
}