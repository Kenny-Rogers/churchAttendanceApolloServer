
const { ApolloServer, gql } = require('apollo-server-express')
const express = require('express')
const mongoose= require('mongoose')
const dotenv = require('dotenv');
dotenv.config();

const resolvers  = require('./src/resolvers')
const typeDefs  = require('./src/typeDefs')

const username = 'cop-client-system'
const password = 'mECvzOSmw9ohz5T2';

(async () => {
    const app = express();
    
    const server = new ApolloServer({
        typeDefs,
        resolvers
    })
    
    server.applyMiddleware({ app })
    
    await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0-avv4c.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, {useNewUrlParser: true})
    
    app.listen({ port: 3000 }, () => 
        console.log(`Server ready at http://localhost:3000${server.graphqlPath}`)
    )
})()
