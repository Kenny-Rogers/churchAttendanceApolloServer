const mongoose = require('mongoose')

const Attendance = mongoose.model('Attendance', {
    date: {type: Date, unique : true},
    members: [{type:mongoose.Schema.Types.ObjectId, ref:'Member'}]
})

module.exports = Attendance