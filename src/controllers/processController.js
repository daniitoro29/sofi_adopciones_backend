
const { Proceso } = require("../db");
 
// Esta función puede interactuar con el modelo
const createProcess = async (Proc_Ado_Fecha_Postulacion, Proc_Ado_Estado_Proceso, Mas_Id, Ado_User_Id) => await Proceso.create({Proc_Ado_Fecha_Postulacion, Proc_Ado_Estado_Proceso, Mas_Id, Ado_User_Id});

const getAllProcess = async () => await Proceso.findAll();
const deleteProcessById = async (Rol_Id) => await Proceso.destroy({
    where:{
        Proc_Adop_Id:Proc_Adop_Id
    }
})

const updateProcessId = async (Proc_Adop_Id, Proc_Adop_Formulario,Proc_Ado_Fecha_Postulacion, Proc_Ado_Estado_Proceso, Mas_Id, Ado_User_Id) => {
    const processUpdate = await Proceso.findByPk(Proc_Adop_Id);
    processUpdate.Proc_Adop_Formulario = Proc_Adop_Formulario;
    processUpdate.Proc_Ado_Fecha_Postulacion = Proc_Ado_Fecha_Postulacion;
    processUpdate.Proc_Ado_Estado_Proceso = Proc_Ado_Estado_Proceso;
    processUpdate.Mas_Id = Mas_Id;
    processUpdate.Ado_User_Id = Ado_User_Id;
    await processUpdate.save();
    return processUpdate
}
module.exports = { createProcess, getAllProcess, deleteProcessById, updateProcessId};