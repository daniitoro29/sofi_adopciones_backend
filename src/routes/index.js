const { Router } = require('express');
const usersRouter = require('./usersRouter.js');
const rolesRouter = require('./rolesRouter');
const empleadosRouter = require('./empleadosRouter');
const volunteersRouter = require('./volunteersRouter');
const petsRouter = require('./petsRouter');
const adoptersRouter = require('./adoptersRouter.js');
const adoptionsRouter = require('./adoptionsRouter.js');
const campaingsRouter = require('./campaignsRouter.js');

const mainRouter = Router();

mainRouter.use('/users', usersRouter); 
mainRouter.use('/roles', rolesRouter);
mainRouter.use('/voluntarios', volunteersRouter)
mainRouter.use('/empleados', empleadosRouter);
mainRouter.use('/pets', petsRouter);
mainRouter.use('/adopters', adoptersRouter);
mainRouter.use('/adoptions', adoptionsRouter);
mainRouter.use('/campaings', campaingsRouter);

module.exports = mainRouter;