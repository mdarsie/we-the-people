const express = require("express");

const contactApi = require("../models/contact.js");

const contactRouter = express.Router();

contactRouter.get("/", (req, res) => {
  contactApi
    .getAllContacts()
    .then(allContacts => {
      res.render("contact/allContacts", { allContacts });
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

contactRouter.get("/new", (req, res) => {
  res.render("contact/createContact");
});

contactRouter.get("/edit/:id", (req, res) => {
  const contactId = req.params.id;

  contactApi
    .getContactById(contactId)
    .then(contact => {
      res.render("contact/editContact", { contact });
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

contactRouter.get("/:id", (req, res) => {
  const contactId = req.params.id;

  contactApi
    .getContactById(contactId)
    .then(contact => {
      res.render("contact/singleContact", { contact });
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

contactRouter.post("/", (req, res) => {
  const newContact = req.body;

  contactApi
    .createContact(newContact)
    .then(() => {
      res.redirect("/contact");
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

contactRouter.put("/:id", (req, res) => {
  const contactId = req.params.id;
  const contactData = req.body;

  contactApi
    .updateContact(contactId, contactData)
    .then(() => {
      res.redirect(`/contact/${contactId}`);
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

contactRouter.delete("/:id", (req, res) => {
  const contactId = req.params.id;

  contactApi
    .deleteContact(contactId)
    .then(() => {
      res.redirect("/contact");
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

contactRouter.get("/byType/:type", (req, res) => {
  const contactType = req.params.type;

  contactApi
    .getContactByType(contactType)
    .then(contacts => {
      res.json(contacts);
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

module.exports = {
  contactRouter
};
