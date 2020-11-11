const express = require('express');
const router = express.Router();

const games = require('../controllers/games.controller');

router.get('/games', games.loadAll);

module.exports = router;
