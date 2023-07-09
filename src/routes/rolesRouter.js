const { Router } = require('express');

const rolesRouter = Router();
const {   getRolesHandler,
    createRolHandler, deleteRolHandler, updateRolHandler} = require('../handlers/rolesHandlers');

rolesRouter.get('/',getRolesHandler)

//rolesRouter.get('/:id', getRolHandler)

rolesRouter.post('/', createRolHandler);
rolesRouter.delete('/:id', deleteRolHandler);
rolesRouter.put('/:id', updateRolHandler);
module.exports = rolesRouter;