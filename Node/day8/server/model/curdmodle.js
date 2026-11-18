import mongoose from "mongoose";


const curdSchema = new mongoose.Schema({

   username:string,
   useremail:{type:String,required:true},
   userpassword:{type:String,required:true},
   status:{type:String,default:"active"}

},{timestamps:true})

const curdmodle = mongoose.model("curdmodle",curdSchema)

export default curdmodle