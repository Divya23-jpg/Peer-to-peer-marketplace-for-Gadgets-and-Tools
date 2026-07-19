const sequelize=require('../config/db.js');

const { DataTypes } = require("sequelize");
const user=sequelize.define("user",{

    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
});

module.exports=user;