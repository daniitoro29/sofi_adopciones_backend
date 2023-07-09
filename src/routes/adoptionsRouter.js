const { Router } = require('express');
const adoptionsRouter = Router();
const {
    createAdoptionHandler,
    getAllAdoptionsHandler,
    deleteAdoptionByIdHandler,
    updateAdoptionHandler
} = require('../handlers/adoptionHandlers');

adoptionsRouter.post('/',  createAdoptionHandler);
adoptionsRouter.get('/',  getAllAdoptionsHandler);
adoptionsRouter.delete('/:id',  deleteAdoptionByIdHandler);
adoptionsRouter.put('/:id',  updateAdoptionHandler);

module.exports = adoptionsRouter;