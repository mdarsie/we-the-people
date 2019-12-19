const mongoose = require("./connection.js");

const LegislationSchema = new mongoose.Schema({
  title: String,
  billID: String,
  support: Boolean,
  scope: String,
  body: String,
  committee: String,
  subCommittee: String,
  legislationText: String,
  pending: Boolean,
  passed: Boolean
});

const LegislationCollection = mongoose.model("legislation", LegislationSchema);

const getLegislationById = id => {
  return LegislationCollection.findById(id);
};

const getAllLegislations = () => {
  return LegislationCollection.find({});
};

const getLegislationByTitle = title => {
  return LegislationCollection.findOne({ title: title });
};

const createLegislation = newLegislation => {
  return LegislationCollection.create(newLegislation);
};

const updateLegislation = (id, updatedLegislation) => {
  return LegislationCollection.updateOne({ _id: id }, updatedLegislation);
};

const deleteLegislation = id => {
  return LegislationCollection.deleteOne({ _id: id });
};

module.exports = {
  getLegislationById,
  getAllLegislations,
  createLegislation,
  updateLegislation,
  deleteLegislation,
  getLegislationByTitle
};
