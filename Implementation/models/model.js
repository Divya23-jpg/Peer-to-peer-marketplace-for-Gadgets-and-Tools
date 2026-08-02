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
    id: { 
        type: DataTypes.INTEGER, 
        autoIncrement: true, 
        primaryKey: true
    },
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




// Listing model
const listing = sequelize.define("listing", {
    id: { 
        type: DataTypes.INTEGER, 
        autoIncrement: true, 
        primaryKey: true 
    },
    title: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false 
    },
   category: { 
    type: DataTypes.STRING 
    },
  daily_rate: { 
    type: DataTypes.DECIMAL(10,2), 
    allowNull: false
     },
   photo_url: {
     type: DataTypes.TEXT 
    },
   availability: { 
    type: DataTypes.JSONB 
    },
   security_deposit: { 
    type: DataTypes.DECIMAL(10,2) 
},
    discount: { 
        type: DataTypes.JSONB }
});

// Relationship: One renter → many listings
renter.hasMany(listing, { foreignKey: "renter_id" });
listing.belongsTo(renter, { foreignKey: "renter_id" });


module.exports = { user, renter ,listing};
