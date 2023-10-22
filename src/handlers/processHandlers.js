const {createProcess, getAllProcess, deleteProcessById, updateProcessId} = require('../controllers/processController');

const getProcessHandler = async (req, res) => {
    try {
      const allProcess = await getAllProcess();
      res.json(allProcess);
    } catch (error) {
      res.status(400).json({error: error.message});
    }
  };
  
  const createProcessHandler = async (req, res) => {
    const {
        Proc_Ado_Fecha_Postulacion,
        Proc_Ado_Estado_Proceso,
        Mas_Id,
        Ado_User_Id
    } = req.body;
    try {
      const newProcess = await createProcess(Proc_Ado_Fecha_Postulacion,
        Proc_Ado_Estado_Proceso,
        Mas_Id,
        Ado_User_Id);
      res.send(newProcess);
    } catch (error) {
      res.status(400).json({error: error.message});
    }
  };
  
  const deleteProcessHandler = async (req, res) => {
    const {
      id,
    } = req.params
    try {
      const deleteRol = await deleteRolById(id);
      res.send(deleteRol);
    } catch (error) {
      res.status(400).json({error: error.message});
    }
  }
  
  const updateProcessHandler = async (req, res) => {
    const {
      id,
    } = req.params;
    const {  Proc_Adop_Formulario, Proc_Ado_Fecha_Postulacion,
        Proc_Ado_Estado_Proceso,
        Mas_Id,
        Ado_User_Id} = req.body;
    try {
      const updateRol = await updateRolId(id, Proc_Adop_Formulario, Proc_Ado_Fecha_Postulacion,
        Proc_Ado_Estado_Proceso,
        Mas_Id,
        Ado_User_Id);
      res.send(updateRol);
    } catch (error) {
      res.status(400).json({error: error.message});
    }
  }
  module.exports = {
    getProcessHandler,
    createProcessHandler,
    deleteProcessHandler,
    updateProcessHandler
  };