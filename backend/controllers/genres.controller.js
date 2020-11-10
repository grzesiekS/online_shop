const Gnere = require('../models/genres.model');

exports.loadAll = async (req, res) => {
  try {
    res.json(await Gnere.find());
  } catch(err) {
    res.status(500).json(err);
  }
};
