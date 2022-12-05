const mongoose =require('mongoose')
const router = require('../routers/meachineparts')



const meachineparts1Schema = new mongoose.Schema({

    curnt:{
        type:Number,
      
    }


})

module.exports = mongoose.model('Meachineparts1',meachineparts1Schema)
