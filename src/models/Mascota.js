const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('mascota', {
    Mas_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, 
    },
    Mas_Nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Mas_Especie:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    Mas_Genero: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Mas_Raza:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    Mas_Tamano: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Mas_Descripcion: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    Mas_Foto:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    Mas_Fecha_Rescate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    Mas_Lugar_Rescate: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Mas_Edad: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Mas_Estado_Adopcion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Vol_Id: {
        type: DataTypes.INTEGER, // o el tipo de datos correspondiente a la columna en la tabla "Rol"
        allowNull: false,
    },
  }, {timestamps: false});
};
