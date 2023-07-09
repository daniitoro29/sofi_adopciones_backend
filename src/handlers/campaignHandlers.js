const  { createCampaing, getAllCampaings, deleteCampaingById, updateCampaingById } = require('../controllers/campaignController');

const createCampaingHandler = async (req, res) => {
    const {
        Usu_Id,
        Mas_Id,
        Emp_Id,
        Cam_Lugar,
        Cam_Descripcion,
        Cam_Fecha_Campana
    } = req.body;
    try {
      const newCampaing = await createCampaing(Usu_Id,
        Mas_Id,
        Emp_Id,
        Cam_Lugar,
        Cam_Descripcion,
        Cam_Fecha_Campana);
      res.send(newCampaing);
    } catch (error) {
      res.status(400).json({error: error.message});
    }
  };

  const getAllCampaingsHandler = async (req, res) => {
    try {
        const allEmpleados = await getAllCampaings();
        res.send(allEmpleados);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const deleteCampaingByIdHandler = async (req,res) => {
  const {id} = req.params;
  try {
      const deleteEmpleado = await deleteCampaingById(id);
      res.send(deleteEmpleado);
  } catch (error) {
      res.status(400).json({error: error.message});
  }
}

const updateCampaingHandler = async (req, res) => {
  const {
    id,
  } = req.params;
  const {Usu_Id,
    Mas_Id,
    Emp_Id,
    Cam_Lugar,
    Cam_Descripcion,
    Cam_Fecha_Campana} = req.body;
  try {
    const updateCampaing = await updateCampaingById(id, Usu_Id,
        Mas_Id,
        Emp_Id,
        Cam_Lugar,
        Cam_Descripcion,
        Cam_Fecha_Campana);
    res.send(updateCampaing);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
}

module.exports = {createCampaingHandler, getAllCampaingsHandler,deleteCampaingByIdHandler, updateCampaingHandler }