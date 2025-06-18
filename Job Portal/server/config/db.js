import mongoose from "mongoose";

//Funtion to Connect with MongoDB 

const connectDB = async ()=>{
    mongoose.connection.on('connected',()=>{console.log('DataBase Connected!')});
    mongoose.connect(`${process.env.MONGODB_URI}/job-portal`)
};

export default connectDB;