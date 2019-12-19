const express = require("express");

const legislationApi = require("../models/legislation.js");

const legislationRouter = express.Router();

legislationRouter.get("/", (req, res) => {
  legislationApi
    .getAllLegislation()
    .then(allLegislation => {
      res.render("legislation/allLegislation", { allLegislation });
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

legislationRouter.get("/new", (req, res) => {
  res.render("legislation/createLegislation");
});

legislationRouter.get("/edit/:id", (req, res) => {
  const legislationId = req.params.id;

  legislationApi
    .getLegislationById(legislationId)
    .then(legislation => {
      res.render("legislation/editLegislation", { legislation });
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

legislationRouter.get("/:id", (req, res) => {
  const legislationId = req.params.id;

  legislationApi
    .getLegislationById(legislationId)
    .then(legislation => {
      res.render("legislation/singleLegislation", { legislation });
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

legislationRouter.post("/", (req, res) => {
  const newLegislation = req.body;

  legislationApi
    .createLegislation(newLegislation)
    .then(() => {
      res.redirect("/legislation");
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

legislationRouter.put("/:id", (req, res) => {
  const legislationId = req.params.id;
  const legislationData = req.body;

  legislationApi
    .updateLegislation(legislationId, legislationData)
    .then(() => {
      res.redirect(`/legislation/${legislationId}`);
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

legislationRouter.delete("/:id", (req, res) => {
  const legislationId = req.params.id;

  legislationApi
    .deleteLegislation(legislationId)
    .then(() => {
      res.redirect("/legislation");
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

legislationRouter.get("/byTitle/:title", (req, res) => {
  const legislationTitle = req.params.title;

  legislationApi
    .getLegislationByTitle(legislationTitle)
    .then(legislation => {
      res.json(legislation);
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

module.exports = {
  legislationRouter
};
