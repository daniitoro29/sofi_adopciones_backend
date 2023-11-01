const { Sequelize } = require('sequelize');
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

// Conexión con la base de datos
const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/sofiadopcionesdb`,
   {
      logging: false, // set to console.log to see the raw SQL queries
      native: false, // lets Sequelize know we can use pg-native for ~30% more speed
   }
);
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
   .filter(
      (file) =>
         file.indexOf('.') !== 0 &&
         file !== basename &&
         file.slice(-3) === '.js'
   )
   .forEach((file) => {
      modelDefiners.push(require(path.join(__dirname, '/models', file)));
   });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
   entry[0][0].toUpperCase() + entry[0].slice(1),
   entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Rol, Usuario,Voluntario, Adoptante, Mascota, Participantes, Campana, Proceso } = sequelize.models;

// Aca vendrian las relaciones
Rol.hasMany(Usuario, {foreignKey: 'Rol_Id'});
Usuario.belongsTo(Rol, {foreignKey: 'Rol_Id'});

Usuario.hasOne(Voluntario, { foreignKey: 'Usu_Id' });
Voluntario.belongsTo(Usuario, { foreignKey: 'Usu_Id' });

Usuario.hasOne(Adoptante, { foreignKey: 'Usu_Id' });
Adoptante.belongsTo(Usuario, { foreignKey: 'Usu_Id' });

Mascota.hasMany(Adoptante, {foreignKey: 'Mas_Id'});
Adoptante.belongsTo(Mascota, {foreignKey: 'Mas_Id'});

Mascota.hasOne(Proceso, {foreignKey: 'Mas_Id'});
Proceso.belongsTo(Mascota, {foreignKey: 'Mas_Id'});

Mascota.belongsTo(Voluntario, {foreignKey: 'Vol_Id'});
Voluntario.hasMany(Mascota, {foreignKey: 'Vol_Id'});

Adoptante.hasMany(Proceso, {foreignKey: 'Ado_User_Id'});
Proceso.belongsTo(Adoptante, {foreignKey: 'Ado_User_Id'});

Campana.hasMany(Participantes, {foreignKey: 'Cam_Id'});
Participantes.belongsTo(Campana, {foreignKey: 'Cam_Id'});

Voluntario.hasMany(Participantes, {foreignKey: 'Vol_Id'});
Participantes.belongsTo(Voluntario, {foreignKey: 'Vol_Id'});

Adoptante.hasMany(Participantes, {foreignKey: 'Ado_User_Id'});
Participantes.belongsTo(Adoptante, {foreignKey: 'Ado_User_Id'});

Mascota.hasMany(Participantes, {foreignKey: 'Mas_Id'});
Participantes.belongsTo(Mascota, {foreignKey: 'Mas_Id'});

module.exports = {
   ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
   conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
