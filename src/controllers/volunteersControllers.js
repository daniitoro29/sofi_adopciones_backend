const { Voluntario } = require("../db");
 

const createVolunteer = async (Vol_Tipo_Ayuda, Vol_Fecha_Ayuda,Usu_Id) => await Voluntario.create({Vol_Tipo_Ayuda, Vol_Fecha_Ayuda,Usu_Id});

const getAllVolunteers = async () => await Voluntario.findAll();

const deleteVolunteer = async (Vol_Id) => await Voluntario.destroy({
    where :{
        Vol_Id: Vol_Id
    }
})

const updateVolunteerById = async(Vol_Tipo_Ayuda, Vol_Fecha_Ayuda,Vol_Id) => {
    const volunteerUpdate = await Voluntario.findByPk(Vol_Id);
    if (volunteerUpdate) { 
        volunteerUpdate.Vol_Tipo_Ayuda = Vol_Tipo_Ayuda;
        volunteerUpdate.Vol_Fecha_Ayuda = Vol_Fecha_Ayuda;
        await volunteerUpdate.save();
        return volunteerUpdate;
      } else {
        throw new Error('Volunteer not found');
      }
}

module.exports = { createVolunteer, getAllVolunteers, deleteVolunteer, updateVolunteerById};