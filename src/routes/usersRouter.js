const { Router } = require('express');
const usersRouter = Router();
const { 
    createUserHandler, 
    getUserHandler, 
    getUsersHandler, 
    deleteUserHandler,
    updateUserHandler,
    banerUserHanler
} = require('../handlers/usersHandlers');

usersRouter.get('/', getUsersHandler);
usersRouter.post('/', createUserHandler);
usersRouter.get('/:id', getUserHandler);
usersRouter.put('/:id', updateUserHandler);
usersRouter.delete('/:id', deleteUserHandler);
usersRouter.put('/:id/ban', banerUserHanler);

module.exports = usersRouter;