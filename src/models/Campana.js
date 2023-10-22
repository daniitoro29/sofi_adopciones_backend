const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('campana', {
    Cam_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, 
    },
    Cam_Lugar:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    Cam_Descripcion:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    Cam_Fecha_Campana:{
        type: DataTypes.DATE,
        allowNull: false,
    }
  }, {timestamps: false});
};