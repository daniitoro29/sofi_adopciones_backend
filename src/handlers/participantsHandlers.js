const { createParticipantCampaing, getAllParticipantCampaing, getParticipantCampaingById, deleteParticipantCampaingById, updateParticipantCampaingById } = require('../controllers/participantsController');

const createParticipantCampaingHandler = async (req,res) => {
    const {Cam_Id,Vol_Id,Ado_User_Id,Mas_Id} = req.body;
        try {
            const newParticipantCampaing = await createParticipantCampaing(Cam_Id,Vol_Id,Ado_User_Id,Mas_Id)
            res.send(newParticipantCampaing);
        } catch (error) {
            res.status(400).json({error: error.message});
        }
}

const getAllParticipantCampaingHandler = async (req, res) => {
    try {
        const allParticipantCampaing = await getAllParticipantCampaing();
        res.send(allParticipantCampaing);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const deleteParticipantCampaingByIdHandler = async (req,res) => {
    const {id} = req.params;
    try {
        const deleteParticipateCampaing = await deleteParticipantCampaingById(id);
        res.send(deleteParticipateCampaing);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const updateParticipantCampaingByIdHandler = async (req, res) => {
    const {id} = req.params;
    const {Cam_Id,Vol_Id,Ado_User_Id,Mas_Id} = req.body;
    try {
        const updateParticipantCampaing = await updateParticipantCampaingById(id, Cam_Id,Vol_Id,Ado_User_Id,Mas_Id);
            res.send(updateParticipantCampaing);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}
module.exports = {createParticipantCampaingHandler, getAllParticipantCampaingHandler, deleteParticipantCampaingByIdHandler, updateParticipantCampaingByIdHandler}