const { Rol } = require("../db");
 
// Esta función puede interactuar con el modelo
const createRol = async (Rol_Id,Rol_Nombre) => await Rol.create({Rol_Id,Rol_Nombre});

const getAllRoles = async () => await Rol.findAll();
const deleteRolById = async (Rol_Id) => await Rol.destroy({
    where:{
        Rol_Id:Rol_Id
    }
})

const updateRolId = async (Rol_Id,Rol_Nombre) => {
    const rolUpdate = await Rol.findByPk(Rol_Id);
    rolUpdate.Rol_Nombre = Rol_Nombre;
    await rolUpdate.save();
    return rolUpdate
}
module.exports = { createRol, getAllRoles, deleteRolById, updateRolId};