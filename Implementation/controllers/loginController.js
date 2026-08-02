const user=require("../models/model.js")
const bcrypt=require("bcryptjs");



exports.login=async(req,res)=>{
    try{
        const {email,password}=req.body;


        const exitsUser=await user.findOne({where :{email}});
        if(!exitsUser){
            return res.status(400).send("Invalid email or password");

        }

        const ismatch=await bcrypt.compare(password,exitsUser.password);
        if(!ismatch){
            return res.status(400).send("Invalid email or password");
        }
        res.send(`<script>alert('Login successful'); window.location.href='/';</script>`);

    } catch(err){
        console.error(err);
        res.status(500).send("Error logging in");
    }
};