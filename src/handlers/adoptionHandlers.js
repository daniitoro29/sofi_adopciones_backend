const {createAdoption, getAllAdoptions, deleteAdoptionById, updateAdoptionById } = require('../controllers/adoptionControllers');

const createAdoptionHandler = async (req, res) => {
    const {
        Ado_User_Id, Emp_Id, Ado_Formulario, Ado_Fecha_Postulacion, Ado_Estado_Proceso
    } = req.body;
    try {
      const newAdopter = await createAdoption(Ado_User_Id, Emp_Id, Ado_Formulario, Ado_Fecha_Postulacion, Ado_Estado_Proceso);
      res.send(newAdopter);
    } catch (error) {
      res.status(400).json({error: error.message});
    }
  };

  const getAllAdoptionsHandler = async (req, res) => {
    try {
        const allAdopters = await getAllAdoptions();
        res.send(allAdopters);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const deleteAdoptionByIdHandler = async (req,res) => {
    const {id} = req.params;
    try {
        const deleteEmpleado = await deleteAdoptionById(id);
        res.send(deleteEmpleado);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
  }

  const updateAdoptionHandler = async (req, res) => {
    const {
      id,
    } = req.params;
    const { Ado_User_Id, Emp_Id, Ado_Formulario, Ado_Fecha_Postulacion, Ado_Estado_Proceso} = req.body;
    try {
      const updateEmpleado = await updateAdoptionById(id, Ado_User_Id, Emp_Id, Ado_Formulario, Ado_Fecha_Postulacion, Ado_Estado_Proceso);
      res.send(updateEmpleado);
    } catch (error) {
      res.status(400).json({error: error.message});
    }
  }

  module.exports = {createAdoptionHandler, getAllAdoptionsHandler, deleteAdoptionByIdHandler, updateAdoptionHandler}