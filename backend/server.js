const express = require('express');

const cors = require('cors');


const House = require('./models/house');
const Message = require('./models/Message');

const app = express();

app.use(cors());


app.get('/houses', async (req, res) => {
var suburbName = req.query.suburb;
var ascendBy = req.query.asc;
var descendBy = req.query.desc;
let params = {} // req.query

    try {

      const houses = await House.find(params);
      if(ascendBy){
        // console.log(houses);
        houses.sort((a,b)=>{
          if(a[ascendBy]<b[ascendBy]){
            return -1;
          }
        });
      }
      if(descendBy){
        houses.sort((a,b)=>{
          if(a[descendBy]>b[descendBy]){
            return -1;
          }
        });
      }
      if (!houses) {
        return res.status(404).json({ message: 'houses not found' });
      }
  
      res.json(houses);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });

  app.get('/', async (req, res) => {
    const params = {} // req.query
    try {
      const messageX = await Message.find(params);
  
      if (!messageX) {
        return res.status(404).json({ message: 'messages not found' });
      }
  
      res.json(messageX);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });

module.exports = app;
