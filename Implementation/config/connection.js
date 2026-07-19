const sequelize=require('../config/db.js');
function connection() {
    sequelize.authenticate().then(()=>{
        
        console.log(" database Connected successfully")
    
    }).catch((error)=>console.log(error));
    
}

module.exports=connection;