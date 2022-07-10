
//point 3 from instructions.txt
const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()
//point 4 from ins.txt
let db,
    dbConnectionString = process.env.DB_STRING, //this pulls the connectionstring from the env file
    dbName = 'souls-quotes', //from the mongoDB name
    collection

MongoClient.connect(dbConnectionString) // point 5 from ins.txt
    .then(client => {
        console.log('connected to database')
        db = client.db(dbName) //from the mongoDB name
        collection = client.collection('quotes')
    })
