import express, { urlencoded } from "express";
 //import userDetails from './models/eventsmodel.js';
 //import Event from '../models/eventsmodel.js';
 import {User, UserLogin} from "../models/eventsmodel.js";
 import bodyParser from "body-parser";
 var urlencodedParser = bodyParser.urlencoded({extended: false})
 
const router = express.Router();
 //add events

// router.get("/addevent",async(express.request,express.response)=>{

//     try{

//     }
// })

//get all events

router.get("/",(request,response)=>{ 

   
    return response.status(200).send("welcome to the node and express api implementation")
});

router.post("/newuser", async(request,response)=>{

    try{
        //API input from user like postman/ browser form
    const newuserobj={
        firstName: request.body.firstName, 
        lastName: request.body.lastName,
        emailId: request.body.emailId,
        password:request.body.password,
        gender: request.body.gender,
        accounttype:request.body.accounttype
    } 
    //User model associated to moongose API which internally refereing current connection
    const user= await User.create(newuserobj);
    return response.status(201).send(user);
}
    catch(error){
      console.log("Something went wrong!",error);
      response.status(500).send({message:error.message})     
    }
  
 });

 router.post("/login",async(request,response)=>{

    try{
        const login={
            emailId: request.body.emailId,
            password: request.body.password
        }

        const loginUser=await User.find({emailId:login.emailId,password:login.password});
    
        if(loginUser!="")
        return response.status(200).send(loginUser);
    else
    return response.status(404).send("User credentials aren't correct or user not found");

    }
    catch(error){
        console.log("Login not successful.",error);
        return response.status(500).send(error);

    }
    
});


// router.get("/allevents",async(request,response)=> {
//     try {
//         const events = await Event.find({});

//         return response.status(200).json({
//             data:events,
//             count:events.length
//         }); 
//      } catch(error){
//         console.log(error);
//         response.status(500).send({message:error.message})


//      }
// })

// module.exports = router;
export default router;