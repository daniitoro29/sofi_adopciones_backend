const { Router } = require('express');
const formRouter = Router();
const { 
    createFormHandler,
    getFormsHandler,
    deleteFormHandler,
    getFormIdHandler,
    updateFormHandler
} = require('../handlers/formAdoptionHandlers.js');

formRouter.get('/', getFormsHandler);
formRouter.post('/', createFormHandler);
formRouter.get('/:id', getFormIdHandler);
formRouter.put('/:id', updateFormHandler);
formRouter.delete('/:id', deleteFormHandler);


module.exports = formRouter;