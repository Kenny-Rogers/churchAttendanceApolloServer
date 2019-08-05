const { ApolloServer, gql } = require('apollo-server-express')
const express = require('express')
// const { typeDefs, resolvers } = require('./schema')

const app = express();

const typeDefs = gql`
    type Query {
        hello: String! 
    }
`

const resolvers = {
    Query: {
        hello: () => 'hello'
    }
}
const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.applyMiddleware({ app })

app.listen({ port: 3000 }, () => 
    console.log(`Server ready at http://localhost:3000${server.graphqlPath}`)
)