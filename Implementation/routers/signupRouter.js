const express=require("express");
const signupController=require("../controllers/signupController.js");
const router=express.Router();




// router
router.post("/signup",signupController.signup);

module.exports=router;
