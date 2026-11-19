import mongoose from "mongoose";


const curdSchema = new mongoose.Schema({

     name: String,
    email: String,
    password: String,
    status: {
        type: String,
        default: "active"
    }

},{timestamps:true})

const curdmodle = mongoose.model("curdmodle",curdSchema)

export default curdmodle