module.exports = app => {
  const libro = require("../controllers/libro.controller.js");

  var router = require("express").Router();

  router.post("/", libro.create);

  router.get("/", libro.findAll);

  router.get("/:id", libro.findOne);

  router.put("/:id", libro.update);

  router.delete("/:id", libro.delete);

  app.use('/api/books', router);
};