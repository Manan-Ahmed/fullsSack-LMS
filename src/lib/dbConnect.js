import mongoose from "mongoose";


export async function connectDB() {
    try{

        let connection;
        if(connection?.connection?.readyState != 1){
            connection = await mongoose.connect(process.env.MONGODB_URI)
            console.log("connect db");
        }
 
    }catch(error){
        console.log('error',error);
        
    }
}