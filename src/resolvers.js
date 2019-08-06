const Cat = require('./models/Cat')

const resolvers = {
    Query: {
        hello: () => 'hello',
        cats: () => Cat.find(),
        members: () => 'all members',
        addMember:(_, {id}) => 'member'
    },
    
    Mutation: {
        createCat: async (_, {name}) => {
            const kitty = new Cat({name})
            await kitty.save()
            return kitty
        }
    }
}

module.exports = resolvers