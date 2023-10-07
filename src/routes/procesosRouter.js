const { Router } = require('express');

const procesosRouter = Router();
const { getProcessHandler,
    createProcessHandler,
    deleteProcessHandler,
    updateProcessHandler } = require('../handlers/processHandlers');

procesosRouter.post('/', createProcessHandler);
procesosRouter.get('/', getProcessHandler);
procesosRouter.delete('/:id', deleteProcessHandler);
procesosRouter.put('/:id', updateProcessHandler);

module.exports = procesosRouter;