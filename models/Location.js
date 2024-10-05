const mongoose = require('mongoose');
const { Schema } = mongoose;

const LocationSchema = new Schema({
    userid: {
        type: String,
        required: true
    },
    lat: {
        type: Number,
        required: true
    },
    lng: {
        type: Number,
        required: true
    },
    timestamp: {
        type: Date,
        // required: true
    }
});

module.exports = mongoose.model('Location', LocationSchema);
