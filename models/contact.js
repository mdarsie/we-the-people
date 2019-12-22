const mongoose = require("./connection.js");

const ContactSchema = new mongoose.Schema({
  contactType: String,
  date: String,
  from: String,
  electedOfficialId: String,
  regarding: String,
  recievedReply: Boolean,
  followUp: Boolean
});

const ContactCollection = mongoose.model("contact", ContactSchema);

const getContactById = id => {
  return ContactCollection.findById(id);
};

const getAllContacts = () => {
  return ContactCollection.find({});
};

const getContactByType = type => {
  return ContactCollection.findOne({ type: type });
};

const createContact = newContact => {
  return ContactCollection.create(newContact);
};

const updateContact = (id, updatedContact) => {
  return ContactCollection.updateOne({ _id: id }, updatedContact);
};

const deleteContact = id => {
  return ContactCollection.deleteOne({ _id: id });
};

module.exports = {
  getContactById,
  getAllContacts,
  createContact,
  updateContact,
  deleteContact,
  getContactByType
};
