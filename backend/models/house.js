const mongoose = require('mongoose');

const { Schema } = mongoose;

const HouseSchema = new Schema({
    address: String,
    suburb: String,
    description: String,
    pricePerWeek: Number,
    imageSrc: String
});

const House = mongoose.model('House', HouseSchema);

module.exports = House;