const express = require("express");
const router = express.Router();

const defaultRender = require("../middlewares/defaultRender.middleware");
router.use(defaultRender);

const homeController = require("../controllers/home.controller");
router.get("/", homeController.getHome);

module.exports = router;
