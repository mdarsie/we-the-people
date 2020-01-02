const mongoose = require("./connection.js");

const ElectedOfficialSchema = new mongoose.Schema({
  bioguide: String,
  first: String,
  last: String,
  title: String,
  picture: String,
  level: String,
  state: String,
  body: String,
  phone: String,
  email: String,
  url: String
});

const ElectedOfficialCollection = mongoose.model(
  "electedOfficial",
  ElectedOfficialSchema
);

const getElectedOfficialById = id => {
  return ElectedOfficialCollection.findById(id);
};

const getAllElectedOfficials = () => {
  return ElectedOfficialCollection.find({});
};

const getElectedOfficialByName = name => {
  return ElectedOfficialCollection.findOne({ name: name });
};

const createElectedOfficial = newElectedOfficial => {
  return ElectedOfficialCollection.create(newElectedOfficial);
};

const updateElectedOfficial = (id, updatedElectedOfficial) => {
  return ElectedOfficialCollection.updateOne(
    { _id: id },
    updatedElectedOfficial
  );
};

const deleteElectedOfficial = id => {
  return ElectedOfficialCollection.deleteOne({ _id: id });
};

module.exports = {
  getElectedOfficialById,
  getAllElectedOfficials,
  createElectedOfficial,
  updateElectedOfficial,
  deleteElectedOfficial,
  getElectedOfficialByName
};
