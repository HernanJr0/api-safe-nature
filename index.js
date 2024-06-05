require('dotenv').config()

const express = require('express')
const app = express()
const routes = require('./routes')

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_API_SECRET)

app.use(routes)

app.listen(8000)
