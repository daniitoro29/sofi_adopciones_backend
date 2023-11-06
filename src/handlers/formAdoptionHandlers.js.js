const { createForm, getAllForms, deleteFormById, updateFormId} = require('../controllers/formAdoptionController');


// Crear un usuario
const createFormHandler = async (req, res) => {
    const {Form_Nombre,
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
      Form_PeriodoAjusteMascota } = req.body;
    try {
        const newForm = await createForm(Form_Nombre,
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
          Form_PeriodoAjusteMascota);
        res.json(newForm);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  };
  
  
  

// Traer todos los usuarios
const getFormsHandler = async (req, res) => {
    try {
        const allForms = await getAllForms();
        res.json(allForms);
    } catch (error) {
        res.status(400).json({error: error.message});
    }

};

// Eliminar un usuario
const deleteFormHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteForm = await deleteFormById(id);
        res.json(deleteForm)
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

// Traer un usuario especifico
const getFormIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
      const user = await getUserById(id);
      res.json(user);
  } catch(error){
    res.status(400).json({error: error.message});
  }
};

// Actualizar un usuario
const updateFormHandler = async (req, res) => {
    const { id } = req.params;
    const { Form_Nombre,
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
      Form_PeriodoAjusteMascota} = req.body;
    try {
    const updateForm = await updateFormId(id, Form_Nombre,
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
      Form_PeriodoAjusteMascota);
    res.send(updateForm);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
    
}


module.exports = {
  createFormHandler,
  getFormsHandler,
  deleteFormHandler,
  getFormIdHandler,
  updateFormHandler
};
