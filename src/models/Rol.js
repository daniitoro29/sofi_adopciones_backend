const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('rol', {
    Rol_Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, 
    },
    Rol_Nombre: {
      type: DataTypes.STRING,
      allowNull: false,

    }
  }, {timestamps: false});
};
