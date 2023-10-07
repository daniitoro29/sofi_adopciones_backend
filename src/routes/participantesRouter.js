const { Router } = require('express');

const participantesRouter = Router();

const {createParticipantCampaingHandler, getAllParticipantCampaingHandler, deleteParticipantCampaingByIdHandler, updateParticipantCampaingByIdHandler} = require('../handlers/participantsHandlers');
 

participantesRouter.post('/', createParticipantCampaingHandler);
participantesRouter.get('/', getAllParticipantCampaingHandler);
participantesRouter.delete('/:id', deleteParticipantCampaingByIdHandler);
participantesRouter.put('/:id', updateParticipantCampaingByIdHandler);

module.exports = participantesRouter;