const { Router } = require('express');
const usersRouter = Router();
const { 
    createUserHandler, 
    getUserHandler, 
    getUsersHandler, 
    deleteUserHandler,
    updateUserHandler
} = require('../handlers/usersHandlers');

usersRouter.get('/usuarios', getUsersHandler);
usersRouter.post('/', createUserHandler);
usersRouter.get('/:id', getUserHandler);
usersRouter.put('/:id', updateUserHandler);
usersRouter.delete('/:id', deleteUserHandler);

module.exports = usersRouter;