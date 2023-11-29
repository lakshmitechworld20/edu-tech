import express from "express";
import mongoose from "mongoose";
 
import router from "./routes/eventsRoutes.js";
import bodyParser from "body-parser";
import cors from "cors";
 
const app = express();

app.use(express.json());
app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({extended: false}))

app.use(cors());


app.use("/events",router);
const MONGO_URL ="mongodb+srv://lakshmitechworld20:mongodb@cluster0.dajpgo7.mongodb.net/udemydemo"


let conn=mongoose.connect(MONGO_URL).then(()=> {

    
    console.log("connected to mongo db");
}).catch((error)=>{
    console.log("error", error);
})
 app.listen(3001);
//export default db;

