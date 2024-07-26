const mongoose = require('mongoose');
const { Schema } = mongoose;

const CustomerSignatureSchema = new Schema({
    estimateId: {  
        type: Schema.Types.ObjectId, 
        required: true, 
        ref: 'Estimate' 
    },
    customerName: { 
        type: String, 
        required: true 
    },
    documentNumber: { 
        type: String, 
        required: true 
    },
    status: {
        type: String,
        default:'Pending Signature'
    },
    customerEmail: { 
        type: String, 
        required: true 
    },
    customersign: { 
        type: String, 
        // required: true 
    }, 
    lastupdated: { 
        type: String,  
    }, 
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model('CustomerSignature', CustomerSignatureSchema);
