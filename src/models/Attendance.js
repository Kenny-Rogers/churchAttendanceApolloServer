const mongoose = require('mongoose')

const Attendance = mongoose.Model('Attendance', {
    date: Date,
    members : [mongoose.Schema.Types.ObjectId]
})

module.exports = Attendance