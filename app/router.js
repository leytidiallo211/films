const { Router } = require("express");
const router = Router();


const mainController = require("../app/Controller/mainController");
const filmController = require("../app/Controller/filmController");
const serieController = require("../app/Controller/serieController");
const animeController = require("../app/Controller/animeController");
const inscrireController = require("./Controller/inscrireController");
const loginController = require("./Controller/loginController");
const contactController = require("./Controller/contactController");

router.get("/", mainController.renderHomePage);
router.get("/films", filmController.renderFilmsPage);
router.get("/series", serieController.renderSeriePage);
router.get("/animes", animeController.renderAnimePage);
router.get("/inscrire", inscrireController.renderInscrirePage);
router.get("/login", loginController.renderLoginPage);
router.get ("/contact",contactController.renderContactPage);


module.exports = router;