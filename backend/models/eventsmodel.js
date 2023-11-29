import mongoose from "mongoose";

const userDetails=mongoose.Schema({

    firstName:{
        type:String,
        required:true  
    },
    lastName:{
        type:String,
        required:true
    }, emailId:{
        type:String,
        required:true  
    },
    password:{
        type:String,
        required:true
    }
    
});

const userLogin=mongoose.Schema({

 emailId:{
        type:String,
        required:true  
    },
    password:{
        type:String,
        required:true
    }
    
});
 
export const User = mongoose.model("User",userDetails);
export const UserLogin = mongoose.model("UserLogin",userLogin);
