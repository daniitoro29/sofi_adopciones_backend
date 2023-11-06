const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('FormularioAdopcion', {
        Proc_Adop_Formulario: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Form_Nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Form_CedulaDocumento: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Form_Edad: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Form_TelefonoCasa: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        Form_Ocupacion: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        Form_Direccion: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        Form_Telefono: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        Form_Celular: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Form_Correo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Form_NumeroPersonasFamilia: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Form_Adultos: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Form_Ninos: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Form_Bebes: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Form_EdadFamiliares: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Form_MotivoAdopcion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Form_ExperienciaMascotasAntes: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Form_CausasNoTenerMascotaAhora: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Form_AutorizacionAdopcion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Form_DecisionMiembrosHogar: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Form_AsuncionGastosMascota: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Form_TienePatioTerrazaJardin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        Form_Cubierto: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        Form_DestinoViviendaMascota: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Form_LugarDormirMascota: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Form_ConocimientoGastosMascota: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Form_MascotasActuales: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Form_PeriodoAjusteMascota: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }
    });
};
