import express from 'express';
//import { protect } from '../middleware/authMiddleware.js';
//import protect from '../middleware/authMiddleware.js';
import{
    createCampaign, 
    updateCampaign, 
    deleteCampaign, 
    getCampaign, 
    getAllCampaign
}from '../controllers/campaignController.js';

//import Campaign from '../models/campaignModel.js';
const router = express.Router();

router.post('/create-campaign', createCampaign);
router.get('/all-campaign', getAllCampaign);
router.get('/:id', getCampaign);
router.put('/:id', updateCampaign);
router.delete('/:id', deleteCampaign);

export default router;