//including needed models
const { ApolloServer } = require('apollo-server-express')
const express = require('express')
const mongoose= require('mongoose')

//including other files 
const { port, db_username, db_password, db_name } = require('./config')
const resolvers  = require('./src/resolvers')
const typeDefs  = require('./src/typeDefs');

//IIFE to start server
(async () => {
    //create Express app server
    const app = express();
    
    //setting up apollo server
    const server = new ApolloServer({
        typeDefs,
        resolvers
    })
    
    //applying server to app
    server.applyMiddleware({ app })
    
    //ensuring mongoDb connection is secured
    await mongoose.connect(`mongodb+srv://${db_username}:${db_password}@cluster0-avv4c.mongodb.net/${db_name}?retryWrites=true&w=majority`, {useNewUrlParser: true})
    
    //running the server
    app.listen({ port }, () => 
        console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`)
    )
})()
