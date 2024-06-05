require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()

app.use(cors())

mongoose.connect(process.env.MONGO_API_SECRET, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use(express.json())

app.use(routes)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})
