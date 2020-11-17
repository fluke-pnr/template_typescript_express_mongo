import express from 'express'
import bodyParser from "body-parser"
import compression from "compression"
import morgan from "morgan"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose";

// Router
import home from '../src/Router/Home'

// create express app
dotenv.config()
const app = express()
app.use(compression())
app.use(morgan("dev"))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Setup Mongoose
mongoose.connect(process.env.DB_HOST,
    { 
      useNewUrlParser: true,
      user: process.env.DB_USERNAME,
      pass: process.env.DB_PASSWORD
    },
    (error) => {
      console.log('error: ', error)
      console.log("Connect DB success");
    }
  )
  

// register express routes from defined application routes
app.use("/", home())

// start express server
const port = 5000
app.listen(port)
console.log(`Express server has started on port ${port}.`)
