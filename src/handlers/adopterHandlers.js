const { createAdopter, getAllAdopters, deleteAdopterById, updateAdopterById } = require('../controllers/adopterControllers');

const createAdopterHandler = async (req, res) => {
    const {
      Usu_Id,
      Mas_Id,
    } = req.body;
    try {
      const newAdopter = await createAdopter(Usu_Id, Mas_Id);
      res.send(newAdopter);
    } catch (error) {
      res.status(400).json({error: error.message});
    }
  };

  const getAllAdoptersHandler = async (req, res) => {
    try {
        const allAdopters = await getAllAdopters();
        res.send(allAdopters);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const deleteAdopterByIdHandler = async (req,res) => {
    const {id} = req.params;
    try {
        const deleteEmpleado = await deleteAdopterById(id);
        res.send(deleteEmpleado);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
  }

  const updateAdopterHandler = async (req, res) => {
    const {
      id,
    } = req.params;
    const {Usu_Id, Mas_Id} = req.body;
    try {
      const updateEmpleado = await updateAdopterById(id, Usu_Id, Mas_Id);
      res.send(updateEmpleado);
    } catch (error) {
      res.status(400).json({error: error.message});
    }
  }

module.exports = {createAdopterHandler, getAllAdoptersHandler, deleteAdopterByIdHandler, updateAdopterHandler}