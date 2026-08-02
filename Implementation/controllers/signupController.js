const express=require("express");
const user=require('../models/model.js');
const router=express.Router();
const bcrypt=require("bcrypt")


exports.signup=async(req,res)=>{
    try{
        const {name,email,phone,address,password,confirmPassword}=req.body;

        if(password!=confirmPassword){
            return res.status(400).send("Passwords do not match");
        }

        // convert password to Hash  password
        const hashedPassword=await bcrypt.hash(password,10);
        
        await user.create({
            name,email,phone,address,password:hashedPassword
        });
        res.send(`<script>alert('Signup successful'); window.location.href='/';</script>`);
        }
        catch(err){
            console.error(err);
            res.status(500).send("Error signing up");
    }
};



