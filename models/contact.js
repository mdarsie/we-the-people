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

const getContactById = (id) => {
  return ContactCollection.findById(id)
}

const getAllContacts = () => {
  return ContactCollection.find({})
}

const getContactByName = (name) => {
  return ContactCollection.findOne({ name: name })
}

const createContact = (newContact) => {
  return ContactCollection.create(newContact)
}

const updateContact = (id, updatedContact) => {
  return ContactCollection.updateOne({ _id: id }, updatedContact)
}

const deleteContact = (id) => {
  return ContactCollection.deleteOne({ _id: id })
}

module.exports = {
  getContactById,
  getAllContacts,
  createContact,
  updateContact,
  deleteContact,
  getContactByName
}
