const { Router } = require('express');
const campaingsRouter = Router();
const {
    createCampaingHandler,
    getAllCampaingsHandler,
    deleteCampaingByIdHandler,
    updateCampaingHandler
} = require('../handlers/campaignHandlers');

campaingsRouter.post('/', createCampaingHandler);
campaingsRouter.get('/', getAllCampaingsHandler);
campaingsRouter.delete('/:id', deleteCampaingByIdHandler);
campaingsRouter.put('/:id', updateCampaingHandler);

module.exports = campaingsRouter;