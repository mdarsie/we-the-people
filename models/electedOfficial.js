const mongoose = require("./connection.js");

const ElectedOfficialSchema = new mongoose.Schema({
  name: String,
  title: String,
  picture: String,
  scope: String,
  body: String,
  phone: String,
  email: String,
  webpage: String
});

const ElectedOfficialCollection = mongoose.model(
  "electedOfficial",
  ElectedOfficialSchema
);

module.exports = {
  getHelloWorldString
};
