const express = require('express')
require("dotenv").config();
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const colors = require('colors');
const port = process.env.PORT || 5000;
const connectDB = require('./config/db')
const app = express() 

connectDB();
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(port, console.log(`Server running on port ${port}`.yellow.bold))