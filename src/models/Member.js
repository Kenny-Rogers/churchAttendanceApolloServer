const mongoose = require('mongoose')

const Member = mongoose.model('Member', { 
    full_name: String,
    gender: String,
    dob: Date,
    date_baptized: Date,
    baptized_by: String,
    date_transferred_into_assembly: Date,
    date_transferred_out_of_assembly: Date,
    hometown: String,
    marital_status: String,
    occupation: String,
    remarks: String,
    home_cell: String,
    contact: String
})

module.exports = Member