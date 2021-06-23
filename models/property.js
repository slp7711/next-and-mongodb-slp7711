const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    area: {
        type: String,
        required: true
    },
    bathrooms: {
        type: String,
        required: true
    },
    bedrooms: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: [true, 'Please fill out the description!']
    },
    garages: {
        type: String,
        required: true
    },
    imagesNames: {
        type: [String]
    },
    price: {
        type: String,
        required: true
    },
       type: {
        type: String,
        required: [true, 'Please add a type'],
        trim: true
    }


}, { timestamps: true });

const Property = mongoose.models.Property || mongoose.model('Property', propertySchema);

module.exports = Property;


