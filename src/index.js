require('dotenv').config()

const express = require('express')
const app = express()
const routes = require('./routes')

app.use(express.json())

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_API_SECRET)

app.use(routes)

app.listen(8000)
