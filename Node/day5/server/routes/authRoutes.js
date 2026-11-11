import express from "express";
import { adddata,paramsdatas } from "../controller/authContoller.js";


const authRoute = express.Router();

// http://localhost:5000/api/auth/useradd
// http://localhost:5000/api/auth/paramsdata/241963



authRoute.post("/useradd",adddata)
authRoute.get("/paramsdata/:userid",paramsdatas)



export default authRoute;