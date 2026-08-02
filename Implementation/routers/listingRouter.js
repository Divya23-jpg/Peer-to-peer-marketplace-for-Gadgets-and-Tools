const express=require("express");
const router=express.Router();
const listingController=require("../controllers/listingController.js");
const multer=require("multer");
const isAuthenticated=require("../auth.js");

// multer setup
const upload=multer({dest:"uploads/"}).array("photos",3);


//  Protect listing creation with auth + upload
router.post("/listing", isAuthenticated, upload, listingController.createListing);

// Fetching listing
router.get("/listing", listingController.getListings);

module.exports=router;