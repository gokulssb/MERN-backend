import express from 'express'
import dotenv from 'dotenv'
import cros from 'cors'
import route from './routes/curdroutes.js'
import connectDB from './config/db.js'

dotenv.config()
connectDB()
const app =express()
app.use(cros())
app.use(express.json())

app.use("/api/auth", route)  

const PORT = process.env.PORT ||4000

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
// http://localhost:5000/api/auth
