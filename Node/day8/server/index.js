 import express from 'express';
 import dotenv from 'dotenv';
import cros from 'cors';
import connectDB from './config/db.js';
import route from './routes/crudroute.js';

dotenv.config()
  const app = express();

  app.use(cros())
  app.use(express.json())

  connectDB()
  app.use("/api/auth",route)

  const PORT =process.env.PORT ||3000


  app.listen(PORT,()=>{
  console.log(`Server is running on http://localhost:${PORT}`)

  })
//http://localhost:5000/api/auth/insertdata