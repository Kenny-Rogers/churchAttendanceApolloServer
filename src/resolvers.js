const Member = require('./models/Member')

const resolvers = {
    //requests to read info from server
    Query: {
        members: () => Member.find(), //get all members information
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
        }
    }
}

module.exports = resolvers