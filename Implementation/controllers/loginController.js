const { user, renter } = require("../models/model.js");
const bcrypt = require("bcryptjs");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Try user table first
    let account = await user.findOne({ where: { email } });
    let accountType = "user";

    // If not found, try renter table
    if (!account) {
      account = await renter.findOne({ where: { email } });
      accountType = "renter";
    }

    // If neither found
    if (!account) {
      return res.status(400).send("Invalid email or password");
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, account.password);
    if (!isMatch) {
      return res.status(400).send("Invalid email or password");
    }

    // Save session
    if (accountType === "user") {
      req.session.user = account;
      return res.redirect("/index.html");
    } else {
      req.session.renter = account; // ✅ must set renter session
      return res.redirect("/listing.html");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Error logging in");
  }
};
