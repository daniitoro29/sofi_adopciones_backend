const {createPet, getAllPets, deletePetById, updatePetById} = require('../controllers/petsController');

const createPetHandler = async (req,res) => {
    const {Mas_Nombre,
        Mas_Especie,
        Mas_Genero,
        Mas_Raza,
        Mas_Tamano,
        Mas_Descripcion,
        Mas_Foto,
        Mas_Fecha_Rescate,
        Mas_Lugar_Rescate,
        Mas_Edad,
        Mas_Estado_Adopcion, Vol_Id} = req.body;
        try {
            const newPet = await createPet(Mas_Nombre,
                Mas_Especie,
                Mas_Genero,
                Mas_Raza,
                Mas_Tamano,
                Mas_Descripcion,
                Mas_Foto,
                Mas_Fecha_Rescate,
                Mas_Lugar_Rescate,
                Mas_Edad,
                Mas_Estado_Adopcion, Vol_Id)
            res.send(newPet);
        } catch (error) {
            res.status(400).json({error: error.message});
        }
}

const getAllPetsHandler = async (req, res) => {
    try {
        const allPets = await getAllPets();
        res.send(allPets);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const deletePetByIdHandler = async (req,res) => {
    const {id} = req.params;
    try {
        const deletePet = await deletePetById(id);
        res.send(deletePet);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const updatePetByIdHandler = async (req, res) => {
    const {id} = req.params;
    const {Mas_Nombre,
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
    Vol_Id} = req.body;
    try {
        const updatePet = await updatePetById(id, Mas_Nombre,
            Mas_Especie,
            Mas_Genero,
            Mas_Raza,
            Mas_Tamano,
            Mas_Descripcion,
            Mas_Foto,
            Mas_Fecha_Rescate,
            Mas_Lugar_Rescate,
            Mas_Edad,
            Mas_Estado_Adopcion, Vol_Id);
            res.send(updatePet);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}
module.exports = {createPetHandler, getAllPetsHandler, deletePetByIdHandler, updatePetByIdHandler}