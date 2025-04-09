const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
require('dotenv').config();

const app=express();

app.use(cors({
    origin: 'http://localhost:5173',  // your React app's URL when running via Vite
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true  // if you need to send cookies or auth headers
  }));
app.use(express.json());

//routes
const seatRoutes=require('./routes/seatRoutes');
app.use('/api',seatRoutes);


const startServer=async()=>{
    try{
        const port=process.env.PORT ||5000;
        mongoose.connect(process.env.MONGO_URI).then(()=>{
            console.log("Mongo DB Connection Successfull!");
        })

        app.listen(port,()=>{
            console.log("Server is running successfully on PORT:",port);
        })
    }
    catch(err){
        console.log("Error Found at Mongoose Connection:",err);
    };
}

startServer();