const express = require('express');
const router = express.Router();

const orders = require('../controllers/orders.controller');

router.post('/orders', orders.sendOrder);

module.exports = router;
