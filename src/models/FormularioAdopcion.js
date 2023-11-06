const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('FormularioAdopcion', {
        Proc_Adop_Formulario: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        CedulaDocumento: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Edad: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        TelefonoCasa: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        Ocupacion: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        DireccionOficina: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        Telefono: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        Celular: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        CorreoElectronico: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        NumeroPersonasFamilia: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Adultos: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Ninos: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Bebes: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        EdadFamiliares: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        MotivoAdopcion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ExperienciaMascotasAntes: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        CausasNoTenerMascotaAhora: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        AutorizacionAdopcion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        DecisionMiembrosHogar: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        AsuncionGastosMascota: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        TienePatioTerrazaJardin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        Cubierto: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        DestinoViviendaMascota: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        LugarDormirMascota: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ConocimientoGastosMascota: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        MascotasActuales: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        PeriodoAjusteMascota: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }
    });
};
