const {createEmpleado, getAllEmpleados, deleteEmpleadoById, updateEmpleadoById} = require('../controllers/empleadosControllers');

const createEmpleadoHandler = async (req, res) => {
    const {
      Usu_Id,
      Emp_Cargo,
    } = req.body;
    try {
      const newEmpleado = await createEmpleado(Usu_Id, Emp_Cargo);
      res.send(newEmpleado);
    } catch (error) {
      res.status(400).json({error: error.message});
    }
  };

  const getAllEmpleadosHandler = async (req, res) => {
    try {
        const allEmpleados = await getAllEmpleados();
        res.send(allEmpleados);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const deleteEmpleadoByIdHandler = async (req,res) => {
  const {id} = req.params;
  try {
      const deleteEmpleado = await deleteEmpleadoById(id);
      res.send(deleteEmpleado);
  } catch (error) {
      res.status(400).json({error: error.message});
  }
}

const updateEmpleadoHandler = async (req, res) => {
  const {
    id,
  } = req.params;
  const {Emp_Cargo} = req.body;
  try {
    const updateEmpleado = await updateEmpleadoById(id, Emp_Cargo);
    res.send(updateEmpleado);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
}

  module.exports = {createEmpleadoHandler, getAllEmpleadosHandler, deleteEmpleadoByIdHandler, updateEmpleadoHandler};