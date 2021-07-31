
import cors from  'cors';
import express from 'express';
import consola  from 'consola';
import mongoose  from 'mongoose';
// import { json } from 'body-parse';


//import application constants
import {DB,PORT} from "./constants"

//Initialize express application
const app = express();


const main =async ()=>{
    try {
        //connect with database
       await mongoose.connect(DB,{
            useNewUrlParser:true,
            useFindAndModify:false,
            useUnifiedTopology:true
        });
        consola.success("DATABASE CONNECTED...");

        //start application listerning for request on  server
        app.listern(PORT,()=>consola.success(`server is starting at port ${PORT}`));
    } catch (err) {
        
    }
}
main();
