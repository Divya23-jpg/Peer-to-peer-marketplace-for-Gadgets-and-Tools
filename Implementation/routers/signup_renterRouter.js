const express=require("express");
const signupController=require("../controllers/signup_renterController.js");
const router=express.Router();




// router
router.post("/",signupController.signup);

module.exports=router;
