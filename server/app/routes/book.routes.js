module.exports = app => {
  const book = require("../controllers/book.controller.js");

  var router = require("express").Router();

  router.post("/", book.create);

  router.get("/", book.findAll);

  router.get("/:id", book.findOne);

  router.put("/:id", book.update);

  router.delete("/:id", book.delete);

  app.use('/api/books', router);
};