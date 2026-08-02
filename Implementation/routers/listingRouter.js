const express = require("express");
const router = express.Router();

const listingController = require("../controllers/listingController.js");
const multer = require("multer");
const isAuthenticated = require("../auth.js");

// multer setup
const upload = multer({ dest: "uploads/" }).array("photos", 3);

//  Create listing
router.post(
  "/listings",
  isAuthenticated,
  upload,
  listingController.createListing,
);

//  Fetch listings
router.get("/listings", listingController.getListings);

module.exports = router;
