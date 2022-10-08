module.exports = app => {
  const tutorials = require("../controllers/tutorial.controller.js");
// const uploadAvatar = require('../../services/uploadAvatar.service');

const uploadPicture = require('../../services/uploadAvatar.service');

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", tutorials.create);
  router.post("/picture/:id", uploadPicture.single('picture'), tutorials.savePicture);
  router.post("/tutorials/picture/:id", uploadPicture.single('picture'), tutorials.savePicture);

  // Retrieve all Tutorials
  router.get("/", tutorials.findAll);

  // Retrieve all published Tutorials
  router.get("/published", tutorials.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", tutorials.findOne);

  // Update a Tutorial with id
  router.put("/:id", tutorials.update);

  // Delete a Tutorial with id
  router.delete("/:id", tutorials.delete);

  // Create a new Tutorial
  router.delete("/", tutorials.deleteAll);

  app.use("/api/tutorials", router);
};
