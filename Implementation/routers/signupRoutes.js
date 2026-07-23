const express=require("express");
const user=require('../models/model.js');
const router=express.Router();


router.post('/signup',async(req,res)=>{
    try{
        const {email,password}=req.body;

        await user.create({email,password});
        const data= await user.findAll();
        console.log(data);

        res.send("Signup Successfully");
    }
    catch(err){
        console.error(err);
        res.status(500).send("Error signing up");
    }
});


module.exports=router;
