const { Router } = require("express");
const router = Router();


const mainController = require("../app/Controller/mainController");
const filmController = require("../app/Controller/filmController");
const serieController = require("../app/Controller/serieController");
const animeController = require("../app/Controller/animeController");

router.get("/", mainController.renderHomePage);
router.get("/films", filmController.renderFilmPage);
router.get("/series", serieController. renderSeriePage)
router.get("/animes", animeController. renderAnimePage)



module.exports = router;