const mongoose = require('mongoose');
const {Schema} = mongoose;

const TimeSchema = new Schema({
    
    userid:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    isteamMember:{
        type: Boolean,
        required: true
    },
    startTime: { type: String },
    endTime: { type: String },
    
    
  timeInSeconds: { type: String },
  
  totalTime: Object, 
  locations: [
    {
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true },
        timestamp: { type: Date, default: Date.now } // Timestamp for when the location was recorded
    }
]
});

module.exports = mongoose.model('timeschema',TimeSchema)