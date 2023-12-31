const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('proceso', {
    Proc_Adop_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, 
    },
    Proc_Adop_Formulario: {
        type: DataTypes.INTEGER, 
        allowNull: false,
    },
    Proc_Ado_Fecha_Postulacion:{
        type: DataTypes.DATE,
        allowNull: false,
    },
    Proc_Ado_Estado_Proceso:{
        type: DataTypes.ENUM('En proceso', 'Aprobado', 'Rechazado', 'Disponible'),
        defaultValue: 'Disponible'
    }
    ,
    Mas_Id:{
        type: DataTypes.INTEGER, 
        allowNull: false,
    },
    Ado_User_Id: {
        type: DataTypes.INTEGER, 
        allowNull: false,
    }
  }, {timestamps: false});
};