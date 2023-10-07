const { Mascota } = require("../db");

const createPet = async (
 Mas_Nombre,
 Mas_Especie,
 Mas_Genero,
 Mas_Raza,
 Mas_Tamano,
 Mas_Descripcion,
 Mas_Foto,
 Mas_Fecha_Rescate,
 Mas_Lugar_Rescate,
 Mas_Edad,
 Mas_Estado_Adopcion,
 Vol_Id
) =>
 await Mascota.create({
  Mas_Nombre,
  Mas_Especie,
  Mas_Genero,
  Mas_Raza,
  Mas_Tamano,
  Mas_Descripcion,
  Mas_Foto,
  Mas_Fecha_Rescate,
  Mas_Lugar_Rescate,
  Mas_Edad,
  Mas_Estado_Adopcion,
  Vol_Id
 });

 const getAllPets = async () => await Mascota.findAll();

 const deletePetById = async(Mas_Id) => await Mascota.destroy({
    where: {
        Mas_Id: Mas_Id,
    }
 })

const updatePetById = async ( Mas_Id, Mas_Nombre,
    Mas_Especie,
    Mas_Genero,
    Mas_Raza,
    Mas_Tamano,
    Mas_Descripcion,
    Mas_Foto,
    Mas_Fecha_Rescate,
    Mas_Lugar_Rescate,
    Mas_Edad,
    Mas_Estado_Adopcion ) => {
        const petUpdate = await Mascota.findByPk(Mas_Id);
        petUpdate.Mas_Nombre= Mas_Nombre,
        petUpdate.Mas_Especie = Mas_Especie,
        petUpdate.Mas_Genero = Mas_Genero,
        petUpdate.Mas_Raza = Mas_Raza,
        petUpdate.Mas_Tamano = Mas_Tamano,
        petUpdate.Mas_Descripcion = Mas_Descripcion,
        petUpdate.Mas_Foto = Mas_Foto,
        petUpdate.Mas_Fecha_Rescate = Mas_Fecha_Rescate,
        petUpdate.Mas_Lugar_Rescate = Mas_Lugar_Rescate,
        petUpdate.Mas_Edad = Mas_Edad,
        petUpdate.Mas_Estado_Adopcion = Mas_Estado_Adopcion,
        await petUpdate.save();
        return petUpdate;
}

module.exports = {createPet, getAllPets, deletePetById, updatePetById};
