const { Participantes } = require("../db");

// Esta función puede interactuar con el modelo
const createParticipantCampaing = async (Cam_Id,Vol_Id,Ado_User_Id,Mas_Id
    ) =>  await Participantes.create({Cam_Id,Vol_Id,Ado_User_Id,Mas_Id});

// Traer todos los usuarios
const getAllParticipantCampaing = async() => await Participantes.findAll();

// Traer un usuario por id
const getParticipantCampaingById = async(id) => {
    const participantCampaing = await Participantes.findByPk(id);
    return participantCampaing;
}

// Eliminar un usuario
const deleteParticipantCampaingById = async(Part_Id) => await Participantes.destroy({
    where: {
        Part_Id : Part_Id
    }});

// Actualizar un usuario
const updateParticipantCampaingById = async(Part_Id, Cam_Id,Vol_Id,Ado_User_Id,Mas_Id) => {
    const participateCampaingUpdate = await Participantes.findByPk(Part_Id);
    participateCampaingUpdate.Cam_Id = Cam_Id, 
    participateCampaingUpdate.Vol_Id = Vol_Id,
    participateCampaingUpdate.Ado_User_Id = Ado_User_Id, 
    participateCampaingUpdate.Mas_Id = Mas_Id, 
    await participateCampaingUpdate.save();
    return participateCampaingUpdate;
}

module.exports = { createParticipantCampaing, getAllParticipantCampaing, getParticipantCampaingById, deleteParticipantCampaingById, updateParticipantCampaingById };