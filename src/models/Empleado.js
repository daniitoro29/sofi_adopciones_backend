const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('empleado', {
    Emp_Id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    Usu_Id: {
        type: DataTypes.UUID,
    },
    Emp_Cargo:{
        type: DataTypes.STRING,
        allowNull: false,
    }
  }, {timestamps: false});
};