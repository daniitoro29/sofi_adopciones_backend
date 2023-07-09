const { Adoptante } = require("../db");

// Esta función puede interactuar con el modelo
const createAdopter = async (Usu_Id, Mas_Id
    ) =>  await Adoptante.create({Usu_Id, Mas_Id});

const getAllAdopters = async () => await Adoptante.findAll();

const deleteAdopterById = async(Ado_User_Id) => await Adoptante.destroy({
    where: {
        Ado_User_Id: Ado_User_Id,
    }
 })

 const updateAdopterById = async (Ado_User_Id, Usu_Id, Mas_Id) => {
    const adopterUpdate = await Adoptante.findByPk(Ado_User_Id);
    adopterUpdate.Usu_Id = Usu_Id;
    adopterUpdate.Mas_Id = Mas_Id;
    await adopterUpdate.save();
    return adopterUpdate
}

module.exports = { createAdopter, getAllAdopters, deleteAdopterById, updateAdopterById }