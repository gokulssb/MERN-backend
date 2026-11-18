import express from "express"
import { adddData } from "../controller/curdcontroller.js"


const route =express.Router()

route.post("/adddata",adddData)


export default route

// http://localhost:5000/api/auth/adddata
