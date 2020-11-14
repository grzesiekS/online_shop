const sanitize = require('mongo-sanitize');

const Order = require('../models/orders.model');

exports.sendOrder = async (req, res) => {
  try {
    const bodySanitize = sanitize(req.body);
    const { name, lastname, email, phone, gamesInCart } = bodySanitize;

    if(email.split('@').length === 2) {
      const newOrder = new Order(
        {
          name: name,
          lastname: lastname,
          email: email,
          phone: phone,
          gamesInCart: gamesInCart,
        }
      );

      await newOrder.save();
      res.json({ message: 'OK' });
    }

  } catch(err) {
    res.status(500).json(err);
  }
};
