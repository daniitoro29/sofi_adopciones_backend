const { Router } = require('express');
const usersRouter = require('./usersRouter.js');
const rolesRouter = require('./rolesRouter');
const volunteersRouter = require('./volunteersRouter');
const petsRouter = require('./petsRouter');
const adoptersRouter = require('./adoptersRouter.js');
const campaingsRouter = require('./campaignsRouter.js');
const participantesRouter = require('./participantesRouter.js');
const procesosRouter = require('./procesosRouter.js');
const formRouter = require('./formAdoptionRouter.js');

const mainRouter = Router();

mainRouter.use('/users', usersRouter); 
mainRouter.use('/roles', rolesRouter);
mainRouter.use('/voluntarios', volunteersRouter)
mainRouter.use('/pets', petsRouter);
mainRouter.use('/adopters', adoptersRouter);
mainRouter.use('/campaings', campaingsRouter);
mainRouter.use('/participants', participantesRouter);
mainRouter.use('/process', procesosRouter);
mainRouter.use('/form', formRouter);

module.exports = mainRouter;