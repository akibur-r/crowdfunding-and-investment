import express from 'express';
import asyncHandler from 'express-async-handler';
import Campaign from '../models/campaignModel.js';

const router = express.Router();

// @desc     Create Campaign
// @route    POST /api/campaign
// @access   public
const createCampaign = asyncHandler(async (req, res) => {
    const { campaignType, category, title, coverImage, description, amount, deadline, faqs } = req.body;

    if(title.length > 20){
        return res.status(400).json({
            message: 'Titile must be in 20 characters'
        })
    }

    const currentDate = new Date();
    const campaignDeadline = new Date(deadline);

    if (campaignDeadline <= currentDate) {
        return res.status(400).json({
            message: 'Deadline must be a future date'
        })
    }

    if (amount > 10000000) {
        return res.status(400).json({
            message: 'Amount must be less than or equal to 10,000,000'
        })
    }
    
    const campaignExists = await Campaign.findOne({ title });
    if (campaignExists) {
        return res.status(400).json({
            message:'Campaign already exists'
        })
    }

    const campaign = await Campaign.create({
        campaignType, 
        category, 
        title, 
        coverImage, 
        description, 
        fundInformation: { amount, deadline },
        faqs
    });
    if (campaign) {
        res.status(201).json({ message: "Campaign created successfully", campaign });
    } else {
        res.status(400);
        throw new Error('Campaign creation failed');
    }
});
// @desc     Update Campaign
// @route    PUT /api/campaign/:id
// @access   public
const updateCampaign = asyncHandler(async (req, res) => {
    const { campaingType, category, title, coverImage, description, amount, deadline, faqs } = req.body;

    const campaign = await Campaign.findById(req.params.id);

    if (campaign) {
        campaign.campaingType = campaingType || campaign.campaingType;
        campaign.category = category || campaign.category;
        campaign.title = title || campaign.title;
        campaign.coverImage = coverImage || campaign.coverImage;
        campaign.description = description || campaign.description;
        campaign.fundInformation = {
            amount: amount || campaign.fundInformation.amount,
            deadline: deadline || campaign.fundInformation.deadline,
        };
        campaign.faqs = faqs || campaign.faqs;

        const updatedCampaign = await campaign.save();
        res.status(200).json({ message: "Campaign updated successfully", updatedCampaign });
    } else {
        res.status(404);
        throw new Error('Campaign not found');
    }
});

// @desc     Delete Campaign
// @route    DELETE /api/campaign/:id
// @access   public
const deleteCampaign = asyncHandler(async (req, res) => {
    const campaign = await Campaign.findById(req.params.id);

    if (!campaign) {
        res.status(404);
        throw new Error('Campaign not found');
    } else {
        await campaign.remove();
        res.status(200).json({ message: "Campaign removed successfully" });
    }
});

// @desc     Get Campaign by ID
// @route    GET /api/campaign/:id
// @access   public
const getCampaign = asyncHandler(async (req, res) => {
    const campaign = await Campaign.findById(req.params.id);

    if (campaign) {
        res.status(200).json(campaign);
    } else {
        res.status(404);
        throw new Error('Campaign not found');
    }
});

// @desc     Get Campaign by ID
// @route    GET /api/campaign/:id
// @access   public
const getAllCampaign = async (req, res) => {

    try {
        const campaign = await Campaign.find({});

        if (campaign) {
            res.status(200).json(campaign);
            // res.status(200).send(campaign);
            // console.log(campaign);
        } else {
            res.status(404);
            throw new Error('Campaign not found');
        }
    } catch (error) {
        console.log(error);
    }
};

export { createCampaign, deleteCampaign, getAllCampaign, getCampaign, updateCampaign };

