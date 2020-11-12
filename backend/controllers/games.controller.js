const Game = require('../models/games.model');

exports.loadAll = async (req, res) => {
  try {
    const result = await Game.find();
    if(!result) res.status(404).json({ games: 'Not found'});
    else res.json(result);
  } catch(err) {
    res.status(500).json(err);
  }
};

exports.loadSelected = async (req, res) => {
  try {
    const result = await Game.findById(req.params.id);
    if(!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  } catch(err) {
    res.status(500).json(err);
  }
};
