const { Adopcion } = require("../db");

// Esta función puede interactuar con el modelo
const createAdoption = async (Ado_User_Id, Emp_Id, Ado_Formulario, Ado_Fecha_Postulacion, Ado_Estado_Proceso) =>  
await Adopcion.create({Ado_User_Id, Emp_Id, Ado_Formulario, Ado_Fecha_Postulacion, Ado_Estado_Proceso});

const getAllAdoptions = async () => await Adopcion.findAll();

const deleteAdoptionById = async(Ado_Id) => await Adopcion.destroy({
    where: {
        Ado_Id: Ado_Id,
    }
 })

 const updateAdoptionById = async (Ado_Id, Ado_User_Id, Emp_Id, Ado_Formulario, Ado_Fecha_Postulacion, Ado_Estado_Proceso) => {
    const adoptionUpdate = await Adopcion.findByPk(Ado_Id);
    adoptionUpdate.Ado_User_Id = Ado_User_Id;
    adoptionUpdate.Emp_Id = Emp_Id;
    adoptionUpdate.Ado_Formulario = Ado_Formulario;
    adoptionUpdate.Ado_Fecha_Postulacion = Ado_Fecha_Postulacion;
    adoptionUpdate.Ado_Estado_Proceso = Ado_Estado_Proceso;
    await adoptionUpdate.save();
    return adoptionUpdate
}

module.exports = { createAdoption, getAllAdoptions, deleteAdoptionById, updateAdoptionById }