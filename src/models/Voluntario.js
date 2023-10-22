const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('voluntario', {
    Vol_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, 
    },
    Usu_Id: {
      type: DataTypes.INTEGER, // o el tipo de datos correspondiente a la columna en la tabla "Rol"
      allowNull: false,
    },
    Vol_Tipo_Ayuda: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Vol_Fecha_Ayuda: {
        type: DataTypes.DATE,
        allowNull: false,
      }
  }, {timestamps: false});
};
