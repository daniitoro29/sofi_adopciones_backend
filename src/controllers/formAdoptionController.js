const { FormularioAdopcion } = require("../db");

// Esta función puede interactuar con el modelo
const createForm = async (Form_Nombre,
    Form_CedulaDocumento,
    Form_Edad,
    Form_TelefonoCasa,
    Form_Ocupacion,
    Form_Direccion,
    Form_Telefono,
    Form_Celular,
    Form_Correo,
    Form_NumeroPersonasFamilia,
    Form_Adultos,
    Form_Ninos,
    Form_Bebes,
    Form_EdadFamiliares,
    Form_MotivoAdopcion,
    Form_ExperienciaMascotasAntes,
    Form_CausasNoTenerMascotaAhora,
    Form_AutorizacionAdopcion,
    Form_DecisionMiembrosHogar,
    Form_AsuncionGastosMascota,
    Form_TienePatioTerrazaJardin,
    Form_Cubierto,
    Form_DestinoViviendaMascota,
    Form_LugarDormirMascota,
    Form_ConocimientoGastosMascota,
    Form_MascotasActuales,
    Form_PeriodoAjusteMascota) => await FormularioAdopcion.create({
        Form_Nombre,
        Form_CedulaDocumento,
        Form_Edad,
        Form_TelefonoCasa,
        Form_Ocupacion,
        Form_Direccion,
        Form_Telefono,
        Form_Celular,
        Form_Correo,
        Form_NumeroPersonasFamilia,
        Form_Adultos,
        Form_Ninos,
        Form_Bebes,
        Form_EdadFamiliares,
        Form_MotivoAdopcion,
        Form_ExperienciaMascotasAntes,
        Form_CausasNoTenerMascotaAhora,
        Form_AutorizacionAdopcion,
        Form_DecisionMiembrosHogar,
        Form_AsuncionGastosMascota,
        Form_TienePatioTerrazaJardin,
        Form_Cubierto,
        Form_DestinoViviendaMascota,
        Form_LugarDormirMascota,
        Form_ConocimientoGastosMascota,
        Form_MascotasActuales,
        Form_PeriodoAjusteMascota
    });

const getAllForms = async () => await FormularioAdopcion.findAll();
const deleteFormById = async (Proc_Adop_Formulario) => await FormularioAdopcion.destroy({
    where: {
        Proc_Adop_Formulario: Proc_Adop_Formulario
    }
})

const updateFormId = async (Proc_Adop_Formulario, Form_Nombre,
    Form_CedulaDocumento,
    Form_Edad,
    Form_TelefonoCasa,
    Form_Ocupacion,
    Form_Direccion,
    Form_Telefono,
    Form_Celular,
    Form_Correo,
    Form_NumeroPersonasFamilia,
    Form_Adultos,
    Form_Ninos,
    Form_Bebes,
    Form_EdadFamiliares,
    Form_MotivoAdopcion,
    Form_ExperienciaMascotasAntes,
    Form_CausasNoTenerMascotaAhora,
    Form_AutorizacionAdopcion,
    Form_DecisionMiembrosHogar,
    Form_AsuncionGastosMascota,
    Form_TienePatioTerrazaJardin,
    Form_Cubierto,
    Form_DestinoViviendaMascota,
    Form_LugarDormirMascota,
    Form_ConocimientoGastosMascota,
    Form_MascotasActuales,
    Form_PeriodoAjusteMascota) => {
    const formUpdate = await FormularioAdopcion.findByPk(Proc_Adop_Formulario);
    formUpdate.Form_Nombre = Form_Nombre;
    formUpdate.Form_CedulaDocumento =Form_CedulaDocumento;
    formUpdate.Form_Edad =Form_Edad;
    formUpdate.Form_TelefonoCasa = Form_TelefonoCasa;
    formUpdate.Form_Ocupacion = Form_Ocupacion;
    formUpdate.Form_Direccion = Form_Direccion;
    formUpdate.Form_Telefono = Form_Telefono;
    formUpdate.Form_Celular = Form_Celular;
    formUpdate.Form_Correo = Form_Correo;
    formUpdate.Form_NumeroPersonasFamilia = Form_NumeroPersonasFamilia;
    formUpdate.Form_Adultos = Form_Adultos;
    formUpdate.Form_Ninos = Form_Ninos;
    formUpdate.Form_Bebes = Form_Bebes;
    formUpdate.Form_EdadFamiliares = Form_EdadFamiliares;
    formUpdate.Form_MotivoAdopcion = Form_MotivoAdopcion;
    formUpdate.Form_ExperienciaMascotasAntes = Form_ExperienciaMascotasAntes;
    formUpdate.Form_CausasNoTenerMascotaAhora = Form_CausasNoTenerMascotaAhora;
    formUpdate.Form_AutorizacionAdopcion = Form_AutorizacionAdopcion;
    formUpdate.Form_DecisionMiembrosHogar = Form_DecisionMiembrosHogar;
    formUpdate.Form_AsuncionGastosMascota = Form_AsuncionGastosMascota;
    formUpdate.Form_TienePatioTerrazaJardin = Form_TienePatioTerrazaJardin;
    formUpdate.Form_Cubierto = Form_Cubierto;
    formUpdate.Form_DestinoViviendaMascota =  Form_DestinoViviendaMascota;
    formUpdate.Form_LugarDormirMascota = Form_LugarDormirMascota;
    formUpdate.Form_ConocimientoGastosMascota = Form_ConocimientoGastosMascota;
    formUpdate.Form_MascotasActuales = Form_MascotasActuales;
    formUpdate.Form_PeriodoAjusteMascota = Form_PeriodoAjusteMascota;
    await formUpdate.save();
    return formUpdate
}
module.exports = { createForm, getAllForms, deleteFormById, updateFormId };
