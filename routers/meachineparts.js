const express =require('express')
const router = express.Router()
const Meachineparts =require('../models/meachineparts')
const Meachineparts1 =require('../models/meachineparts1')




router.get('/', async(req,res) => {
 try{
    const meachineparts = await Meachineparts.find()
    res.json(meachineparts)
 }catch(err){
    res.send('Error'+err)
 }
})
router.get('/:id',async(req,res) => {
    try{
       const meachineparts = await Meachineparts.findById(req.params.id)
       res.json(meachineparts)
    }catch(err){
       res.send('Error'+err)
    }
   })
router.post('/',async(req,res) =>{
    const meachineparts =new Meachineparts({
        Material: req.body.Material,
        max: req.body.max
    })
 try{
    const a1 =await meachineparts.save()
    res.json(a1)
 }
 catch(err){
    res.send('Error'+err)
 }
})

router.put('/:id',async(req,res)=>{
    try{
    const meachineparts = await Meachineparts.findById(req.params.id)
    meachineparts.Material= req.body.Material,
    meachineparts.max= req.body.max


   const a1 =await meachineparts.save()
   res.json(a1)
    }
    catch(err){
        res.send('Error')
    }
})
router.delete('/:id',async(req,res)=>{
    try{
    const meachineparts = await Meachineparts.findById(req.params.id)
    Material= req.body.Material,
    max=req.body.max
   const a1 =await meachineparts.remove()
   res.json(a1)
    }
    catch(err){
        res.send('Error' +err)
    }
})


module.exports =router