const mongoose = require('mongoose')
const houses = require("./houses")
const Message = require("../models/Message")

const House = require("../models/house")

require('dotenv').config();


mongoose
.connect(process.env.MYDATA_DB_URI_TO_SEED_TO_RUN_DOCKERCOMPOSE, { useNewUrlParser: true })//run this seed if you want docker to fetch data from here.
// .connect(process.env.MYDATA_DB_URI, { useNewUrlParser: true })//run this seed if you want npm to fetch data from here.
.then(
  () => {
        console.log('MongoDB Connected')
        console.log('Writing seed data to MongoDB database')
        houses.forEach (async (house) => {
        const newHouse = new House( house )
        const savedItem = await newHouse.save()
        console.log(savedItem)
        })    
    })
    .catch(err => console.log(err))