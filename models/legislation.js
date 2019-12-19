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

module.exports = {
  getHelloWorldString
};
