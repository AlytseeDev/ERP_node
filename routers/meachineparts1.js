const express =require('express')
const router = express.Router()
const Meachineparts1 =require('../models/meachineparts1')


router.get('/', async(req,res) => {
    try{
       const meachineparts = await Meachineparts1.find()
       res.json(meachineparts)
    }catch(err){
       res.send('Error'+err)
    }
   })
   router.get('/:id',async(req,res) => {
       try{
          const meachineparts = await Meachineparts1.findById(req.params.id)
          res.json(meachineparts)
       }catch(err){
          res.send('Error'+err)
       }
      })
   router.post('/',async(req,res) =>{
       const meachineparts =new Meachineparts1({
        curnt: req.body.curnt
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
       const meachineparts = await Meachineparts1.findById(req.params.id)
       meachineparts.curnt= req.body.curnt
   
   
      const a1 =await meachineparts.save()
      res.json(a1)
       }
       catch(err){
           res.send('Error')
       }
   })
 
 module.exports =router