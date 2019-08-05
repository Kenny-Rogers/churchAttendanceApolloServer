const { gql } = require('apollo-server-express');

const typedefs = gql`
    type Query {
        hello: String! 
        cats: [Cat!]!
    }

    type Cat{
        id: ID!
        name: String!
    }
    type Mutation {
        createCat(name: String!): Cat!
    }
`

module.exports = typedefs