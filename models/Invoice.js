const mongoose = require('mongoose');
const {Schema} = mongoose;

const InvoiceSchema = new Schema({
    // unique_id: { type: Number, unique: true },
    invoice_id: { type: Number },
    InvoiceNumber: { 
        type: String 
    },
    customername: {
        type: String,
    },
    customeremail: {
        type: String,
    },
    emailsent: {
        type: String,
        default:'no'
    },
    purchaseorder: {
        type: String,
    },
    date: {
        type: Date,
    },
    duedate: {
        type: Date,
    },
    description: {
        type: String,
    },
    items: [],
    subtotal: {
        type: Number,
        default: 0,
    },
    total: {
        type: Number,
        default: 0,
    },
    amountdue: {
        type: Number,
        default: 0,
    },
    discountTotal: {
        type: String,
    },
    TaxPer: {
        type: String,
    },
    information: {
        type: String,
    },
    tax: {
        type: String,
    },
    job: {
        type: String,
    },
    taxpercentage: {
        type: Number,
        default: 0,
    },
    status: {
        type: String,
        default: 'Saved',
    },
    userid:{
        type: String,
    },
    noteimageUrl:{
        type: String,
    },
    desimageUrl:{
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    isAddSignature: { 
        type: Boolean, 
        default: false 
    },
    isCustomerSign: { 
        type: Boolean, 
        default: false 
    } 

});

module.exports = mongoose.model('Invoice',InvoiceSchema)