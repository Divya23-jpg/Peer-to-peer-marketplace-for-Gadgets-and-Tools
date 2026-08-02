const express=require("express");

const { renter } = require("../models/model.js");
const router=express.Router();
const bcrypt=require("bcrypt")


exports.signup=async(req,res)=>{
    try{
        const {business_name,email,phone,address,bank_account,id_verification,password,confirmPassword}=req.body;

        if(password!=confirmPassword){
            return res.status(400).send("Passwords do not match");
        }

        // convert password to Hash  password
        const hashedPassword=await bcrypt.hash(password,10);
        
        await renter.create({
            business_name,email,phone,address,bank_account,id_verification,password:hashedPassword
        });

        
        res.redirect("/login.html");  // redirect to login page
   
        }
        catch(err){
            console.error(err);
             res.redirect("/signup_renter.html");
          
    }
};



