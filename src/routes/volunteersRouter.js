const { Router } = require('express');
const volunteersRouter = Router();
const { 
    createVolunteerHandler, getAllVolunteersHandler, deleteVolunteerHandler, updatedVolunteerHandler
} = require('../handlers/volunteersHandlers');

volunteersRouter.post('/', createVolunteerHandler);
volunteersRouter.get('/', getAllVolunteersHandler);
// volunteersRouter.get('/:id', getUserHandler);
volunteersRouter.put('/:id', updatedVolunteerHandler);
volunteersRouter.delete('/:id', deleteVolunteerHandler);

module.exports = volunteersRouter;