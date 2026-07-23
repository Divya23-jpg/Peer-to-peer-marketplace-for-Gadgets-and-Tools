const express=require("express");
const app=express();
const sequelize = require("./config/db");
const userrouter=require('./routers/signupRoutes.js')
const student=require('./models/model.js');
const connection=require('./config/connection.js');
app.use(express.static("public"));
app.use('/',userrouter);

app.listen(3000);
async function start() {
    await connection();
    await sequelize.sync()
    
}
start();