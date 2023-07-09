const { Router } = require('express');
const adoptersRouter = Router();
const {
    createAdopterHandler,
    getAllAdoptersHandler,
    deleteAdopterByIdHandler,
    updateAdopterHandler
} = require('../handlers/adopterHandlers');

adoptersRouter.post('/', createAdopterHandler );
adoptersRouter.get('/', getAllAdoptersHandler );
adoptersRouter.delete('/:id', deleteAdopterByIdHandler );
adoptersRouter.put('/:id', updateAdopterHandler );

module.exports = adoptersRouter;