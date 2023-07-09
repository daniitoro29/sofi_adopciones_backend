const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('adopcion', {
    Ado_Id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    Ado_User_Id: {
        type: DataTypes.UUID,
    },
    Emp_Id: {
        type: DataTypes.UUID,
    },
    Ado_Formulario: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Ado_Fecha_Postulacion:{
        type: DataTypes.DATE,
        allowNull: false,
    },
    Ado_Estado_Proceso: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  }, {timestamps: false});
};