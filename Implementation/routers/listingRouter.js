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



router.get("/listings", async (req, res) => {
  try {
    const where = {};
    if (req.query.category) {
      where.category = req.query.category;
    }
    const listings = await listing.findAll({ where });
    res.json(listings);
  } catch (err) {
    res.status(500).send("Error fetching listings");
  }
});


module.exports = router;
