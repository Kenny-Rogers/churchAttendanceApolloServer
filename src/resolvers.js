const Cat = require('./models/Cat')
const Member = require('./models/Member')

const resolvers = {
    Query: {
        hello: () => 'hello',
        cats: () => Cat.find(),
        members: () => Member.find()
    },
    
    Mutation: {
        createCat: async (_, {name}) => {
            const kitty = new Cat({name})
            await kitty.save()
            return kitty
        },
        addMember: async (_, { name,gender,dob,date_baptized,baptized_by, date_transferred_into_assembly,
                        date_transferred_out_of_assembly, hometown, marital_status, occupation,
                        remarks}) => {
            const member = new Member({
                name, gender, dob, date_baptized, baptized_by, date_transferred_into_assembly,
                date_transferred_out_of_assembly, hometown, marital_status, occupation,
                remarks
            })
            await member.save()
            return member
        }
    }
}

module.exports = resolvers