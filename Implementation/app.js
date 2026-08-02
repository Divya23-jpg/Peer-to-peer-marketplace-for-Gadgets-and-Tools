const express = require("express");
const sequelize = require("./config/db");
const path = require("path");
const connection = require("./config/connection.js");
const isAuthenticated = require("./auth.js");
const { user, renter } = require("./models/model.js");
const multer = require("multer");
const session = require("express-session");
const app = express();

app.use(express.static("public"));

//middleware

app.use(express.json()); // for JSON requests (like fetch/AJAX)
app.use(express.urlencoded({ extended: true })); // for form submissions

// session to check logged in or not
app.use(
  session({
    secret: "yourSecretKey",
    resave: false,
    saveUninitialized: false,
  }),
);

// Routers
const signupUserRouter = require("./routers/signupRouter.js");
const signupRenterRouter = require("./routers/signup_renterRouter.js");
// const signupAdminRouter = require("./routers/signup_adminRouter.js");
const loginRouter = require("./routers/loginRouter.js");

const listingRouter = require("./routers/listingRouter.js");

// mount routers
app.use("/signup/user", signupUserRouter);
app.use("/signup/renter", signupRenterRouter);
// app.use("/signup/admin", signupAdminRouter);
app.use("/", loginRouter);
app.use("/", listingRouter);

// Sign up for customer
app.get("/signup/Customer", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "signup.html"));
});

// Sign up for renter
app.get("/signup/renter", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "signup_renter.html"));
});

// Sign up for admin
app.get("/signup/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "signup_admin.html"));
});

// Login for customer/renter
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});

// auth check
app.get("/auth/check", (req, res) => {
  if (req.session && req.session.user) {
    return res.json({ type: "user", loggedIn: true });
  }
  if (req.session && req.session.renter) {
    return res.json({ type: "renter", loggedIn: true });
  }
  res.json({ loggedIn: false });
});

// Protect listing form page using isAuthenticated
app.get("/listing.html", isAuthenticated, (req, res) => {
  if (req.session.renter) {
    res.sendFile(path.join(__dirname, "public", "listing.html"));
  } else {
    // Block normal users
    res.redirect("/index.html");
  }
});
// Multer setup (max 3 photos)
const upload = multer({ dest: "uploads/" }).array("photos", 3);

// server running
app.listen(3000, () => {
  console.log("Sever running on  http://localhost:3000");
});

// db connection
async function start() {
  await connection();
  await sequelize.sync();
}
start();
