const express = require("express");

const electedOfficialApi = require("../models/electedOfficial.js");

const electedOfficialRouter = express.Router();

electedOfficialRouter.get("/", (req, res) => {
  electedOfficialApi
    .getAllElectedOfficials()
    .then(allElectedOfficials => {
      res.render("electedOfficial/allElectedOfficials", {
        allElectedOfficials
      });
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

electedOfficialRouter.get("/new", (req, res) => {
  res.render("electedOfficial/createElectedOfficial");
});

electedOfficialRouter.get("/edit/:id", (req, res) => {
  const electedOfficialId = req.params.id;

  electedOfficialApi
    .getElectedOfficialById(electedOfficialId)
    .then(electedOfficial => {
      res.render("electedOfficial/editElectedOfficial", { electedOfficial });
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

electedOfficialRouter.get("/:id", (req, res) => {
  const electedOfficialId = req.params.id;

  electedOfficialApi
    .getElectedOfficialById(electedOfficialId)
    .then(electedOfficial => {
      res.render("electedOfficial/singleElectedOfficial", { electedOfficial });
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

electedOfficialRouter.post("/", (req, res) => {
  const newElectedOfficial = req.body;

  electedOfficialApi
    .createElectedOfficial(newElectedOfficial)
    .then(() => {
      res.redirect("/electedOfficial");
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

electedOfficialRouter.put("/:id", (req, res) => {
  const electedOfficialId = req.params.id;
  const electedOfficialData = req.body;

  electedOfficialApi
    .updateElectedOfficial(electedOfficialId, electedOfficialData)
    .then(() => {
      res.redirect(`/electedOfficial/${electedOfficialId}`);
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

electedOfficialRouter.delete("/:id", (req, res) => {
  const electedOfficialId = req.params.id;

  electedOfficialApi
    .deleteElectedOfficial(electedOfficialId)
    .then(() => {
      res.redirect("/electedOfficial");
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

electedOfficialRouter.get("/byName/:name", (req, res) => {
  const electedOfficialName = req.params.name;

  electedOfficialApi
    .getElectedOfficialByName(electedOfficialName)
    .then(electedOfficials => {
      res.json(electedOfficials);
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

module.exports = {
  electedOfficialRouter
};
