const express=require("express");
const app=express();
const sequelize = require("./config/db");

const connection=require('./config/connection.js');


app.use(express.static("public"));



//middleware
app.use(express.json()); // for JSON requests (like fetch/AJAX)
app.use(express.urlencoded({ extended: true })); // for form submissions

// Router takes data
const signupRouter = require("./routers/signupRouter.js");
app.use("/", signupRouter);




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