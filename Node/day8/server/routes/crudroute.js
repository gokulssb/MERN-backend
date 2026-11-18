import express from "express"
import { insertData } from "../controller/curdControl.js"

const route=express.Router()

route.post("/insertdata",insertData)

export default route