
//require('dotenv').config({path:'./env'})
import mongoose from "mongoose";
//import { DB_NAME } from "./contant.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv"

dotenv.config(
    {
        path:'./env'
    }
)






connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 ,()=>{
        console.log(`Server is runnning at port : ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("Mongodb connnection failed !!!! ")
})











// import mongoose from "mongoose";
// import { DB_NAME } from "./contants";

// (
//     async()=>{
//         try {
//            await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//            app.on('error',(error)=>{
//             console.log("ERROR");
//             throw error
//            })

//            app.listen(process.env.PORT,()=>{
//             console.log(`App is listning on PORT : ${process.env.PORT}` )
//            })

//         } catch (error) {
//             console.error("ERROR : ",error)
//             throw err
//         }
//     }
// )()
