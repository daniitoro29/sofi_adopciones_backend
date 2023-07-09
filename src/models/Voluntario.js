const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('voluntario', {
    Vol_Id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4, // Para que se genere automáticamente
    },
    Usu_Id: {
        type: DataTypes.UUID,
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
