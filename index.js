require('dotenv').config()

const express = require('express')
const app = express()
const routes = require('./routes')

app.use(express.json())

const mongoose = require('mongoose')
// mongoose.connect(process.env.MONGO_API_SECRET)
mongoose.connect(
  'mongodb+srv://admin:xEkT7E4dlk5asAYd@cluster0.thgtamc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
)

app.use(routes)

app.listen(8000)
