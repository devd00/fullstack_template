
//point 3 from instructions.txt
const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()
//point 4 from ins.txt
let db,
    dbConnectionString = process.env.DB_STRING, //this pulls the connectionstring from the env file
    dbName = 'sample_dbase', //from the mongoDB name
    collection

MongoClient.connect(dbConnectionString) // point 5 from ins.txt
    .then(client => {
        console.log('connected to database')
        db = client.db(dbName) //from the mongoDB name
        collection = db.collection('collection_z')
    })

//middleware--set before all CRUD ops
app.set('view engine', 'ejs') //set view engine to ejs //goes into views foder to look for a ejs file
app.use(express.static('public')) //creates a public folder where css, main.js files and all the files needed for the app are here
app.use(express.urlencoded({extended:true}))
app.use(express.json()) //helps express json objects back and forth 
app.use(cors())

//no bodyparser because__You can use that, it's an older library that express has built in the same logic into urlencoded and json

app.get('/', async(req,res)=>{
    try{
        res.render('index.ejs') //since ejs file that's why needs to be rendered

    }catch (error){
        res.status(500).send({message: error.message})

    }
})





app.listen(process.env.PORT || PORT, () => {
    console.log(`server is running on ${process.env.PORT}`)
})
