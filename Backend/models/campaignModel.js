import mongoose from 'mongoose';

const faqSchema = mongoose.Schema({
    question: {
        type: String,
        required: false,
    },
    answer: {
        type: String,
        required: false,
    }
}, { _id: false });

const campaignSchema = mongoose.Schema({
    campaignType: {
        type: String,
        enum: ['Personal', 'Organizational'],
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    coverImage: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: true,
    },
    fundInformation: {
        amount: {
            type: String,
            required: true,
        },
        deadline: {
            type: Date,
            required: true,
        },
    },
    faqs: [faqSchema],
}, {
    timestamps: true,
});

const Campaign = mongoose.model('Campaign', campaignSchema);

export default Campaign;
