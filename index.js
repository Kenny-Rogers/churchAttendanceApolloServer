const { ApolloServer } = require('apollo-server-express')
const express = require('express')
const mongoose= require('mongoose')


const { port, db_username, db_password, db_name } = require('./config')
const resolvers  = require('./src/resolvers')
const typeDefs  = require('./src/typeDefs');

(async () => {
    const app = express();
    
    const server = new ApolloServer({
        typeDefs,
        resolvers
    })
    
    server.applyMiddleware({ app })
    
    await mongoose.connect(`mongodb+srv://${db_username}:${db_password}@cluster0-avv4c.mongodb.net/${db_name}?retryWrites=true&w=majority`, {useNewUrlParser: true})
    
    app.listen({ port }, () => 
        console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`)
    )
})()
