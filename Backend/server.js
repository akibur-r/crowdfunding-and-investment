import express from 'express';
import userRoutes from './routes/userRoutes.js';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import { notFound,errorHandler } from './middleware/errorMiddleware.js';
import cookieParser from 'cookie-parser';
dotenv.config()

const port= process.env.PORT||5000;

connectDB();

const app=express();

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use(cookieParser());

app.use("/api/users",userRoutes);


app.get("/",(req,res)=>{
    res.send('Server Is Ready');
});

app.use(notFound);
app.use(errorHandler);

app.listen(port,()=>{
    console.log(`Server is Running at ${port}`);
})
