const express = require('express')

const electedOfficialApi = require('../models/electedOfficial.js')

const electedOfficialRouter = express.Router()

electedOfficialRouter.get('/', (req, res) => {
  res.send(electedOfficialApi.getHelloWorldString())
})

module.exports = {
  electedOfficialRouter
}
