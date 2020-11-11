const Gnere = require('../models/genres.model');

exports.loadAll = async (req, res) => {
  try {
    const result = await Gnere.find();
    if(!result) res.status(404).json({ genres: 'Not found' });
    else res.json(result);
  } catch(err) {
    res.status(500).json(err);
  }
};
