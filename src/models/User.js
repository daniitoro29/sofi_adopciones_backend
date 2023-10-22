const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('usuario', {
        Usu_Id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },
        Rol_Id: {
            type: DataTypes.INTEGER, 
            allowNull: false,
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
            defaultValue: "Activo"
        },
    }, {timestamps: false} // Para que no agregue campos de fecha y hora de creación por defecto
    )
}