import mongoose, { Mongoose,Schema } from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"



const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true,
    },
       Email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    fullname:{
        type:String,
        required:true,
        index:true,
        trim:true,
    }
    ,
       avatar:{
        type:String, //clodinary ka server use this avatar
        required:true,
    },
       coverImage:{
        type:String,
    }
    ,
      watchHistory:{
        type:Schema.Types.ObjectId,
        ref:"Vedio"
    },
    Password:{
        type:String,
        required:[true, 'Password is required']
    },
    refreshToken:{
        type:String,
    }
},
  {
        timestamps:true
    }
)

userSchema.pre("save", async function(next){
    if(this.isModified("password")) return next
    this.password = bcrypt.hash(this.password, 10 )
    next()
})
 userSchema.method.isPasswordCorrect= async function(password){
   return  await bcrypt.compare(password, this.password)
 }

export const User = mongoose.model("User" , userSchema)