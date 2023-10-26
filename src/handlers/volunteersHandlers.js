const {createVolunteer, getAllVolunteers, deleteVolunteer, updateVolunteerById} = require('../controllers/volunteersControllers');
  
  const createVolunteerHandler = async (req, res) => {
    const {
       Vol_Tipo_Ayuda, Vol_Fecha_Ayuda, Usu_Id
    } = req.body;
    console.log('Req.body *****', req.body);
    try {
      const newVolunteer = await createVolunteer(Vol_Tipo_Ayuda, Vol_Fecha_Ayuda, Usu_Id);
      res.send(newVolunteer);
    } catch (error) {
      res.status(400).json({error: error});
    }
  };

  const getAllVolunteersHandler = async (req, res) => {
    try {
      const allVolunteers = await getAllVolunteers();
      res.send(allVolunteers);
    } catch (error) {
      res.status(400).json({error:error.message});
    }
  }

  const deleteVolunteerHandler = async (req, res) => {
    const { id } = req.params;
    try {
      const deleteOneVolunteer = await deleteVolunteer(id);
      res.send(deleteOneVolunteer);
    } catch (error) {
      res.send(400).json({error: error.message});
    }
  }

  const updatedVolunteerHandler = async (req, res) => {
    const { id } = req.params;
    const { Vol_Tipo_Ayuda, Vol_Fecha_Ayuda} = req.body;
    try {
      const updateOneVolunteer = await updateVolunteerById(Vol_Tipo_Ayuda, Vol_Fecha_Ayuda, id);
      res.send(updateOneVolunteer);
    } catch (error) {
      res.status(400).json({error: error.message});
    }
  }
  
  module.exports = {
    createVolunteerHandler, getAllVolunteersHandler, deleteVolunteerHandler, updatedVolunteerHandler
  };