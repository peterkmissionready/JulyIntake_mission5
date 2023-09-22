const mongoose = require('mongoose')
const houses = require("./houses")
const Message = require("../models/Message")

const House = require("../models/house")

mongoose
.connect(`mongodb://localhost:27018/mongo`, { useNewUrlParser: true })
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