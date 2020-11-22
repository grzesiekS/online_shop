const express = require('express');
const router = express.Router();

const games = require('../controllers/games.controller');

router.get('/games', games.loadAll);
router.get('/games/:id', games.loadSelected);
router.get('/games/newRelease', games.loadNewReleases);

module.exports = router;
