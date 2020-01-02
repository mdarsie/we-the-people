const express = require("express");
const app = express();
const methodOverride = require("method-override");

const { contactRouter } = require("./controllers/contact.js");
const { electedOfficialRouter } = require("./controllers/electedOfficial.js");
const { legislationRouter } = require("./controllers/legislation.js");

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(methodOverride("_method"));

app.use(express.static(__dirname + "/public"));

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render(home.hbs)
});

app.use("/contact", contactRouter);
app.use("/electedOfficial", electedOfficialRouter);
app.use("/legislation", legislationRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App is listening on PORT ${PORT}`);
});
