const mongoose = require('./connection.js')

const ContactSchema = new mongoose.Schema({
 contactType: String,
 date: String,
 from: String,
 to: {electionOfficial_ID},
 regarding: {legislation_ID},
 recievedReply: Boolean,
 followUp: Boolean,
})

const ContactCollection = mongoose.model('contact', ContactSchema)




module.exports = {
  getHelloWorldString
}
