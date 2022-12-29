const express= require("express");
const app= express();
const cors= require("cors");
const dotenv = require("dotenv");
const ContactsData =require("../Routes/contact")
const mongoose= require("mongoose");
mongoose.set('strictQuery', true);
app.use(cors());
app.use(express.json());
dotenv.config();

mongoose.connect("mongodb+srv://group8:contacts@cluster0.w4ouo0v.mongodb.net/?retryWrites=true&w=majority" ,{useNewUrlParser: true},(err)=>{
    if(err){
        console.log(err.message)
    }else{
    console.log('connected to db')
    }
});

app.use("/" , ContactsData)


app.listen(3000,()=>{console.log("server is running on port 3000")});