const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('participantes', {
    Part_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, 
    },
    Cam_Id: {
        type: DataTypes.INTEGER, // o el tipo de datos correspondiente a la columna en la tabla "Rol"
        allowNull: false,
    },
    Vol_Id: {
        type: DataTypes.INTEGER, // o el tipo de datos correspondiente a la columna en la tabla "Rol"
        allowNull: false,
    },
    Ado_User_Id: {
        type: DataTypes.INTEGER, // o el tipo de datos correspondiente a la columna en la tabla "Rol"
        allowNull: false,
    },
    Mas_Id:{
        type: DataTypes.INTEGER, // o el tipo de datos correspondiente a la columna en la tabla "Rol"
        allowNull: false,
    },
  }, {timestamps: false});
};