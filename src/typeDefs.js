const { gql } = require('apollo-server-express');

//gql types
const typedefs = gql`
    scalar Date

    type Query {
        members: [Member!]!
        memberById(id:ID!):Member!
    }

    type Member{
        id: ID!
        full_name: String!
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
        home_cell: String! 
        contact: String
    }

    type Attendance {
        id: ID!
        date: Date
        members: [ID]
    }
    type Mutation {
        addAttendance(date:Date, members:[ID]): Attendance
        addMember(full_name: String!, gender: String!, dob: Date!,
                  date_baptized: Date, baptized_by: String, date_transferred_into_assembly: Date,
                  date_transferred_out_of_assembly: Date, hometown: String!, marital_status: String!,
                  occupation: String!, remarks: String, home_cell:String!, contact: String): Member!
    }
`

module.exports = typedefs