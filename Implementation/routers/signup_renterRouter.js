const express = require("express");
const signupController = require("../controllers/signup_renterController.js");
const router = express.Router();

// POST: renter signup
router.post("/", signupController.signup);

// After signup, redirect to login page


module.exports = router;
