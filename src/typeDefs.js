const { gql } = require('apollo-server-express');

const typedefs = gql`
scalar Date

    type Query {
        hello: String! 
        cats: [Cat!]!
        members: [Member!]!
    }

    type Cat{
        id: ID!
        name: String!
    }

    type Member{
        id: ID!
        name: String!
        gender: String!
        dob: Date!
        date_baptized: Date
        baptized_by: String
        date_transferred_into_assembly: Date
        date_transferred_out_of_assembly: Date
        hometown: String!
        marital_status: String!
        occupation: String!
        remarks: String
    }

    type Mutation {
        createCat(name: String!): Cat!
        addMember(name: String!, gender: String!, dob: Date!,
                  date_baptized: Date, baptized_by: String, date_transferred_into_assembly: Date,
                  date_transferred_out_of_assembly: Date, hometown: String!, marital_status: String!,
                  occupation: String!, remarks: String): Member!
    }
`

module.exports = typedefs