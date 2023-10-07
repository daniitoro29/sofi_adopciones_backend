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
        type: DataTypes.UUID,
    },
    Vol_Id: {
        type: DataTypes.UUID,
    },
    Ado_User_Id: {
        type: DataTypes.UUID,
    },
    Mas_Id:{
        type: DataTypes.UUID,
    },
  }, {timestamps: false});
};