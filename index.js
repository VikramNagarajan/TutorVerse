const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

MONGO_URL = "mongodb+srv://tutorverseadmin:3P6Nv9CZ53QqSoNqp@accounts.4tuvyji.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect("")