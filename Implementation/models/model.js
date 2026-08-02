const sequelize=require('../config/db.js');

const { DataTypes } = require("sequelize");


const user=sequelize.define("user",{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    phone:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true

    },
    address:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }
   

});
const renter=sequelize.define("renter",{
    business_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    phone:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true

    },
    address:{
        type:DataTypes.STRING,
        allowNull:false
    },
    bank_account:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true

    },

    id_verification:{
        type:DataTypes.BLOB,
        allowNull:false,

    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }
   

});
module.exports = { user, renter };
