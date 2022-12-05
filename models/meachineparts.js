const mongoose =require('mongoose')
const router = require('../routers/meachineparts')

const meachinepartsSchema = new mongoose.Schema({
    Material:{
        type:String,
        required:true
    },
    max:{
        type:Number,
        required:true
    }


})

module.exports = mongoose.model('Meachineparts',meachinepartsSchema)



