const express=require("express");
const sequelize = require("./config/db");

const student=require('./models/model.js');
const connection=require('./config/connection.js');

async function start(params) {
    await connection();
    await sequelize.sync()
    

    
}

start();