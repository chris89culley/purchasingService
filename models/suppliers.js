const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SupplierSchema = new Schema ({
    name : String,
    site : String,
    api : String,
    type : String
});

const Supplier = mongoose.model('suppliers', SupplierSchema);

module.exports =  Supplier;