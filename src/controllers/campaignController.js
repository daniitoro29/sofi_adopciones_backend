const { Campana } = require("../db");

// Esta función puede interactuar con el modelo
const createCampaing = async ( 
Usu_Id,
Mas_Id,
Emp_Id,
Cam_Lugar,
Cam_Descripcion,
Cam_Fecha_Campana) =>  
await Campana.create({Usu_Id,
    Mas_Id,
    Emp_Id,
    Cam_Lugar,
    Cam_Descripcion,
    Cam_Fecha_Campana});

const getAllCampaings = async () => await Campana.findAll();

const deleteCampaingById = async(Cam_Id) => await Campana.destroy({
    where: {
        Cam_Id: Cam_Id,
    }
 })

 const updateCampaingById = async (Cam_Id, Usu_Id,
    Mas_Id,
    Emp_Id,
    Cam_Lugar,
    Cam_Descripcion,
    Cam_Fecha_Campana) => {
    const campaingUpdate = await Campana.findByPk(Cam_Id);
    campaingUpdate.Usu_Id = Usu_Id;
    campaingUpdate.Mas_Id = Mas_Id;
    campaingUpdate.Emp_Id = Emp_Id;
    campaingUpdate.Cam_Lugar = Cam_Lugar;
    campaingUpdate.Cam_Descripcion = Cam_Descripcion;
    campaingUpdate.Cam_Fecha_Campana = Cam_Fecha_Campana;
    await campaingUpdate.save();
    return campaingUpdate
}

module.exports = { createCampaing, getAllCampaings, deleteCampaingById, updateCampaingById }