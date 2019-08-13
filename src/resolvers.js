const Member = require('./models/Member')
const Attendance = require('./models/Attendance')


const resolvers = {
    //requests to read info from server
    Query: {
        members: async () => await Member.find(), //get all members information
        // attendances: () => Attendance.find(),
        memberById: (_, {id}) => Member.findById(id)
    },
    
    //requests to create,update or delete an object  
    Mutation: {
        //create a new member
        addMember: async (_, { full_name,gender,dob,date_baptized,baptized_by, date_transferred_into_assembly,
                        date_transferred_out_of_assembly, hometown, marital_status, occupation,
                        remarks, home_cell, contact }) => {
            const member = new Member({
                full_name, gender, dob, date_baptized, baptized_by, date_transferred_into_assembly,
                date_transferred_out_of_assembly, hometown, marital_status, occupation,
                remarks, home_cell,contact })
            await member.save()
            return member
        },

        addAttendance: async (_, {date, members}) =>{
            let attendance = await Attendance.findOne({date: date})
            if (attendance) 
                attendance.members.push(members) 
            else 
                attendance = new Attendance({date, members}) 
            await attendance.save()
            return attendance
        }    
    }
}

module.exports = resolvers