import express from 'express'
import { regData } from '../controller/curdcontroller.js'

const route =express .Router()

route.post("/register",regData)

export default route


// http://localhost:5000/api/auth/register
