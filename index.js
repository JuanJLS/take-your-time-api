'use strict'

const path = require('path')

const express = require('express')
const cors = require('cors');

require('dotenv').config({ path: path.join(__dirname, '.env') })

const routes = require('./routes')

const app = express()
app.use(cors())

app.use(express.json())
app.use('/', routes)

module.exports = app
