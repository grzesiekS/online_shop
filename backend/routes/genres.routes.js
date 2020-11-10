const express = require('express');
const router = express.Router();

const genres = require('../controllers/genres.controller');

router.get('/genres', genres.loadAll);

module.exports = router;
