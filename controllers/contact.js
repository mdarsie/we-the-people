const express = require('express')

const contactApi = require('../models/contact.js')

const contactRouter = express.Router()

contactRouter.get('/', (req, res) => {
  res.send(contactApi.getHelloWorldString())
})

module.exports = {
  contactRouter
}
