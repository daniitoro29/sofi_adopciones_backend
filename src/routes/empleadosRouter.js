const { Router } = require('express');
const empleadosRouter = Router();
const {
    createEmpleadoHandler,
    getAllEmpleadosHandler,
    deleteEmpleadoByIdHandler,
    updateEmpleadoHandler
} = require('../handlers/empleadosHandlers');

empleadosRouter.post('/', createEmpleadoHandler);
empleadosRouter.get('/', getAllEmpleadosHandler);
empleadosRouter.delete('/:id', deleteEmpleadoByIdHandler);
empleadosRouter.put('/:id', updateEmpleadoHandler);

module.exports = empleadosRouter;