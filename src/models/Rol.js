const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('rol', {
    Rol_Id: {
      type: DataTypes.ENUM("1", "2", "3", "4"), // 1= Administrador , 2= Voluntario , 3=Empleado, 4=Adoptante
      primaryKey: true,
    },
    Rol_Nombre: {
      type: DataTypes.ENUM('Administrador', 'Voluntario', 'Adoptante'),
      allowNull: false,
    }
  }, {timestamps: false});
};
