const express=require("express");
const app=express();
const sequelize = require("./config/db");
const path = require("path");
const connection=require('./config/connection.js');


app.use(express.static("public"));



//middleware
app.use(express.json()); // for JSON requests (like fetch/AJAX)
app.use(express.urlencoded({ extended: true })); // for form submissions

// Routers
const signupUserRouter = require("./routers/signupRouter.js");
const signupRenterRouter = require("./routers/signup_renterRouter.js");
// const signupAdminRouter = require("./routers/signup_adminRouter.js");
const loginRouter = require("./routers/loginRouter.js");

app.use("/signup/user", signupUserRouter);
app.use("/signup/renter", signupRenterRouter);
// app.use("/signup/admin", signupAdminRouter);
app.use("/", loginRouter);



// Serve signup pages
app.get("/signup/Customer", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "signup.html"));
});
app.get("/signup/renter", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "signup_renter.html"));
});
app.get("/signup/admin", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "signup_admin.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});

// server running
app.listen(3000 ,()=>{
    console.log("Sever running on  http://localhost:3000");
});


// db connection
async function start() {
    await connection();
    await sequelize.sync();
    
}
start();