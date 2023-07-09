const { Router } = require('express');

const petsRouter = Router();
const {createPetHandler, getAllPetsHandler, deletePetByIdHandler, updatePetByIdHandler } = require('../handlers/petsHandlers');

petsRouter.post('/', createPetHandler);
petsRouter.get('/', getAllPetsHandler);
petsRouter.delete('/:id', deletePetByIdHandler);
petsRouter.put('/:id', updatePetByIdHandler);

module.exports = petsRouter;